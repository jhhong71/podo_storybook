import { SplitterTableTdButton } from './SplitterTableTdButton';

export default {
  title: 'Example/admin/button/SplitterTableTdButton',
  render: (args) => SplitterTableTdButton(args),
};

export const Default = {
  args: {
    label: '선택',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: '선택',
    disabled: true,
  },
};
