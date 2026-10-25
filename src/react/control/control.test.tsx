import { describe, it, expect, vi } from 'vitest';
import { render, screen, within, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axeViolations } from '../test/a11y.js';
import { Button } from './Button.js';
import { IconButton } from './IconButton.js';
import { TextField } from './TextField.js';
import { TextArea } from './TextArea.js';
import { Search } from './Search.js';
import { Select } from './Select.js';
import { SelectOption } from './SelectOption.js';
import { ComboBox } from './ComboBox.js';
import { Checkbox, CheckboxGroup } from './Checkbox.js';
import { RadioGroup, Radio } from './Radio.js';
import { Switch } from './Switch.js';
import { SegmentedControl, Segment } from './SegmentedControl.js';
import { TagGroup, Tag } from './TagGroup.js';
import { Kbd } from './Kbd.js';
import { FileUpload } from './FileUpload.js';

describe('Button', () => {
  it('renders the block classes for variant and size, with icons', () => {
    render(<Button variant="secondary" size="lg" icon="sign-in" iconEnd="arrow-right">Sign in</Button>);
    const b = screen.getByRole('button', { name: 'Sign in' });
    expect(b.className).toBe('ds-btn ds-btn--secondary ds-btn--lg');
    expect(b.querySelectorAll('svg.ds-icon')).toHaveLength(2);
  });
  it('loading keeps the label, shows the spinner and blocks repeat presses', async () => {
    const onPress = vi.fn();
    render(<Button loading onPress={onPress}>Saving draft</Button>);
    const b = screen.getByRole('button', { name: /Saving draft/ });
    expect(b.hasAttribute('data-pending')).toBe(true);
    expect(b.querySelector('.ds-spinner')).not.toBeNull();
    await userEvent.click(b);
    expect(onPress).not.toHaveBeenCalled();
  });
  it('has no axe violations', async () => {
    const { container } = render(<><Button>Continue</Button><Button variant="destructive">Discard draft</Button><Button isDisabled>Disabled</Button></>);
    expect(await axeViolations(container)).toEqual([]);
  });
});

describe('IconButton', () => {
  it('is named by its label, which also shows as a tooltip on keyboard focus', async () => {
    render(<IconButton icon="bell" label="Notifications" dot />);
    const b = screen.getByRole('button', { name: 'Notifications' });
    expect(b.querySelector('.ds-icon-btn__dot')).not.toBeNull();
    await userEvent.tab();
    expect(await screen.findByRole('tooltip')).toHaveProperty('textContent', 'Notifications');
  });
});

describe('TextField', () => {
  it('says required in words and shows the error with an icon while keeping the text', async () => {
    render(<TextField label="Subject" isRequired defaultValue="Thesis" isInvalid errorMessage="Couldn't validate this subject. Try again; your text is kept." />);
    const input = screen.getByRole('textbox', { name: /Subject/ });
    expect(screen.getByText('(required)').className).toBe('ds-field__hint');
    expect(input).toHaveProperty('value', 'Thesis');
    const error = screen.getByText(/Couldn't validate/).closest('.ds-field__error')!;
    expect(error.querySelector('svg')).not.toBeNull();
    expect(input.getAttribute('aria-describedby')).toContain(error.id);
  });
  it('renders the icon variant and has no axe violations', async () => {
    const { container } = render(<TextField label="Room" icon="map-pin" description="Building and room, for example CCS 304." />);
    expect(container.querySelector('.ds-input-group .ds-input-group__icon')).not.toBeNull();
    expect(await axeViolations(container)).toEqual([]);
  });
});

describe('TextArea', () => {
  it('counts characters as you type', async () => {
    render(<TextArea label="Details" showCount maxLength={200} />);
    await userEvent.type(screen.getByRole('textbox', { name: 'Details' }), 'Hello');
    expect(screen.getByText('5 / 200')).toBeTruthy();
  });
});

describe('Search', () => {
  it('clears with the clear button, which only exists while there is text', async () => {
    const { container } = render(<Search label="Search the community" />);
    const box = screen.getByRole('searchbox', { name: 'Search the community' });
    await userEvent.type(box, 'recursion');
    await userEvent.click(screen.getByRole('button', { name: 'Clear search' }));
    expect(box).toHaveProperty('value', '');
    expect(container.querySelector('[data-empty]')).not.toBeNull();
  });
});

describe('Select and ComboBox', () => {
  it('Select opens a listbox and chooses an option with a check', async () => {
    const onChange = vi.fn();
    render(
      <Select label="Topic" onChange={onChange}>
        <SelectOption id="planning">Course planning</SelectOption>
        <SelectOption id="thesis" description="Proposal or defense">Thesis</SelectOption>
      </Select>,
    );
    await userEvent.click(screen.getByRole('button', { name: /Topic/ }));
    const listbox = await screen.findByRole('listbox');
    await userEvent.click(within(listbox).getByRole('option', { name: /Thesis/ }));
    expect(onChange).toHaveBeenCalledWith('thesis');
    expect(screen.getByRole('button', { name: /Thesis/ }).querySelector('.ds-select-trigger__value')?.textContent).toBe('Thesis');
  });
  it('ComboBox filters as you type and says when nothing matches', async () => {
    render(
      <ComboBox label="Course" defaultFilter={(text, input) => text.toLowerCase().includes(input.toLowerCase())}>
        <SelectOption id="ds">Data Structures</SelectOption>
        <SelectOption id="se">Software Engineering</SelectOption>
      </ComboBox>,
    );
    const input = screen.getByRole('combobox', { name: 'Course' });
    await userEvent.type(input, 'soft');
    const listbox = await screen.findByRole('listbox');
    expect(within(listbox).getAllByRole('option').map((o) => o.textContent)).toEqual(['Software Engineering']);
    await userEvent.clear(input);
    await userEvent.type(input, 'zzz');
    expect(await screen.findByText('No matches')).toBeTruthy();
  });
});

describe('Checkbox, Radio and Switch', () => {
  it('Checkbox toggles, draws the check and supports a group error', async () => {
    render(
      <CheckboxGroup label="Notify me about" isInvalid errorMessage="Choose at least one.">
        <Checkbox value="posts">Replies to my posts</Checkbox>
        <Checkbox value="slots" description="Only for consultations you booked.">Consultation changes</Checkbox>
      </CheckboxGroup>,
    );
    const box = screen.getByRole('checkbox', { name: 'Replies to my posts' });
    await userEvent.click(box);
    expect(box.closest('.ds-check')!.hasAttribute('data-selected')).toBe(true);
    expect(screen.getByText('Choose at least one.')).toBeTruthy();
  });
  it('Radio group chooses exactly one; card radios carry descriptions', async () => {
    render(
      <RadioGroup label="Meeting type" defaultValue="online">
        <Radio value="online" card description="Video call link sent after booking">Online</Radio>
        <Radio value="campus" card>On campus</Radio>
      </RadioGroup>,
    );
    await userEvent.click(screen.getByRole('radio', { name: /On campus/ }));
    expect(screen.getByRole('radio', { name: /On campus/ })).toHaveProperty('checked', true);
    expect(screen.getByRole('radio', { name: /Online/ })).toHaveProperty('checked', false);
  });
  it('Switch flips and shows its state in words', async () => {
    render(<Switch showState>Show my name on posts</Switch>);
    const sw = screen.getByRole('switch', { name: /Show my name on posts/ });
    expect(screen.getByText('Off')).toBeTruthy();
    await userEvent.click(sw);
    expect(screen.getByText('On')).toBeTruthy();
  });
  it('have no axe violations', async () => {
    const { container } = render(
      <>
        <Checkbox>Remember me</Checkbox>
        <RadioGroup label="Type"><Radio value="a">A</Radio><Radio value="b">B</Radio></RadioGroup>
        <Switch>Compact view</Switch>
      </>,
    );
    expect(await axeViolations(container)).toEqual([]);
  });
});

describe('SegmentedControl, TagGroup and Kbd', () => {
  it('SegmentedControl moves the selection and reports the key', async () => {
    const onChange = vi.fn();
    render(
      <SegmentedControl aria-label="Calendar view" defaultSelectedKey="week" onSelectionChange={onChange}>
        <Segment id="week">Week</Segment>
        <Segment id="day">Day</Segment>
      </SegmentedControl>,
    );
    await userEvent.click(screen.getByRole('radio', { name: 'Day' }));
    expect(onChange).toHaveBeenCalledWith('day');
    expect(screen.getByRole('radio', { name: 'Day' }).querySelector('.ds-segment__indicator')).not.toBeNull();
  });
  it('TagGroup removes a tag with its named remove button', async () => {
    const onRemove = vi.fn();
    render(
      <TagGroup label="Active filters" onRemove={onRemove}>
        <Tag id="algo">Algorithms</Tag>
        <Tag id="web" lane="community">Web</Tag>
      </TagGroup>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Remove Algorithms' }));
    expect([...onRemove.mock.calls[0][0]]).toEqual(['algo']);
  });
  it('Kbd renders a combo as nested keys', () => {
    const { container } = render(<Kbd keys={['Ctrl', 'K']} />);
    expect(container.querySelectorAll('kbd.ds-kbd')).toHaveLength(2);
  });
});

describe('FileUpload', () => {
  it('adds chosen files as rows with size and a named remove button', async () => {
    const onChange = vi.fn();
    const { container } = render(<FileUpload label="Attach files" allowsMultiple onChange={onChange} description="PDF or PNG, up to 10 MB" />);
    const input = container.querySelector('input[type="file"]') as HTMLInputElement;
    await userEvent.upload(input, new File(['x'.repeat(2048)], 'proposal.pdf', { type: 'application/pdf' }));
    expect(screen.getByText('proposal.pdf')).toBeTruthy();
    expect(screen.getByText('2 KB')).toBeTruthy();
    await userEvent.click(screen.getByRole('button', { name: 'Remove proposal.pdf' }));
    await waitFor(() => expect(screen.queryByText('proposal.pdf')).toBeNull());
    expect(onChange).toHaveBeenLastCalledWith([]);
  });
});
