import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { Checkbox } from './Checkbox.js';
import { RadioGroup, Radio } from './Radio.js';
import { Switch } from './Switch.js';

describe('Checkbox', () => {
  it('toggles with Space and exposes state for CSS', async () => {
    const onChange = vi.fn();
    const { container } = render(<Checkbox onChange={onChange}>Keep me signed in</Checkbox>);
    await userEvent.tab();
    await userEvent.keyboard(' ');
    expect(onChange).toHaveBeenCalledWith(true);
    const label = container.querySelector('label')!;
    expect(label.className).toBe('ds-check');
    expect(label.dataset.selected).toBe('true');
    expect(screen.getByRole('checkbox', { name: 'Keep me signed in' })).toBeTruthy();
  });
  it('indeterminate and disabled', () => {
    const { container } = render(<><Checkbox isIndeterminate>All topics</Checkbox><Checkbox isDisabled>Locked</Checkbox></>);
    const [a, b] = container.querySelectorAll('label');
    expect(a.dataset.indeterminate).toBe('true');
    expect(b.dataset.disabled).toBe('true');
  });
});

describe('RadioGroup', () => {
  it('moves selection with arrow keys and shows group errors', async () => {
    const onChange = vi.fn();
    render(<RadioGroup label="Meeting type" onChange={onChange} isInvalid errorMessage="Choose a meeting type.">
      <Radio value="online">Online</Radio><Radio value="campus">On campus</Radio>
    </RadioGroup>);
    expect(screen.getByRole('radiogroup', { name: 'Meeting type' })).toBeTruthy();
    expect(screen.getByText('Choose a meeting type.')).toBeTruthy();
    await userEvent.tab();
    await userEvent.keyboard('{ArrowDown}');
    expect(onChange).toHaveBeenLastCalledWith('campus');
  });
});

describe('Switch', () => {
  it('toggles and exposes the switch role', async () => {
    const onChange = vi.fn();
    const { container } = render(<Switch onChange={onChange}>Email updates</Switch>);
    await userEvent.click(screen.getByRole('switch', { name: 'Email updates' }));
    expect(onChange).toHaveBeenCalledWith(true);
    expect(container.querySelector('label')!.className).toBe('ds-switch');
  });
});

describe('choice controls', () => {
  it('have no axe violations (unchecked, checked, indeterminate, disabled, invalid group, switch)', async () => {
    const { container } = render(<form>
      <Checkbox>One</Checkbox><Checkbox defaultSelected>Two</Checkbox><Checkbox isIndeterminate>Three</Checkbox><Checkbox isDisabled>Four</Checkbox>
      <RadioGroup label="Type" isInvalid errorMessage="Choose one."><Radio value="a">A</Radio><Radio value="b">B</Radio></RadioGroup>
      <Switch>Updates</Switch><Switch defaultSelected isDisabled>Locked</Switch>
    </form>);
    expect(await axeViolations(container)).toEqual([]);
  });
});
