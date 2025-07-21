import { SplitterBottomButtonGroup } from './SplitterBottomButtonGroup';

export default {
  title: 'Example/admin/button/SplitterBottomButtonGroup',
  render: (args) => SplitterBottomButtonGroup(args),
};

export const Default = {
  args: {
    deleteLabel: '삭제',
    cancelLabel: '취소',
    saveLabel: '저장',
  },
};
