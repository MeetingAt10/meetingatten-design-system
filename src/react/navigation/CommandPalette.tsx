"use client";
import { useEffect, useState } from 'react';
import {
  Autocomplete, useFilter, SearchField, Input, Menu, MenuItem, MenuSection, Header, Collection, Text,
  ModalOverlay, Modal, Dialog, type Key,
} from 'react-aria-components';
import { Icon, type IconName } from '../icon/Icon.js';
import { Kbd } from '../control/Kbd.js';

export interface CommandItem {
  id: string;
  label: string;
  /** Group heading ("Go to", "Actions"). */
  section: string;
  icon?: IconName;
  /** Second line, for example where the destination lives. */
  description?: string;
  /** Extra words that should match the search ("schedule" for Consultations). */
  keywords?: string[];
  /** Shortcut shown on the right. */
  shortcut?: string;
}

export interface CommandPaletteProps {
  items: CommandItem[];
  /** Called with the chosen item's id; the palette closes. */
  onAction: (id: Key) => void;
  /** Controlled open state. Without it, Ctrl+K / Cmd+K toggles the palette. */
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  placeholder?: string;
}

/** Command palette: Ctrl+K / Cmd+K opens one search over destinations and actions; arrow keys move, Enter runs, Escape closes. */
export function CommandPalette({ items, onAction, isOpen: controlled, onOpenChange, placeholder = 'Search pages and actions' }: CommandPaletteProps) {
  const [uncontrolled, setUncontrolled] = useState(false);
  const isOpen = controlled ?? uncontrolled;
  const setOpen = (open: boolean) => { if (controlled === undefined) setUncontrolled(open); onOpenChange?.(open); };
  const { contains } = useFilter({ sensitivity: 'base' });

  useEffect(() => {
    if (controlled !== undefined) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setUncontrolled((open) => !open);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [controlled]);

  const sections = [...new Set(items.map((i) => i.section))].map((name) => ({ id: name, name, items: items.filter((i) => i.section === name) }));

  return (
    <ModalOverlay isOpen={isOpen} onOpenChange={setOpen} isDismissable className="ds-modal-overlay">
      <Modal className="ds-modal ds-command">
        <Dialog aria-label="Command palette" className="ds-modal__dialog">
          <Autocomplete filter={(textValue, inputValue) => contains(textValue, inputValue)}>
            <SearchField aria-label="Search commands" autoFocus className="ds-command__search">
              <Icon name="search" />
              <Input className="ds-command__input" placeholder={placeholder} />
              <Kbd keys="Esc" />
            </SearchField>
            <Menu
              items={sections}
              className="ds-listbox ds-command__results"
              onAction={(key) => { setOpen(false); onAction(key); }}
              renderEmptyState={() => <p className="ds-listbox__empty">No pages or actions match. Try another word.</p>}
            >
              {(section) => (
                <MenuSection id={section.id} className="ds-listbox__section">
                  <Header className="ds-listbox__header">{section.name}</Header>
                  <Collection items={section.items}>
                    {(item) => (
                      <MenuItem id={item.id} textValue={[item.label, ...(item.keywords ?? [])].join(' ')} className="ds-option">
                        {item.icon && <Icon name={item.icon} size={16} />}
                        <span className="ds-option__text">
                          <Text slot="label">{item.label}</Text>
                          {item.description && <Text slot="description" className="ds-option__description">{item.description}</Text>}
                        </span>
                        {item.shortcut && <span className="ds-option__keys"><Kbd keys={item.shortcut} /></span>}
                      </MenuItem>
                    )}
                  </Collection>
                </MenuSection>
              )}
            </Menu>
          </Autocomplete>
          <footer className="ds-command__foot" aria-hidden="true">
            <span><Kbd keys="↑" /><Kbd keys="↓" /> to move</span>
            <span><Kbd keys="Enter" /> to open</span>
            <span><Kbd keys="Esc" /> to close</span>
          </footer>
        </Dialog>
      </Modal>
    </ModalOverlay>
  );
}
