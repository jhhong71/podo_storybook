const l=({primary:e=!1,size:a="",round:d="0",label:i,onClick:u,disabled:p=!1})=>{const r=document.createElement("button");r.type="button",r.innerText=i,r.disabled=p,r.addEventListener("click",u);const b=e?"btn-point":"btn-default";return r.className=[b,`size-${a}`,`pd-round-${d}`].join(" "),r};function m({cancelLabel:e="취소",confirmLabel:a="신청"}){return`
    <div class="k-window" style="width: 100%; position: relative">
      <div class="popup-foot">
        <button class="popup-btn btn-default" id="cancelBtn">${e}</button>
        <button class="popup-btn" id="saveBtn">${a}</button>
      </div>
    </div>
  `}const{fn:B}=__STORYBOOK_MODULE_TEST__,f={title:"Example/user/Button",tags:["autodocs"],render:({label:e,...a})=>l({label:e,...a}),argTypes:{backgroundColor:{control:"color"},label:{control:"text"},onClick:{action:"onClick"},primary:{control:"boolean"},size:{control:{type:"select"},options:["","b","m","s"]},round:{control:{type:"select"},options:["0","2","4","6","8","10","12","14","16","18","20","100","full"]},disabled:{control:"boolean"}},args:{onClick:B()}},c=e=>l(e),t={args:{label:"Button",primary:!1,disabled:!1},render:c},s={args:{label:"Button",primary:!0,disabled:!1},render:c},o={args:{label:"Button",primary:!1,disabled:!0},render:c},n={args:{cancelLabel:"취소",confirmLabel:"신청"},render:e=>m(e)};n.storyName="Popup Basic";t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    primary: false,
    disabled: false
  },
  render: standardRender
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    primary: true,
    disabled: false
  },
  render: standardRender
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    primary: false,
    disabled: true
  },
  render: standardRender
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    cancelLabel: '취소',
    confirmLabel: '신청'
  },
  render: args => PopupBasicButton(args)
}`,...n.parameters?.docs?.source}}};const g=["Basic","Primary","Disabled","PopupBasic"];export{t as Basic,o as Disabled,n as PopupBasic,s as Primary,g as __namedExportsOrder,f as default};
