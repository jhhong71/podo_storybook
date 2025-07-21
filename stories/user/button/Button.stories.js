import { fn } from 'storybook/test';
import { createButton } from './Button.js';
import { PopupBasicButton } from './PopupBasicButton.js';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Example/user/Button',
  tags: ['autodocs'],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createButton({ label, ...args });
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['', 'b', 'm', 's'],
    },
    round: {
      control: { type: 'select' },
      options: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '100', 'full'],
    },
    disabled: { control: 'boolean' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

const standardRender = (args) => createButton(args);

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic = {
  args: {
    label: 'Button',
    primary: false,
    disabled: false,
  },
  render: standardRender,
};

export const Primary = {
  args: {
    label: 'Button',
    primary: true,
    disabled: false,
  },
  render: standardRender,
};

export const Disabled = {
  args: {
    label: 'Button',
    primary: false,
    disabled: true,
  },
  render: standardRender,
};

export const PopupBasic = {
  args: {
    cancelLabel: '취소',
    confirmLabel: '신청',
  },
  render: (args) => PopupBasicButton(args),
};
PopupBasic.storyName = 'Popup Basic';
