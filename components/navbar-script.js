class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <nav class="menu" id="nav-menu">
      <a href="">HOME</a>
      <a href="">ABOUT</a>
      <a href="">OUR TECH</a>
      <a href="">EDUCATIONAL-PORTAL</a>
      <a href="">NEWS</a>
      <a href="">CONTACT US</a>
  </nav>`;
  }
}
customElements.define('nav-bar', Navbar);

const menu = document.getElementById("nav-menu");
const hamburgerButton = document.getElementById("hamburger");
const menuButton = document.getElementById("menu-button")
let openStatus = false;

hamburgerButton.addEventListener('click', (e) => {
    if (!openStatus) {
        menuButton.src = "./images/close-button.svg";
        openStatus = true;
    } else {
        menuButton.src = "./images/hamburger-button.svg";
        openStatus = false;
    }
    menu.classList.toggle("open");
});
