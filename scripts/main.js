document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('breathe');

  const hours = new Date().getHours();
  let sound = 'assets/audio/night.mp3';
  if (hours >= 6 && hours < 12) sound = 'assets/audio/morning.mp3';
  else if (hours >= 12 && hours < 18) sound = 'assets/audio/day.mp3';
  else if (hours >= 18 && hours < 22) sound = 'assets/audio/evening.mp3';
  const bgAudio = new Audio(sound);
  let audioStarted = false;
  document.addEventListener('click', () => {
    if (!audioStarted) {
      bgAudio.loop = true;
      bgAudio.volume = 0.5;
      bgAudio.play().catch(() => {});
      audioStarted = true;
    }
  }, { once: true });

  const logo = document.getElementById('logo');
  setInterval(() => {
    const offset = Math.sin(Date.now() / 1000) * 2;
    logo.style.transform = `translateY(${offset}px)`;
  }, 50);

  const characters = document.querySelectorAll('.character');
  document.addEventListener('mousemove', e => {
    characters.forEach(ch => {
      const rect = ch.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const angle = Math.atan2(e.clientY - cy, e.clientX - cx);
      const x = Math.cos(angle) * 5;
      const y = Math.sin(angle) * 5;
      ch.querySelectorAll('.eye').forEach(eye => {
        eye.style.transform = `translate(${x}px, ${y}px)`;
      });
    });
  });

  let username = localStorage.getItem('username');
  if (!username) {
    username = prompt('Как тебя зовут?');
    if (username) localStorage.setItem('username', username);
  }
  if (username) {
    const greeting = document.getElementById('greeting');
    greeting.textContent = `Привет, ${username}!`;
  }

  const whisperElems = document.querySelectorAll('.whisper');
  let idleTimer;
  const startIdle = () => {
    idleTimer = setTimeout(() => {
      whisperElems.forEach(w => w.classList.add('show'));
    }, 8000);
  };
  const resetIdle = () => {
    clearTimeout(idleTimer);
    whisperElems.forEach(w => w.classList.remove('show'));
    startIdle();
  };
  ['mousemove', 'click', 'keydown'].forEach(evt => {
    document.addEventListener(evt, resetIdle);
  });
  startIdle();

  let heatTimer;
  const startHeat = () => {
    heatTimer = setTimeout(() => {
      document.body.classList.add('shimmer');
    }, 5000);
  };
  const resetHeat = () => {
    clearTimeout(heatTimer);
    document.body.classList.remove('shimmer');
    startHeat();
  };
  ['mousemove', 'click', 'keydown'].forEach(evt => {
    document.addEventListener(evt, resetHeat);
  });
  startHeat();

  document.getElementById('heart').addEventListener('click', () => {
    document.getElementById('feel-form').classList.toggle('show');
  });
});
