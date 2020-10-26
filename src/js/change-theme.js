const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyEl = document.querySelector('body');
const changeEl = document.querySelector('#theme-switch-toggle');
const savedTheme = localStorage.getItem('Theme');
changeEl.addEventListener('change', onChangeClick);


bodyEl.classList.add(savedTheme);

if (savedTheme === `${Theme.DARK}`) {
    changeEl.checked = true;
}

function onChangeClick(e) {
    if (e.target.checked) {
        bodyEl.classList.add(`${Theme.DARK}`);
        bodyEl.classList.remove(`${Theme.LIGHT}`);
        localStorage.setItem("Theme", `${Theme.DARK}`);
        /* localStorage.getItem (`${Theme.LIGHT}`)
        { changeEl.checked = true }; */
        
    } else {
        bodyEl.classList.add(`${Theme.LIGHT}`);
        bodyEl.classList.remove(`${Theme.DARK}`);
        localStorage.setItem("Theme", `${Theme.LIGHT}`);
   }
}

