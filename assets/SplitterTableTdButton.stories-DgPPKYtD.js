/* empty css                       */function r({label:t,disabled:s=!1}){return`
    <button type="button" class="btn_input" ${s?"disabled":""}><span>${t}</span></button>
  `}const l={title:"Example/admin/button/SplitterTableTdButton",render:t=>r(t)},e={args:{label:"선택",disabled:!1}},a={args:{label:"선택",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: '선택',
    disabled: false
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: '선택',
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};const o=["Default","Disabled"];export{e as Default,a as Disabled,o as __namedExportsOrder,l as default};
