class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<footer class="site-footer">
  <div class="footer-grid parent">
    <div class="del3">
      <h3>OFFICE UMEÅ</h3>
      <p>EduTech Smart Global AB<br>Industrivägen 12<br>901 30 Umeå<br>Sweden</p>
    </div>

    <div class="del1">
      <h3>OFFICE SKELLEFTEÅ</h3>
      <p>EduTech Smart Global AB<br>Skellefteå Science City<br>Laboratorgränd 9<br>931 88 Skellefteå<br>Sweden</p>
    </div>

    <div class="del2">
      <h3>LINKS</h3>
      <ul class="links">
        <li><a href="tel:+46734000345">+46 73 40 00 345</a></li>
        <li><a href="mailto:info@edutechsmart.com">info@edutechsmart.com</a></li>
      </ul>
      <div class="social">
          <a aria-label="LinkedIn" href="https://se.linkedin.com/company/edutechsmart" target="_blank" rel="noopener">
            <img src="images/icons8-linkedin-48.png" alt="LinkedIn">
          </a>
          <a aria-label="Instagram" href="https://www.instagram.com/edutechsmart" target="_blank" rel="noopener">
            <img src="images/icons8-instagram-48.png" alt="Instagram">
          </a>
          <a aria-label="Facebook" href="#" target="_blank" rel="noopener">
            <img src="images/icons8-facebook-48.png" alt="Facebook">
          </a>
      </div>
    </div>
  </div>
</footer>`;
  }
}
customElements.define('app-footer', AppFooter);
