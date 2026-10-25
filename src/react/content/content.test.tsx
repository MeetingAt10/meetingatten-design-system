import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axeViolations } from '../test/a11y.js';
import { Card, CardHeader, CardLane, CardTitle, CardBody, CardMeta } from './Card.js';
import { AnnouncementCard } from './AnnouncementCard.js';
import { ForumCard } from './ForumCard.js';
import { Tile } from './Tile.js';
import { Avatar, AvatarGroup, initials } from './Avatar.js';

describe('Card family', () => {
  it('a linked card is named by its title alone; the lane chip names the lane', async () => {
    const { container } = render(
      <Card link>
        <CardHeader><CardLane lane="community">Algorithms</CardLane></CardHeader>
        <CardTitle href="/t/1">What helped you understand recursion?</CardTitle>
        <CardBody>A sample community question.</CardBody>
        <CardMeta><span>6 replies</span></CardMeta>
      </Card>,
    );
    expect(screen.getByRole('link').textContent).toBe('What helped you understand recursion?');
    expect(container.querySelector('.ds-card')?.className).toBe('ds-card ds-card--link');
    expect(container.querySelector('.ds-card__lane')?.className).toBe('ds-card__lane ds-card__lane--community');
    expect(await axeViolations(container)).toEqual([]);
  });
  it('AnnouncementCard shows its lane chip, time, demo label and link', () => {
    render(<AnnouncementCard title="Make room for your next idea" when="Mon 19 Oct · 09:00" href="/u" demo meta="Community desk">Explore the proposed peer study circle.</AnnouncementCard>);
    expect(screen.getByText('Announcement').className).toBe('ds-card__lane');
    expect(screen.getByText('Demo')).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Read update: Make room for your next idea' })).toBeTruthy();
  });
  it('ForumCard: one link, reply count in words, author avatar', async () => {
    const { container } = render(<ForumCard topic="Algorithms" title="What helped you understand recursion?" href="/t/1" author="Demo member" replies={6} status="Open discussion" demo />);
    expect(screen.getAllByRole('link')).toHaveLength(1);
    expect(screen.getByText(/6 replies/)).toBeTruthy();
    expect(container.querySelector('.ds-avatar')?.getAttribute('aria-hidden')).toBe('true');
    expect(await axeViolations(container)).toEqual([]);
  });
});

describe('Tile and Avatar', () => {
  it('Tile is decorative unless labeled', () => {
    const { container } = render(<><Tile icon="chats" tone="community" /><Tile icon="lock" tone="restricted" label="Restricted" /></>);
    expect(container.querySelector('.ds-tile--community')?.getAttribute('aria-hidden')).toBe('true');
    expect(screen.getByRole('img', { name: 'Restricted' }).className).toBe('ds-tile ds-tile--restricted');
  });
  it('initials skip parenthesised notes; AvatarGroup names the whole group once', () => {
    expect(initials('Ana Santos (sample)')).toBe('AS');
    render(<AvatarGroup names={['Ana Santos', 'Ben Cruz', 'Cara Lim', 'Dan Reyes', 'Eve Tan']} max={3} />);
    expect(screen.getByRole('img', { name: 'Ana Santos, Ben Cruz, Cara Lim and 2 others' })).toBeTruthy();
    expect(screen.getByText('+2')).toBeTruthy();
  });
  it('Avatar is decorative when the name is printed beside it', () => {
    const { container } = render(<Avatar name="Ana Santos" decorative size={24} />);
    expect(container.firstElementChild?.getAttribute('aria-hidden')).toBe('true');
  });
});
