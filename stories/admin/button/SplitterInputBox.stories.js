import { SplitterInputBox } from './SplitterInputBox';

export default {
  title: 'Example/admin/button/SplitterInputBox',
  render: (args) => SplitterInputBox(args),
};

export const Default = {
  args: {
    placeholder: '입력하세요',
    buttonLabel: '확인',
  },
};
