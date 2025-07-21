/* empty css                       */function o({placeholder:e="",buttonLabel:r="확인"}){return`
    <div class="input-box" style="width: 30%;">
      <input type="text" class="k-textbox" placeholder="${e}">
      <button type="button" class="btn_input">${r}</button>
    </div>
  `}const u={title:"Example/admin/button/SplitterInputBox",render:e=>o(e)},t={args:{placeholder:"입력하세요",buttonLabel:"확인"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: '입력하세요',
    buttonLabel: '확인'
  }
}`,...t.parameters?.docs?.source}}};const a=["Default"];export{t as Default,a as __namedExportsOrder,u as default};
