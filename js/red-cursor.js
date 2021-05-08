// Vanilla JS cursor position
const cursorEl = document.querySelector('.cursor');
const wrapper = document.getElementById('wrapper');
const anchor = wrapper.querySelector('a');

// Set the mouse position
document.addEventListener('mousemove', (e) => {
  cursorEl.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
});

// ADD 'on-enter'
anchor.addEventListener('mouseenter', () => {
  cursorEl.classList.add('on-enter');
});

// REMOVE 'on-enter'
anchor.addEventListener('mouseleave', () => {
  cursorEl.classList.remove('on-enter');
});