const languages = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  it: 'Italiano',
  ru: 'Русский',
  zh: '中文',
};

function populateLangOptions() {
  const select = document.getElementById('langSelect');
  if (!select) return;
  select.innerHTML = '';
  Object.entries(languages).forEach(([code, name]) => {
    const option = document.createElement('option');
    option.value = code;
    option.textContent = name;
    select.appendChild(option);
  });
}

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

  populateLangOptions();
});
