(function () {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value || "";
  };

  const setAttr = (id, attr, value) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute(attr, value || "#");
  };

  const safeLink = (url) => (url && url.trim().length ? url : "#");

  const renderList = (id, items) => {
    const container = document.getElementById(id);
    if (!container) return;
    container.innerHTML = "";
    (items || []).forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      container.appendChild(li);
    });
  };

  const renderChipList = (id, items) => {
    const container = document.getElementById(id);
    if (!container) return;
    container.innerHTML = "";
    (items || []).forEach((item) => {
      const chip = document.createElement("span");
      chip.className = "chip";
      chip.textContent = item;
      container.appendChild(chip);
    });
  };

  const renderPills = (items) =>
    (items || []).map((item) => `<span class="chip">${item}</span>`).join("");

  // Meta
  document.title = `${data.meta.name} | Portfolio`;
  setText("logo-initials", (data.meta.name || "KP").split(" ").map((part) => part[0]).join(""));
  setText("hero-role", data.meta.role);
  setText("hero-name", data.meta.name);
  setText("hero-tagline", data.meta.tagline);
  setText("hero-location", `Location: ${data.meta.location}`);
  setText("hero-availability", data.meta.availability);
  setText("footer-line", `${new Date().getFullYear()} | ${data.meta.footerNote}`);

  setAttr("resume-cta", "href", safeLink(data.meta.resumeLink));
  setAttr("email-cta", "href", `mailto:${data.meta.email}`);
  setAttr("email-link", "href", `mailto:${data.meta.email}`);
  setAttr("linkedin-link", "href", safeLink(data.contact.linkedin));
  setText("contact-message", data.contact.message);

  // Branding strips
  renderList("impression-strip", data.branding.firstImpression);
  renderList("target-roles-list", data.branding.targetRoles);

  // Socials
  const socialContainer = document.getElementById("social-links");
  if (socialContainer) {
    socialContainer.innerHTML = "";
    (data.socials || []).forEach((social) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = safeLink(social.url);
      link.target = "_blank";
      link.rel = "noopener";
      link.textContent = social.label;
      li.appendChild(link);
      socialContainer.appendChild(li);
    });
  }

  // Highlights
  const highlightsGrid = document.getElementById("highlights-grid");
  if (highlightsGrid) {
    highlightsGrid.innerHTML = "";
    (data.highlights || []).forEach((item) => {
      const card = document.createElement("article");
      card.className = "highlight-card";
      card.innerHTML = `
        <p class="highlight-value">${item.value}</p>
        <p class="highlight-label">${item.label}</p>
        <p class="highlight-detail">${item.detail}</p>
      `;
      highlightsGrid.appendChild(card);
    });
  }

  // Thesis
  setText("about-intro", data.about.intro);
  setText("about-story", data.about.story);
  renderList("work-style-list", data.about.workStyle);
  renderList("differentiators-list", data.about.differentiators);
  renderChipList("interests-row", data.about.interests);

  // Experience
  const expTimeline = document.getElementById("experience-timeline");
  if (expTimeline) {
    expTimeline.innerHTML = "";
    (data.experience || []).forEach((exp) => {
      const card = document.createElement("article");
      card.className = "timeline-item";
      card.innerHTML = `
        <div class="timeline-top">
          <p class="timeline-title">${exp.role} | ${exp.organization}</p>
          <p class="timeline-meta">${exp.period} | ${exp.location}</p>
        </div>
        <p class="timeline-summary">${exp.summary}</p>
        <ul class="list">${(exp.achievements || []).map((line) => `<li>${line}</li>`).join("")}</ul>
        <div class="chip-list">${renderPills(exp.tools)}</div>
      `;
      expTimeline.appendChild(card);
    });
  }

  // Projects
  const projectGrid = document.getElementById("projects-grid");
  if (projectGrid) {
    projectGrid.innerHTML = "";
    (data.projects || []).forEach((project) => {
      const card = document.createElement("article");
      card.className = "project-card";
      const link = project.link
        ? `<a class="project-link" href="${project.link}" target="_blank" rel="noopener">View project</a>`
        : `<span class="project-link">Details available on request</span>`;
      card.innerHTML = `
        <p class="card-tag">${project.type} | ${project.period}</p>
        <p class="project-title">${project.name}</p>
        <p class="card-copy">${project.description}</p>
        <p class="card-copy"><strong>Impact:</strong> ${project.impact}</p>
        <div class="chip-list">${renderPills(project.skills)}</div>
        ${link}
      `;
      projectGrid.appendChild(card);
    });
  }

  // Case studies
  const caseGrid = document.getElementById("case-studies-grid");
  if (caseGrid) {
    caseGrid.innerHTML = "";
    (data.caseStudies || []).forEach((item) => {
      const card = document.createElement("article");
      card.className = "case-card";
      const link = item.link
        ? `<a class="case-link" href="${item.link}" target="_blank" rel="noopener">Read case study</a>`
        : `<span class="case-link">Full write-up available on request</span>`;
      card.innerHTML = `
        <p class="card-tag">${item.focus}</p>
        <p class="case-title">${item.title}</p>
        <div>
          <p class="case-section-label">Challenge</p>
          <p class="card-copy">${item.challenge}</p>
        </div>
        <div>
          <p class="case-section-label">Approach</p>
          <p class="card-copy">${item.approach}</p>
        </div>
        <div>
          <p class="case-section-label">Result</p>
          <p class="card-copy">${item.result}</p>
        </div>
        <div class="chip-list">${renderPills(item.tools)}</div>
        ${link}
      `;
      caseGrid.appendChild(card);
    });
  }

  // Certifications and education
  const certList = document.getElementById("certifications-list");
  if (certList) {
    certList.innerHTML = "";
    (data.certifications || []).forEach((cert) => {
      const card = document.createElement("article");
      card.className = "tiny-card";
      card.innerHTML = `
        <p class="tiny-card-title">${cert.name}</p>
        <p class="tiny-card-meta">${cert.issuer}</p>
        <p class="tiny-card-meta">${cert.period}</p>
      `;
      certList.appendChild(card);
    });
  }

  const eduList = document.getElementById("education-list");
  if (eduList) {
    eduList.innerHTML = "";
    (data.education || []).forEach((edu) => {
      const card = document.createElement("article");
      card.className = "tiny-card";
      card.innerHTML = `
        <p class="tiny-card-title">${edu.title}</p>
        <p>${edu.institution}</p>
        <p class="tiny-card-meta">${edu.period}</p>
        <p class="tiny-card-meta">${edu.detail}</p>
      `;
      eduList.appendChild(card);
    });
  }

  // Skills
  const skillsGrid = document.getElementById("skills-grid");
  if (skillsGrid) {
    skillsGrid.innerHTML = "";
    (data.skills || []).forEach((group) => {
      const card = document.createElement("article");
      card.className = "skill-card";
      const rows = (group.items || [])
        .map(
          (skill) => `
            <div class="skill-row">
              <span class="skill-name">${skill.name}</span>
              <div class="skill-track">
                <div class="skill-fill" style="width:${Math.max(0, Math.min(100, skill.level))}%"></div>
              </div>
              <span class="skill-level">${skill.level}%</span>
            </div>`
        )
        .join("");
      card.innerHTML = `<h3>${group.category}</h3>${rows}`;
      skillsGrid.appendChild(card);
    });
  }

  // Mobile nav
  const nav = document.getElementById("site-nav");
  const menuToggle = document.getElementById("menu-toggle");
  if (nav && menuToggle) {
    menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => nav.classList.remove("open"));
    });
  }

  // Reveal animation
  const revealItems = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  revealItems.forEach((el, index) => {
    el.style.transitionDelay = `${Math.min(index * 45, 180)}ms`;
    observer.observe(el);
  });
})();
