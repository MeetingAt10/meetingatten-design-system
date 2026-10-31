import { Fragment } from 'react';
import { cx } from '../lib/cx.js';
import { cssVars } from './fx.js';

export interface WordRevealProps {
  /** The headline text; split on spaces. */
  text: string;
  /** Element to render; default `h2`. Use `h1` once per page. */
  as?: 'h1' | 'h2' | 'p' | 'span';
  className?: string;
}

/** WordReveal: a headline whose words rise out of the line on load, 70ms apart. Screen readers read the whole text once. */
export function WordReveal({ text, as: Tag = 'h2', className }: WordRevealProps) {
  return (
    <Tag className={cx('ds-word-rise', className)}>
      <span className="ds-visually-hidden">{text}</span>
      <span aria-hidden="true">
        {text.split(/\s+/).filter(Boolean).map((word, i) => (
          <Fragment key={i}>
            {i > 0 && ' '}
            <span className="ds-word-rise__word" style={cssVars({ '--i': i })}><span>{word}</span></span>
          </Fragment>
        ))}
      </span>
    </Tag>
  );
}
