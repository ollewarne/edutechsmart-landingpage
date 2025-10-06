class StudyAnywhere extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <section class="study-anywhere">
            <div class="studyAnywhere">
                <img src="images/tablet_educatesmart-300x200.png" alt="">
                <div class="studyAnywhereHeader">
                    <h3 id="study">Study</h3>
                    <h3>Anytime, Anywhere</h3>
                    <h3>and on Any Platform</h3>
                </div>
            </div>
            <div class="studyAnywhereText">
                <h2>Smarter Training for Healthcare</h2>
                <p>EduTechSmart equips healthcare companies with efficient, high-quality training tools. We offer affordable, flexible, and repeatable learning — available anytime, in multiple languages, on any device. With innovative exercises and a lower environmental impact, we go beyond traditional education.</p>
            </div>

        </section>`;
  }
}
customElements.define('study-anywhere', StudyAnywhere);
