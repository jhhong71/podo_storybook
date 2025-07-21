import './button.css';

export function PopupBasicButton({ cancelLabel = '취소', confirmLabel = '신청' }) {
  return `
    <div class="k-window" style="width: 100%; position: relative">
      <div class="popup-foot">
        <button class="popup-btn btn-default" id="cancelBtn">${cancelLabel}</button>
        <button class="popup-btn" id="saveBtn">${confirmLabel}</button>
      </div>
    </div>
  `;
}
