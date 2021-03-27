const bodyEl = document.querySelector('body');
const changeEl = document.getElementById('theme-switch-toggle');
const savedTheme = localStorage.getItem('Theme');
changeEl.addEventListener('change', onChangeClick);


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
bodyEl.classList.add(savedTheme);


function onChangeClick(e) {
  if (e.target.checked) {
    bodyEl.classList.add(`${Theme.DARK}`);
    bodyEl.classList.remove(`${Theme.LIGHT}`);
    localStorage.setItem('Theme', `${Theme.DARK}`);
  }
  else {
    bodyEl.classList.add(`${Theme.LIGHT}`);
    bodyEl.classList.remove(`${Theme.DARK}`);
    localStorage.setItem('Theme', `${Theme.LIGHT}`);
  }
}