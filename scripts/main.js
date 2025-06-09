document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('enterBtn');
  const anim = document.getElementById('animation');

  function typeText(element, text, speed = 50) {
    element.textContent = '';
    let index = 0;
    const id = setInterval(() => {
      element.textContent += text[index];
      index += 1;
      if (index >= text.length) {
        clearInterval(id);
      }
    }, speed);
  }

  btn.addEventListener('click', () => {
    anim.classList.remove('hidden');
    anim.classList.add('animate-pulse');
    typeText(anim, '...connecting to consciousness...');
    setTimeout(() => {
      anim.classList.remove('animate-pulse');
      typeText(anim, 'Welcome within.');
    }, 3000);
  });
});
