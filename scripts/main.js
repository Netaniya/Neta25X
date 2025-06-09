document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('enterBtn');
  const anim = document.getElementById('animation');
  const bgAudio = document.getElementById('bgAudio');
  const audioToggle = document.getElementById('audioToggle');

  let audioInitialized = false;

  function startAudio() {
    if (!audioInitialized) {
      bgAudio.play().catch(() => {});
      audioInitialized = true;
    }
  }

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
    startAudio();
    anim.classList.remove('hidden');
    anim.classList.add('animate-pulse');
    typeText(anim, '...connecting to consciousness...');
    setTimeout(() => {
      anim.classList.remove('animate-pulse');
      typeText(anim, 'Welcome within.');
    }, 3000);
  });

  audioToggle.addEventListener('click', () => {
    if (!audioInitialized) {
      startAudio();
      audioToggle.textContent = '🔈';
      return;
    }

    if (bgAudio.paused) {
      bgAudio.play();
      audioToggle.textContent = '🔊';
    } else {
      bgAudio.pause();
      audioToggle.textContent = '🔈';
    }
  });
});
