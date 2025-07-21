/* empty css                       */function r({label:a,disabled:s=!1}){return`
    <div class="table_btn only-btn-right">
      <button type="button" class="btn_inner" ${s?"disabled":""}><span>${a}</span></button>
    </div>
  `}const n={title:"Example/admin/button/SplitterTableTopButton",render:a=>r(a)},t={args:{label:"table top button",disabled:!1}},e={args:{label:"table top button",disabled:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'table top button',
    disabled: false
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'table top button',
    disabled: true
  }
}`,...e.parameters?.docs?.source}}};const l=["Default","Disabled"];export{t as Default,e as Disabled,l as __namedExportsOrder,n as default};
