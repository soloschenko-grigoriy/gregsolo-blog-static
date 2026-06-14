import Cookies from '/js/cookie.min.mjs';

const cookieName = 'theme';
let currentTheme = 'light';

if (Cookies.get(cookieName) === 'dark') {
  setTheme('dark');
}

document
  .querySelectorAll('.toggle-theme')
  .forEach((item) => item.addEventListener('click', toggleTheme));

function toggleTheme() {
  let theme = 'light';
  if (currentTheme === 'light') {
    theme = 'dark';
  }

  setTheme(theme);
}

function setTheme(theme) {
  let style = 'style';
  if (theme === 'dark') {
    style = 'style-dark';
  }

  document.getElementById('theme-opt').href = '/css/' + style + '.min.css';
  currentTheme = theme;
  Cookies.set(cookieName, theme, { expires: 30 });
}
