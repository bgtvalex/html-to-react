const btnDarkMode = document.querySelector('.dark-mode-btn')

// Проверка системных настроек
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  btnDarkMode.classList.add('dark-mode-btn--active')
  document.body.classList.add('dark')
}

// Проверка LocalStorage
if (localStorage.getItem('dark-mode') === 'dark') {
  btnDarkMode.classList.add('dark-mode-btn--active')
  document.body.classList.add('dark')
} else {
  btnDarkMode.classList.remove('dark-mode-btn--active')
  document.body.classList.remove('dark')
}

// Ручное изменение
btnDarkMode.onclick = () => {
  btnDarkMode.classList.toggle('dark-mode-btn--active')
  const isDark = document.body.classList.toggle('dark')

  if (isDark) {
    localStorage.setItem('dark-mode', 'dark')
  } else {
    localStorage.setItem('dark-mode', 'light')
  }
}

// Системное изменение
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', event => {
  const newColorScheme = event.matches ? "dark" : "light";

  if (newColorScheme === 'dark') {
    btnDarkMode.classList.add('dark-mode-btn--active')
    document.body.classList.add('dark')
    localStorage.setItem('dark-mode', 'dark')
  } else {
    btnDarkMode.classList.remove('dark-mode-btn--active')
    document.body.classList.remove('dark')
    localStorage.setItem('dark-mode', 'light')
  }
});