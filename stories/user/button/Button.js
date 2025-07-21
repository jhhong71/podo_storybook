import './button.css';

export const createButton = ({
  primary = false,
  size = '',
  round = '0',
  // backgroundColor,
  label,
  onClick,
  disabled = false,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.disabled = disabled;
  btn.addEventListener('click', onClick);

  const mode = primary ? 'btn-point' : 'btn-default';
  btn.className = [mode, `size-${size}`, `pd-round-${round}`].join(' ');

  // btn.style.backgroundColor = backgroundColor;

  return btn;
};
