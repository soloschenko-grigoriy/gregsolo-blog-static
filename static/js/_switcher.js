// Swicher
function toggleSwitcher() {
  var i = document.getElementById('style-switcher');
  if (i.style.left === '-189px') {
    i.style.left = '0px';
  } else {
    i.style.left = '-189px';
  }
}
const cookieName = 'theme';

function setTheme(theme) {
  document.getElementById('theme-opt').href = '/css/' + theme + '.css';
  toggleSwitcher(false);
  Cookies.set(cookieName, theme);
}

window.onload = function loader() {
  const currentTheme = Cookies.get('cookieName');
  if (currentTheme && currentTheme === 'style-dark') {
    setTheme('style-dark');
  }
};
