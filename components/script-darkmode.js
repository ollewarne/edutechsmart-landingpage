const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;
const main = document.querySelector('main');
const switchButton = document.getElementById("switchButton");
let darkModeOn = false;

toggleButton.addEventListener('click', () => {
    if (!darkModeOn) {
        switchButton.src = "./images/sun.svg";
        darkModeOn = true;
    } else {
        switchButton.src = "./images/moon.svg";
        darkModeOn = false;
    }
    body.classList.toggle('dark-mode');
    main.classList.toggle('dark-mode');
});
