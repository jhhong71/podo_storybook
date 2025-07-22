/* empty css                       */function a({deleteLabel:e="삭제",cancelLabel:n="취소",saveLabel:o="저장"}){return`
    <div class="op_detail_btn">
      <button type="button" class="btn_bot"><span>${e}</span></button>
      <button type="button" class="btn_bot"><span>${n}</span></button>
      <button type="button" class="btn_bot"><span>${o}</span></button>
    </div>
  `}const r={title:"Example/admin/button/SplitterBottomButtonGroup",render:e=>a(e)},t={args:{deleteLabel:"삭제",cancelLabel:"취소",saveLabel:"저장"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    deleteLabel: '삭제',
    cancelLabel: '취소',
    saveLabel: '저장'
  }
}`,...t.parameters?.docs?.source}}};const u=["Default"];export{t as Default,u as __namedExportsOrder,r as default};
