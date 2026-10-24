import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { Container } from './Container.js';
import { Stack } from './Stack.js';
import { Grid } from './Grid.js';
import { Section } from './Section.js';
import { Wash } from './Wash.js';
import { SectionHeader } from './SectionHeader.js';

describe('layout primitives', () => {
  it('map props to classes', () => {
    const { container } = render(<>
      <Container as="main" id="c" />
      <Stack gap={24} id="s" />
      <Grid columns="main" id="g" />
      <Grid columns={3} id="g3" />
      <Wash id="w" />
    </>);
    const q = (id: string) => container.querySelector('#' + id)!;
    expect(q('c').tagName).toBe('MAIN');
    expect(q('c').className).toBe('ds-container');
    expect(q('s').className).toBe('ds-stack ds-stack--24');
    expect(q('g').className).toBe('ds-cols ds-cols--main');
    expect(q('g3').className).toBe('ds-cols ds-cols--3');
    expect(q('w').className).toBe('ds-wash');
  });
  it('Section wraps content in the container with section rhythm, band and wash optional', () => {
    const { container } = render(<Section band aria-label="Community"><p>Body</p></Section>);
    const s = screen.getByRole('region', { name: 'Community' });
    expect(s.className).toBe('ds-band');
    expect(container.querySelector('.ds-container.ds-section > p')!.textContent).toBe('Body');
  });
  it('SectionHeader renders eyebrow, heading level and lead', () => {
    render(<SectionHeader eyebrow="Illustrative schedule" title="Let’s find a time to talk." level={3} description="Support, not urgent response." />);
    expect(screen.getByRole('heading', { level: 3, name: 'Let’s find a time to talk.' }).className).toBe('ds-type-h1');
    expect(screen.getByText('Illustrative schedule').className).toBe('ds-eyebrow');
  });
  it('have no axe violations', async () => {
    const { container } = render(<Container as="main"><Section band aria-label="One"><SectionHeader title="Community" description="Find a conversation." /><Grid><Stack><p>A</p></Stack><Stack><p>B</p></Stack></Grid></Section></Container>);
    expect(await axeViolations(container)).toEqual([]);
  });
});
