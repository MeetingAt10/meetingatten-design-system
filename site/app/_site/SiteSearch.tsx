"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button as AriaButton } from "react-aria-components";
import { CommandPalette, Icon, Kbd, type CommandItem } from "@meetingat10/design-system/react";

/** The docs search: a field-shaped button that opens the command palette (also Ctrl+K / Cmd+K). */
export function SiteSearch({ items }: { items: Array<CommandItem & { href: string }> }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <AriaButton className="site-search" onPress={() => setOpen(true)} aria-keyshortcuts="Control+K">
        <Icon name="search" size={16} />
        <span className="site-search__text">Search</span>
        <Kbd keys={["Ctrl", "K"]} />
      </AriaButton>
      <CommandPalette
        items={items}
        isOpen={open}
        onOpenChange={setOpen}
        placeholder="Search components, foundations and guides"
        onAction={(id) => { const to = items.find((i) => i.id === id)?.href; if (to) router.push(to); }}
      />
    </>
  );
}
