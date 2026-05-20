// Не забудьте написать авто-тест на взаимодействие 
// с DOM на базе Puppeteer или JSDOM (на ваш выбор).
/**
 * @jest-environment jsdom
 */
import { initPopover } from '../popover.js';

describe('Popover widget', () => {
  let button;
  let popover;

  beforeEach(() => {
    document.body.innerHTML = `
       <button class="popover-button">Click to toggle popover</button>
     <div id="popover" class="popover hidden">
  <div class="popover-title">Popover title</div>
  <div class="popover-content">And here's some amazing content. It's very enagaging. Right?</div>
</div>
    `;
    initPopover(); 
    button = document.querySelector('.popover-button');
    popover = document.getElementById('popover');

    button.getBoundingClientRect = () => ({
      top: 120,
      left: 50,
      width: 220,
      height: 50
    });

    popover.getBoundingClientRect = () => ({
      width: 300,
      height: 80
    });

  });

  test('popover click', () => {
    button.click();
    expect(popover.classList.contains('hidden')).toBe(false);
  });

  test('popover positions correctly', () => {
    button.click();
    expect(popover.style.top).toBe('31px');  
    expect(popover.style.left).toBe('10px');
  });

  test('arrow is centered via CSS variable', () => {
    button.click();
    expect(popover.style.getPropertyValue('--arrow-left')).toBe('135px');
  });

  test('popover hides on second click', () => {
    button.click();
    button.click();
    expect(popover.classList.contains('hidden')).toBe(true);
  });
});



