class CompanyIntro extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section class="feature-company-intro">
            <section class="companyIntro">
                <img class="companyIntroImg" src="images/EduTechSmart.jpg" alt="Picture illustrating healthcare">
                <h3 class="companyIntroHeader">Gamified<br>Healthcare Education</h3>
            </section>
    
            <section class="companyIntroText">
                <h2>Smarter way to educate</h2>
                <p>Transform training into an engaging experience. EduTechSmart empowers care providers — from personal assistance and home services to senior housing and LSS — with interactive, game-based learning. Boost skills, ensure safety, and inspire confidence with our CPR and Fire Safety courses, available for any organization.
                </p>
            </section>
        </section>`;
  }
}
customElements.define('company-intro', CompanyIntro);
