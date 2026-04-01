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

  const renderList = (id, items) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = "";
    (items || []).forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      el.appendChild(li);
    });
  };

  const renderPills = (items) =>
    (items || [])
      .map((item) => `<span class="pill">${item}</span>`)
      .join("");

  const safeLink = (url) => (url && url.trim().length ? url : "#");

  // Header and hero
  document.title = `${data.meta.name} | Portfolio`;
  setText("logo-initials", data.meta.name.split(" ").map((x) => x[0]).join(""));
  setText("hero-role", data.meta.role);
  setText("hero-name", data.meta.name);
  setText("hero-tagline", data.meta.tagline);
  setText("hero-location", `Location: ${data.meta.location}`);
  setText("hero-availability", data.meta.availability);
  setAttr("resume-cta", "href", safeLink(data.meta.resumeLink));
  setText("contact-message", data.contact.message);
  setText("footer-line", `${new Date().getFullYear()} - ${data.meta.footerNote}`);
  setAttr("email-link", "href", `mailto:${data.meta.email}`);
  setAttr("linkedin-link", "href", safeLink(data.contact.linkedin));

  // Social links
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

  // About
  setText("about-intro", data.about.intro);
  renderList("work-style-list", data.about.workStyle);
  renderList("differentiators-list", data.about.differentiators);

  // Experience
  const expTimeline = document.getElementById("experience-timeline");
  if (expTimeline) {
    expTimeline.innerHTML = "";
    (data.experience || []).forEach((exp) => {
      const article = document.createElement("article");
      article.className = "timeline-item";
      article.innerHTML = `
        <div class="timeline-top">
          <p class="timeline-title">${exp.role} - ${exp.organization}</p>
          <p class="timeline-meta">${exp.period} | ${exp.location}</p>
        </div>
        <p>${exp.summary}</p>
        <ul class="list">
          ${(exp.achievements || []).map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <div class="pill-row">${renderPills(exp.tools)}</div>
      `;
      expTimeline.appendChild(article);
    });
  }

  // Projects
  const projectGrid = document.getElementById("projects-grid");
  if (projectGrid) {
    projectGrid.innerHTML = "";
    (data.projects || []).forEach((project) => {
      const article = document.createElement("article");
      article.className = "project-card";
      const linkHtml = project.link
        ? `<a class="project-link" href="${project.link}" target="_blank" rel="noopener">View project</a>`
        : `<span class="project-link">Private project</span>`;

      article.innerHTML = `
        <p class="project-type">${project.type} - ${project.period}</p>
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <p><strong>Impact:</strong> ${project.impact}</p>
        <div class="pill-row">${renderPills(project.skills)}</div>
        ${linkHtml}
      `;
      projectGrid.appendChild(article);
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
              <div class="skill-fill" style="width: ${Math.max(0, Math.min(100, skill.level))}%"></div>
            </div>
            <span class="skill-level">${skill.level}%</span>
          </div>`
        )
        .join("");

      card.innerHTML = `<h3>${group.category}</h3>${rows}`;
      skillsGrid.appendChild(card);
    });
  }

  // Education and certifications
  const educationList = document.getElementById("education-list");
  if (educationList) {
    educationList.innerHTML = "";
    (data.education || []).forEach((item) => {
      const card = document.createElement("article");
      card.className = "tiny-card";
      card.innerHTML = `
        <p class="tiny-card-title">${item.title}</p>
        <p>${item.institution}</p>
        <p class="tiny-card-meta">${item.period}</p>
        <p class="tiny-card-meta">${item.detail}</p>
      `;
      educationList.appendChild(card);
    });
  }

  const certificationList = document.getElementById("certifications-list");
  if (certificationList) {
    certificationList.innerHTML = "";
    (data.certifications || []).forEach((item) => {
      const card = document.createElement("article");
      card.className = "tiny-card";
      card.innerHTML = `
        <p class="tiny-card-title">${item.name}</p>
        <p class="tiny-card-meta">${item.issuer}</p>
        <p class="tiny-card-meta">${item.period}</p>
      `;
      certificationList.appendChild(card);
    });
  }

  // Testimonials and now
  const testimonialGrid = document.getElementById("testimonials-grid");
  if (testimonialGrid) {
    testimonialGrid.innerHTML = "";
    (data.testimonials || []).forEach((item) => {
      const card = document.createElement("article");
      card.className = "quote";
      card.innerHTML = `
        <p>"${item.quote}"</p>
        <p class="author">${item.author} - ${item.role}</p>
      `;
      testimonialGrid.appendChild(card);
    });
  }

  renderList("now-list", data.now);

  // Mobile menu
  const nav = document.getElementById("site-nav");
  const toggle = document.getElementById("menu-toggle");
  if (nav && toggle) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => nav.classList.remove("open"));
    });
  }

  // Reveal animations
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
    { threshold: 0.12 }
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 40, 240)}ms`;
    observer.observe(item);
  });
})();
