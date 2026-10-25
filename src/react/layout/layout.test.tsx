import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axeViolations } from '../test/a11y.js';
import { Container } from './Container.js';
import { Stack, Row } from './Stack.js';
import { Grid } from './Grid.js';
import { Section } from './Section.js';
import { SectionHeader } from './SectionHeader.js';
import { Hero } from './Hero.js';
import { Agenda, AgendaItem } from './Agenda.js';
import { Highlight } from './Highlight.js';
import { Divider } from './Divider.js';
import { DoorPlate } from '../identity/DoorPlate.js';
import { Logo } from '../identity/Logo.js';
import { Badge, RoleBadge, Severity } from '../badge/Badge.js';
import { Icon } from '../icon/Icon.js';
import { DesignSystemProvider } from '../provider/DesignSystemProvider.js';

describe('layout primitives', () => {
  it('map props to classes', () => {
    const { container } = render(
      <Container width="reading"><Stack gap={24}><Row justify="between">x</Row><Grid columns="split">y</Grid></Stack></Container>,
    );
    expect(container.querySelector('.ds-container')?.className).toBe('ds-container ds-container--reading');
    expect(container.querySelector('.ds-stack')?.className).toBe('ds-stack ds-stack--24');
    expect(container.querySelector('.ds-row')?.className).toBe('ds-row ds-row--between');
    expect(container.querySelector('.ds-cols')?.className).toBe('ds-cols ds-cols--split');
  });
  it('Section tones and the plate band', () => {
    const { container } = render(<Section tone="plate" aria-label="Get started"><p>Sign in</p></Section>);
    expect(container.querySelector('section')?.className).toBe('ds-section ds-section--plate');
  });
});

describe('SectionHeader and Hero', () => {
  it('SectionHeader has no label above the heading; level 1 sets the page size', () => {
    const { container } = render(<SectionHeader title="Reports" level={1} description="Your own records." split actions={<a href="/new">New draft</a>} />);
    expect(screen.getByRole('heading', { level: 1, name: 'Reports' })).toBeTruthy();
    expect(container.querySelector('header')?.firstElementChild?.tagName).toBe('H1');
    expect(container.querySelector('header')?.className).toBe('ds-section-header ds-section-header--page ds-section-header--split');
  });
  it('Hero renders the h1 at display size with the art column', async () => {
    const { container } = render(<Hero plate={<DoorPlate />} title="Your Access to the College of Computer Studies" lead="Community, consultations and reports." art={<div>Timetable</div>} />);
    expect(screen.getByRole('heading', { level: 1 }).className).toBe('ds-hero__title');
    expect(container.querySelector('.ds-hero__art')?.textContent).toBe('Timetable');
    expect(await axeViolations(container)).toEqual([]);
  });
});

describe('Agenda, Highlight, Divider and DoorPlate', () => {
  it('Agenda rows lead with a lane chip', () => {
    const { container } = render(
      <Agenda>
        <AgendaItem chip="Community" lane="community" title="Ask and answer" href="/c" linkLabel="Join the conversation">Share a useful explanation.</AgendaItem>
        <AgendaItem chip="Reports" lane="restricted" title="Your own records">Serious and structured.</AgendaItem>
      </Agenda>,
    );
    expect([...container.querySelectorAll('.ds-agenda__chip')].map((c) => c.className)).toEqual(['ds-agenda__chip ds-agenda__chip--community', 'ds-agenda__chip ds-agenda__chip--restricted']);
    expect(screen.getByRole('link', { name: 'Join the conversation' })).toBeTruthy();
  });
  it('Highlight is a mark; a labeled Divider reads its label as text', () => {
    const { container } = render(<><p>Community access does <Highlight under>not</Highlight> grant report access.</p><Divider label="Today" /></>);
    expect(container.querySelector('mark')?.className).toBe('ds-highlight ds-highlight--under');
    expect(screen.queryByRole('separator')).toBeNull();
    expect(screen.getByText('Today').className).toBe('ds-divider ds-divider--label');
  });
  it('DoorPlate shows the name and room code; labeled plates are images', () => {
    render(<><DoorPlate code="CCS 304" /><DoorPlate size="lg" label="ACCS home" /></>);
    expect(screen.getAllByText('ACCS')).toHaveLength(2);
    expect(screen.getByText('CCS 304').className).toBe('ds-plate__code');
    expect(screen.getByRole('img', { name: 'ACCS home' }).className).toBe('ds-plate ds-plate--lg');
  });
  it('Logo prints the name beside a decorative mark; a labeled or mark-only logo is one image', async () => {
    const { container } = render(<><Logo code="DS 1.0" /><Logo markOnly label="Meeting At 10 home" size="lg" inverse /></>);
    expect(screen.getByText('Meeting At 10').className).toBe('ds-logo__name');
    expect(screen.getByText('DS 1.0').className).toBe('ds-logo__code');
    expect(container.querySelector('.ds-logo__mark')?.getAttribute('aria-hidden')).toBe('true');
    const image = screen.getByRole('img', { name: 'Meeting At 10 home' });
    expect(image.className).toBe('ds-logo ds-logo--lg ds-logo--inverse');
    expect(image.querySelector('.ds-logo__name')).toBeNull();
    expect(await axeViolations(container)).toEqual([]);
  });
});

describe('Badges and Icon', () => {
  it('status badges carry the line form; severity is its own family', () => {
    const { container } = render(<><Badge tone="warning" form="pending">Review pending</Badge><RoleBadge>Student</RoleBadge><Severity level="high" /></>);
    expect(screen.getByText('Review pending').className).toBe('ds-badge ds-badge--warning ds-badge--pending');
    expect(container.querySelector('.ds-badge--role')?.textContent).toBe('Student');
    expect(screen.getByText('High').className).toBe('ds-severity ds-severity--high');
  });
  it('Icon is hidden unless labeled, and takes size and weight', () => {
    const { container } = render(<><Icon name="calendar" size={24} weight="fill" /><Icon name="lock" label="Restricted" /></>);
    const [hidden, named] = [...container.querySelectorAll('svg')];
    expect(hidden.getAttribute('aria-hidden')).toBe('true');
    expect(hidden.getAttribute('class')).toBe('ds-icon ds-icon--24');
    expect(named.getAttribute('aria-label')).toBe('Restricted');
  });
  it('DesignSystemProvider renders its children', () => {
    render(<DesignSystemProvider locale="en-PH"><p>Inside</p></DesignSystemProvider>);
    expect(screen.getByText('Inside')).toBeTruthy();
  });
});
