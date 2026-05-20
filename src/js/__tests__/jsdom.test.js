// Не забудьте написать авто-тест на взаимодействие 
// с DOM на базе Puppeteer или JSDOM (на ваш выбор).
/**
 * @jest-environment jsdom
 */
import { initPopover } from '../popover.js';

describe('Popover widget', () => {
  let button;

  beforeEach(() => {
    document.body.innerHTML = `
      <button class="popover-button" type="button" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
    `;
 
    initPopover(); 
    button = document.querySelector('.popover-button');

    button.getBoundingClientRect = () => ({
      top: 120,
      left: 50,
      width: 220,
      height: 50
    });

  });

  test('popover click', async () => {
    button.click();
await Promise.resolve(); 
const popover = document.querySelector('.popover');
    expect(popover.classList.contains('open')).toBe(true);
  });

  test('popover positions correctly', async () => {
       button.click();
await Promise.resolve(); 
const popover = document.querySelector('.popover');
popover.getBoundingClientRect = () => ({
      width: 300,
      height: 80
    });
    expect(popover.style.top).toBe('111px');  
    expect(popover.style.left).toBe('160px');
  });

  test('arrow is centered via CSS variable', async () => {
       button.click();
await Promise.resolve(); 
const popover = document.querySelector('.popover');
popover.getBoundingClientRect = () => ({
      width: 300,
      height: 80
    });
    expect(popover.style.getPropertyValue('--arrow-left')).toBe('-15px');
  });

  test('popover hides on second click', async () => {
       button.click();
await Promise.resolve(); 
const popover = document.querySelector('.popover');
    button.click();
    expect(popover.classList.contains('open')).toBe(false);
  });
});



