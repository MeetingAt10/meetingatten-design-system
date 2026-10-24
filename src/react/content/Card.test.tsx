import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { Card, CardHeader, CardMeta } from './Card.js';
import { CardLink } from './CardLink.js';
import { Badge } from '../badge/Badge.js';

describe('Card', () => {
  it('renders a collection item with header and meta', () => {
    const { container } = render(<Card><CardHeader><Badge tone="info">Announcement</Badge></CardHeader><h3>Make room</h3><CardMeta>Community desk</CardMeta></Card>);
    const card = container.firstElementChild!;
    expect(card.tagName).toBe('ARTICLE');
    expect(card.className).toBe('ds-card');
    expect(card.querySelector('.ds-card__head .ds-badge--info')).not.toBeNull();
    expect(card.querySelector('.ds-card__meta')!.textContent).toBe('Community desk');
  });
  it('overlay panel', () => {
    const { container } = render(<Card as="div" overlay>Sign in</Card>);
    expect(container.firstElementChild!.className).toBe('ds-card ds-card--overlay');
  });
  it('CardLink is one link with React Aria state attributes', async () => {
    const onPress = vi.fn();
    render(<CardLink href="#post" onPress={onPress}><h3>What helped you understand recursion?</h3></CardLink>);
    const link = screen.getByRole('link', { name: 'What helped you understand recursion?' });
    expect(link.className).toBe('ds-card');
    await userEvent.tab();
    expect(link.dataset.focusVisible).toBe('true');
    await userEvent.keyboard('{Enter}');
    expect(onPress).toHaveBeenCalledTimes(1);
  });
  it('has no axe violations (static, overlay, link)', async () => {
    const { container } = render(<div><Card><h3>Post</h3><p>Body</p></Card><Card as="div" overlay><h2>Sign in</h2></Card><CardLink href="#x"><h3>Open post</h3></CardLink></div>);
    expect(await axeViolations(container)).toEqual([]);
  });
});
