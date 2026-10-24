import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { axeViolations } from '../test/a11y.js';
import { AnnouncementCard } from './AnnouncementCard.js';
import { ForumCard } from './ForumCard.js';

describe('AnnouncementCard', () => {
  it('renders tag, demo label, heading, body and link', () => {
    render(<AnnouncementCard title="Make room for your next idea." meta="Community desk · illustrative" href="#a" demo>Explore the proposed peer study circle.</AnnouncementCard>);
    const card = screen.getByRole('article');
    expect(card.className).toBe('ds-card');
    expect(within(card).getByText('Announcement').className).toBe('ds-badge ds-badge--info');
    expect(within(card).getByText('Demo').className).toBe('ds-tag-mono');
    expect(within(card).getByRole('heading', { level: 3 }).textContent).toBe('Make room for your next idea.');
    expect(within(card).getByRole('link', { name: /Read update/ })).toBeTruthy();
  });
});

describe('ForumCard', () => {
  it('has one link, named by its title, covering the card', () => {
    render(<ForumCard topic="Study together" title="What helped you understand recursion?" excerpt="A sample community question." author="Demo member" replies={6} status="Open discussion" href="#post" demo />);
    const link = screen.getByRole('link', { name: 'What helped you understand recursion?' });
    expect(link.className).toBe('ds-card__link');
    const card = screen.getByRole('article');
    expect(card.className).toBe('ds-card ds-card--link');
    expect(within(card).getByText('Study together').className).toBe('ds-badge ds-badge--accent');
    expect(within(card).getByText('Demo member · 6 replies · Open discussion')).toBeTruthy();
    expect(screen.getAllByRole('link')).toHaveLength(1);
  });
  it('cards have no axe violations', async () => {
    const { container } = render(<main><h2>Community</h2><AnnouncementCard title="Update" href="#a" demo>Body</AnnouncementCard><ForumCard topic="Study together" title="Question" replies={1} href="#p" /></main>);
    expect(await axeViolations(container)).toEqual([]);
  });
});
