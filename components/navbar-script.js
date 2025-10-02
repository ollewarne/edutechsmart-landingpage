class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <nav class="menu">
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
