import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { Tabs, TabList, Tab, TabPanel } from './Tabs.js';

const tabs = () => (
  <Tabs>
    <TabList aria-label="Community"><Tab id="overview">Overview</Tab><Tab id="forum">Forum</Tab><Tab id="soon" isDisabled>Archive</Tab></TabList>
    <TabPanel id="overview">Overview panel</TabPanel>
    <TabPanel id="forum">Forum panel</TabPanel>
    <TabPanel id="soon">Archive panel</TabPanel>
  </Tabs>
);

describe('Tabs', () => {
  it('switches panels with arrow keys and marks the selected tab', async () => {
    render(tabs());
    const list = screen.getByRole('tablist', { name: 'Community' });
    expect(list.className).toBe('ds-tabs');
    const [overview, forum] = within(list).getAllByRole('tab');
    expect(overview.getAttribute('aria-selected')).toBe('true');
    expect(screen.getByRole('tabpanel').textContent).toBe('Overview panel');
    await userEvent.tab();
    await userEvent.keyboard('{ArrowRight}');
    expect(forum.getAttribute('aria-selected')).toBe('true');
    expect(screen.getByRole('tabpanel').className).toBe('ds-tab-panel');
    expect(screen.getByRole('tabpanel').textContent).toBe('Forum panel');
  });
  it('has no axe violations', async () => {
    const { container } = render(tabs());
    expect(await axeViolations(container)).toEqual([]);
  });
});
