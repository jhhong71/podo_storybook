import { SplitterTableTopButton } from './SplitterTableTopButton';

export default {
  title: 'Example/admin/button/SplitterTableTopButton',
  render: (args) => SplitterTableTopButton(args),
};

export const Default = {
  args: {
    label: 'table top button',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: 'table top button',
    disabled: true,
  },
};
