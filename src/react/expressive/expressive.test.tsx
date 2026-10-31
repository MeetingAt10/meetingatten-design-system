import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { axeViolations } from '../test/a11y.js';
import { Reveal } from './Reveal.js';
import { WordReveal } from './WordReveal.js';
import { FloatingArt } from './FloatingArt.js';
import { ParallaxScene } from './ParallaxScene.js';
import { Parallax } from './Parallax.js';
import { Marquee } from './Marquee.js';
import { SpotlightCard } from './SpotlightCard.js';
import { Aurora, GridBackdrop } from './Backdrop.js';
import { Orbit } from './Orbit.js';
import { CountUp } from './CountUp.js';
import { ScrollProgress } from './ScrollProgress.js';
import { imagery } from './imagery.js';

// NumberFlow's custom element is not defined under jsdom (esm-env resolves to its server build), so it cannot update here.
vi.mock('@number-flow/react', () => ({ default: ({ value, prefix, suffix }: { value: number; prefix?: string; suffix?: string }) => <span data-testid="flow">{prefix}{value}{suffix}</span> }));

const box = { left: 0, top: 0, width: 200, height: 100, right: 200, bottom: 100, x: 0, y: 0, toJSON() {} };
afterEach(() => vi.unstubAllGlobals());

describe('Reveal, WordReveal, Parallax', () => {
  it('Reveal renders its element with the variant class and the stagger index', () => {
    const { container } = render(<Reveal as="section" variant="fade" index={3}>Body</Reveal>);
    const el = container.firstElementChild as HTMLElement;
    expect(el.tagName).toBe('SECTION');
    expect(el.className).toBe('ds-reveal ds-reveal--fade');
    expect(el.style.getPropertyValue('--ds-reveal-index')).toBe('3');
  });
  it('WordReveal is named by its full text and hides the split words', async () => {
    const { container } = render(<WordReveal as="h1" text="The faculty door, rebuilt" />);
    expect(screen.getByRole('heading', { level: 1, name: 'The faculty door, rebuilt' })).toBeTruthy();
    const words = container.querySelectorAll('.ds-word-rise__word');
    expect([...words].map((w) => (w as HTMLElement).style.getPropertyValue('--i'))).toEqual(['0', '1', '2', '3']);
    expect(words[0].parentElement?.getAttribute('aria-hidden')).toBe('true');
    expect(await axeViolations(container)).toEqual([]);
  });
  it('Parallax sets its depth', () => {
    const { container } = render(<Parallax depth={60}>x</Parallax>);
    const el = container.firstElementChild as HTMLElement;
    expect(el.className).toBe('ds-parallax');
    expect(el.style.getPropertyValue('--ds-depth')).toBe('60');
  });
});

describe('FloatingArt and ParallaxScene', () => {
  it('FloatingArt is decorative, sized and lazy by default; priority loads now', () => {
    const { container } = render(<><FloatingArt src="/a.webp" width={720} height={710} depth={24} delay={-3} /><FloatingArt src="/b.webp" width={10} height={10} float={false} priority alt="A glass sphere" /></>);
    const [a, b] = [...container.querySelectorAll('img')];
    expect(a.className).toBe('ds-art ds-art--float');
    expect([a.getAttribute('alt'), a.getAttribute('width'), a.getAttribute('height'), a.getAttribute('loading')]).toEqual(['', '720', '710', 'lazy']);
    expect(a.style.getPropertyValue('--ds-depth')).toBe('24');
    expect(a.style.getPropertyValue('--ds-art-delay')).toBe('-3s');
    expect(b.className).toBe('ds-art');
    expect([b.getAttribute('alt'), b.getAttribute('loading'), b.getAttribute('fetchpriority')]).toEqual(['A glass sphere', 'eager', 'high']);
  });
  it('ParallaxScene writes the pointer position as -1..1 and resets on leave', async () => {
    const { container } = render(<ParallaxScene strength={2} className="scene"><FloatingArt src="/a.webp" width={1} height={1} depth={10} /></ParallaxScene>);
    const scene = container.firstElementChild as HTMLElement;
    scene.getBoundingClientRect = () => box as DOMRect;
    fireEvent.pointerMove(scene, { clientX: 150, clientY: 25 });
    await waitFor(() => expect(scene.style.getPropertyValue('--ds-px')).toBe('1'));
    expect(scene.style.getPropertyValue('--ds-py')).toBe('-1');
    fireEvent.pointerLeave(scene);
    await waitFor(() => expect(scene.style.getPropertyValue('--ds-px')).toBe('0'));
    expect(scene.className).toBe('scene');
  });
  it('ParallaxScene does nothing under reduced motion', async () => {
    vi.stubGlobal('matchMedia', (q: string) => ({ matches: true, media: q, addEventListener() {}, removeEventListener() {} }));
    const { container } = render(<ParallaxScene>x</ParallaxScene>);
    const scene = container.firstElementChild as HTMLElement;
    scene.getBoundingClientRect = () => box as DOMRect;
    fireEvent.pointerMove(scene, { clientX: 150, clientY: 25 });
    await act(() => new Promise((r) => requestAnimationFrame(() => r(null))));
    expect(scene.style.getPropertyValue('--ds-px')).toBe('');
  });
});

describe('Marquee', () => {
  it('renders the items twice; the copy is aria-hidden and inert, the name is optional', async () => {
    const { container } = render(<Marquee label="Components" reverse duration={30}><span>Button</span><span>Card</span></Marquee>);
    const root = container.firstElementChild as HTMLElement;
    expect(root.className).toBe('ds-marquee ds-marquee--reverse');
    expect(root.style.getPropertyValue('--ds-marquee-duration')).toBe('30s');
    expect(screen.getByRole('region', { name: 'Components' })).toBe(root);
    const groups = container.querySelectorAll('.ds-marquee__group');
    expect(groups).toHaveLength(2);
    expect(groups[1].getAttribute('aria-hidden')).toBe('true');
    expect(groups[1].hasAttribute('inert')).toBe(true);
    expect(screen.getAllByText('Button')).toHaveLength(2);
    expect(await axeViolations(container)).toEqual([]);
    const plain = render(<Marquee><span>x</span></Marquee>).container.firstElementChild as HTMLElement;
    expect(plain.hasAttribute('role')).toBe(false);
  });
});

describe('SpotlightCard', () => {
  it('with href it is one link on the card surface, in its lane', async () => {
    const { container } = render(<SpotlightCard href="/components/" lane="community" tilt>Components</SpotlightCard>);
    const link = screen.getByRole('link', { name: 'Components' });
    expect(link.className).toBe('ds-card ds-card--link ds-spotlight ds-spotlight--community ds-spotlight--tilt');
    link.getBoundingClientRect = () => box as DOMRect;
    fireEvent.pointerMove(link, { clientX: 50, clientY: 75 });
    await waitFor(() => expect(link.style.getPropertyValue('--ds-sx')).toBe('50px'));
    expect(link.style.getPropertyValue('--ds-sy')).toBe('75px');
    expect(link.style.getPropertyValue('--ds-tx')).toBe('-0.5');
    expect(link.style.getPropertyValue('--ds-ty')).toBe('0.5');
    fireEvent.pointerLeave(link);
    await waitFor(() => expect(link.style.getPropertyValue('--ds-tx')).toBe('0'));
    expect(await axeViolations(container)).toEqual([]);
  });
  it('without href it is a plain element and never tilts unless asked', async () => {
    const { container } = render(<SpotlightCard as="article">Body</SpotlightCard>);
    const el = container.firstElementChild as HTMLElement;
    expect([el.tagName, el.className]).toEqual(['ARTICLE', 'ds-card ds-spotlight']);
    el.getBoundingClientRect = () => box as DOMRect;
    fireEvent.pointerMove(el, { clientX: 50, clientY: 75 });
    await waitFor(() => expect(el.style.getPropertyValue('--ds-sx')).toBe('50px'));
    expect(el.style.getPropertyValue('--ds-tx')).toBe('');
  });
});

describe('Aurora, GridBackdrop, Orbit, ScrollProgress', () => {
  it('decorative pieces are aria-hidden', async () => {
    const { container } = render(<div><Aurora /><GridBackdrop className="x" /><ScrollProgress /></div>);
    expect(container.querySelector('.ds-aurora')?.getAttribute('aria-hidden')).toBe('true');
    expect(container.querySelectorAll('.ds-aurora__blob')).toHaveLength(3);
    expect(container.querySelector('.ds-grid-backdrop.x')?.getAttribute('aria-hidden')).toBe('true');
    expect(container.querySelector('.ds-scroll-progress')?.getAttribute('aria-hidden')).toBe('true');
    expect(await axeViolations(container)).toEqual([]);
  });
  it('Orbit places items evenly from the top and keeps the center', async () => {
    const { container } = render(<Orbit radius={120} items={['A', 'B', 'C', 'D']}><span>Core</span></Orbit>);
    expect((container.firstElementChild as HTMLElement).style.getPropertyValue('--ds-orbit-radius')).toBe('120');
    const angles = [...container.querySelectorAll<HTMLElement>('.ds-orbit__item')].map((i) => i.style.getPropertyValue('--angle'));
    expect(angles).toEqual(['-90deg', '0deg', '90deg', '180deg']);
    expect(screen.getByText('Core').parentElement?.className).toBe('ds-orbit__core');
    expect(await axeViolations(container)).toEqual([]);
  });
});

describe('CountUp', () => {
  it('exposes the final value to assistive technology and shows it at once without IntersectionObserver', async () => {
    const { container } = render(<CountUp value={72} prefix="~" suffix="+" />);
    expect(screen.getByText('~72+', { selector: '.ds-visually-hidden' })).toBeTruthy();
    await waitFor(() => expect(screen.getByTestId('flow').textContent).toBe('~72+'));
    expect(screen.getByTestId('flow').parentElement?.getAttribute('aria-hidden')).toBe('true');
    expect(await axeViolations(container)).toEqual([]);
  });
  it('waits at 0 until the number enters the viewport, with the final value readable all along', () => {
    let fire: (e: Partial<IntersectionObserverEntry>[]) => void = () => {};
    vi.stubGlobal('IntersectionObserver', class { constructor(cb: typeof fire) { fire = cb; } observe() {} disconnect() {} });
    render(<CountUp value={72} />);
    expect(screen.getByText('72', { selector: '.ds-visually-hidden' })).toBeTruthy();
    expect(screen.getByTestId('flow').textContent).toBe('0');
    act(() => fire([{ isIntersecting: false }]));
    expect(screen.getByTestId('flow').textContent).toBe('0');
    act(() => fire([{ isIntersecting: true }]));
    expect(screen.getByTestId('flow').textContent).toBe('72');
  });
  it('shows the value at once under reduced motion', () => {
    vi.stubGlobal('IntersectionObserver', class { observe() {} disconnect() {} });
    vi.stubGlobal('matchMedia', (q: string) => ({ matches: true, media: q, addEventListener() {}, removeEventListener() {} }));
    render(<CountUp value={72} />);
    expect(screen.getByTestId('flow').textContent).toBe('72');
  });
});

describe('imagery', () => {
  it('lists the renders with their sizes', () => {
    const names = Object.keys(imagery);
    expect(names).toHaveLength(20);
    expect(imagery['neural-cluster']).toMatchObject({ file: 'assets/imagery/neural-cluster.webp', width: 720, height: 710 });
  });
});
