export function initPopover() {
  const btn = document.querySelector(".popover-button");
  if (!btn) return;

  let popover = null;
  let isOpen = false;

  function createPopover() {
    const title = btn.getAttribute("title") || "";
    const content = btn.getAttribute("data-content") || "";

    const el = document.createElement("div");
    el.className = "popover";
    el.innerHTML = `
      <div class="popover-title">${title}</div>
      <div class="popover-content">${content}</div>
    `;
    document.body.append(el);
    return el;
  }

  function positionPopover() {
  const btnRect = btn.getBoundingClientRect();
  const popRect = popover.getBoundingClientRect();

  const top = btnRect.top - popRect.height - 9;
  const left = btnRect.left + (btnRect.width / 2) - (popRect.width / 2);

  popover.style.top = `${top}px`;
  popover.style.left = `${left}px`;

  const arrowLeft = popRect.width / 2 - 15;
  popover.style.setProperty('--arrow-left', `${arrowLeft}px`);
  }

  function togglePopover() {
    if (!popover) {
      popover = createPopover();
    }

    if (!isOpen) {
      positionPopover();
      popover.classList.add("open");
    } else {
      popover.classList.remove("open");
    }

    isOpen = !isOpen;
  }

  btn.addEventListener("click", (e) => {
    togglePopover();
  });
}
