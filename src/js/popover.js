export function initPopover() {
const btn = document.querySelector('.popover-button');
const popover = document.getElementById('popover');
 
btn.addEventListener('click', () => {
  popover.classList.toggle('hidden');

  const btnRect = btn.getBoundingClientRect();
  const popRect = popover.getBoundingClientRect();

  const top = btnRect.top - popRect.height - 9;
  const left = btnRect.left + (btnRect.width / 2) - (popRect.width / 2);

  popover.style.top = `${top}px`;
  popover.style.left = `${left}px`;
  
    const arrowLeft = popRect.width / 2 - 15;
    popover.style.setProperty('--arrow-left', `${arrowLeft}px`);
});

}