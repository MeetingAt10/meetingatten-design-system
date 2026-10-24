import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { Hero } from './Hero.js';
import { FeatureRow, Feature } from './FeatureRow.js';
import { Button } from '../control/Button.js';

describe('Hero', () => {
  it('renders the page h1, lead, actions and aside on a wash', () => {
    const { container } = render(<Hero eyebrow="Student · community access" title="Your Access to the College of Computer Studies" lead="Find a conversation." actions={<Button>Browse community</Button>} aside={<p>Preview</p>} />);
    expect(screen.getByRole('heading', { level: 1 }).className).toBe('ds-type-display ds-hero__title');
    expect(container.firstElementChild!.className).toBe('ds-wash');
    expect(container.querySelector('.ds-hero__actions .ds-btn--primary')).not.toBeNull();
    expect(container.querySelector('.ds-hero > .ds-stack')!.textContent).toBe('Preview');
  });
  it('can drop the wash', () => {
    const { container } = render(<Hero title="Sign in" wash={false} />);
    expect(container.firstElementChild!.getAttribute('class')).toBeNull();
  });
});

describe('FeatureRow', () => {
  it('renders open features with tile, heading, text and link', () => {
    const { container } = render(<FeatureRow>
      <Feature icon="forum" tone="secondary" title="Community" href="#c" linkLabel="Join the conversation">Casual and encouraging.</Feature>
      <Feature icon="report" title="Reports">Serious and structured.</Feature>
    </FeatureRow>);
    expect(container.firstElementChild!.className).toBe('ds-features');
    expect(container.querySelectorAll('.ds-feature')).toHaveLength(2);
    expect(container.querySelector('.ds-card')).toBeNull();
    expect(screen.getByRole('heading', { level: 3, name: 'Community' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Join the conversation' }).className).toBe('ds-link');
  });
  it('Hero and FeatureRow have no axe violations', async () => {
    const { container } = render(<main><Hero title="Your Access" lead="Lead" actions={<Button>Go</Button>} /><h2>Each in its own voice</h2><FeatureRow><Feature icon="forum" title="Community" href="#c">Text</Feature></FeatureRow></main>);
    expect(await axeViolations(container)).toEqual([]);
  });
});
