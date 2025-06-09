document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('enterBtn');
  const anim = document.getElementById('animation');
  btn.addEventListener('click', () => {
    anim.classList.remove('hidden');
    anim.textContent = '...connecting to consciousness...';
    anim.classList.add('animate-pulse');
    setTimeout(() => {
      anim.textContent = 'Welcome within.';
    }, 3000);
  });
});
