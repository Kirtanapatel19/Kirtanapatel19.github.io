(function () {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  const byId = (id) => document.getElementById(id);

  const setText = (id, value) => {
    const el = byId(id);
    if (el) el.textContent = value || "";
  };

  const setHref = (id, href) => {
    const el = byId(id);
    if (el) el.setAttribute("href", href || "#");
  };

  const createChip = (text, className = "chip") => {
    const chip = document.createElement("span");
    chip.className = className;
    chip.textContent = text;
    return chip;
  };

  const renderList = (id, items) => {
    const container = byId(id);
    if (!container) return;
    container.innerHTML = "";
    (items || []).forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      container.appendChild(li);
    });
  };

  const appendSectionList = (parent, headingText, items) => {
    if (!items || !items.length) return;
    const section = document.createElement("div");
    section.className = "deep-dive-group";

    const heading = document.createElement("p");
    heading.className = "deep-dive-heading";
    heading.textContent = headingText;
    section.appendChild(heading);

    const list = document.createElement("ul");
    list.className = "deep-dive-list";
    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
    section.appendChild(list);

    parent.appendChild(section);
  };

  // Meta + hero
  document.title = `${data.meta.name} | Finance Portfolio`;
  setText(
    "logo-initials",
    (data.meta.name || "KP")
      .split(" ")
      .filter(Boolean)
      .map((part) => part[0])
      .join("")
  );
  setText("hero-title", data.meta.title);
  setText("hero-name", data.meta.name);
  setText("hero-value", data.meta.valueStatement);
  setText("hero-tagline", data.meta.tagline);
  setText("hero-location", data.meta.location);
  setText("hero-program", data.meta.program);
  setText("footer-line", `${new Date().getFullYear()} | ${data.meta.footerNote}`);

  setHref("resume-cta", data.meta.resumeLink);
  setHref("contact-resume-link", data.meta.resumeLink);
  setHref("email-text-link", `mailto:${data.meta.email}`);
  setText("email-text-link", data.meta.email);
  setHref("linkedin-link", data.meta.linkedin);

  // Analytical approach
  setText("approach-intro", data.analyticalApproach?.intro);
  renderList("approach-principles", data.analyticalApproach?.principles);

  // Projects
  const projectsStack = byId("projects-stack");
  if (projectsStack) {
    projectsStack.innerHTML = "";
    (data.projects || []).slice(0, 3).forEach((project) => {
      const card = document.createElement("article");
      card.className = "project-card";

      const header = document.createElement("header");
      header.className = "project-header";
      header.innerHTML = `<h3 class="project-title">${project.title}</h3>`;
      card.appendChild(header);

      const impact = document.createElement("p");
      impact.className = "project-impact";
      impact.textContent = project.decisionImpact;
      card.appendChild(impact);

      if (project.skills && project.skills.length) {
        const skillRow = document.createElement("div");
        skillRow.className = "chip-row";
        project.skills.forEach((skill) => skillRow.appendChild(createChip(skill)));
        card.appendChild(skillRow);
      }

      if (project.executed && project.executed.length) {
        const execWrap = document.createElement("div");
        execWrap.className = "project-executed";
        execWrap.innerHTML = `<p class="detail-label">What I Executed</p>`;
        const list = document.createElement("ul");
        list.className = "project-list";
        project.executed.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item;
          list.appendChild(li);
        });
        execWrap.appendChild(list);
        card.appendChild(execWrap);
      }

      if (project.learned) {
        const learned = document.createElement("div");
        learned.className = "learned-block";
        learned.innerHTML = `<p class="detail-label">What I Learned</p><p>${project.learned}</p>`;
        card.appendChild(learned);
      }

      const deepDive = project.deepDive;
      if (deepDive && (deepDive.outputs?.length || deepDive.modelNotes?.length)) {
        const details = document.createElement("details");
        details.className = "project-deep-dive";
        details.innerHTML = `<summary>View Financial Outputs & Model Notes</summary>`;

        const body = document.createElement("div");
        body.className = "deep-dive-content";
        appendSectionList(body, "Financial Outputs", deepDive.outputs);
        appendSectionList(body, "Model Notes", deepDive.modelNotes);
        details.appendChild(body);
        card.appendChild(details);
      }

      projectsStack.appendChild(card);
    });
  }

  // Experience
  const experienceGrid = byId("experience-grid");
  if (experienceGrid) {
    experienceGrid.innerHTML = "";
    (data.experience || []).forEach((item) => {
      const card = document.createElement("article");
      card.className = "experience-card";
      card.innerHTML = `
        <div class="experience-header">
          <p class="experience-role">${item.role}</p>
          <p class="experience-company">${item.company}</p>
          <p class="experience-period">${item.period}</p>
        </div>
        <div class="metric-row">
          <p class="detail-label">Contribution</p>
          <p class="metric-text">${item.contribution}</p>
        </div>
        <div class="metric-row">
          <p class="detail-label">Skills Developed</p>
          <div class="chip-row"></div>
        </div>
        <div class="metric-row">
          <p class="detail-label">Operating Insight</p>
          <p class="metric-text">${item.keyInsight}</p>
        </div>
      `;
      const chipRow = card.querySelector(".chip-row");
      (item.skillsDeveloped || []).forEach((skill) => chipRow.appendChild(createChip(skill)));
      experienceGrid.appendChild(card);
    });
  }

  // Skills
  const skillsGrid = byId("skills-grid");
  if (skillsGrid) {
    skillsGrid.innerHTML = "";
    (data.skills || []).forEach((group) => {
      const card = document.createElement("article");
      card.className = "skill-card";
      const heading = document.createElement("p");
      heading.className = "skill-category";
      heading.textContent = group.category;
      card.appendChild(heading);

      const list = document.createElement("ul");
      list.className = "skill-list";
      (group.items || []).forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
      });
      card.appendChild(list);
      skillsGrid.appendChild(card);
    });
  }

  // Certifications
  const certGrid = byId("certifications-grid");
  if (certGrid) {
    certGrid.innerHTML = "";
    (data.certifications || []).forEach((cert) => {
      const card = document.createElement("article");
      card.className = "cert-card";
      card.innerHTML = `
        <p class="cert-name">${cert.name}</p>
        <p class="cert-issuer">${cert.issuer || ""}</p>
        <p class="cert-status">${cert.status}</p>
      `;
      certGrid.appendChild(card);
    });
  }

  // Mobile nav
  const nav = byId("site-nav");
  const menu = byId("menu-toggle");
  if (nav && menu) {
    menu.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => nav.classList.remove("open"));
    });
  }
})();
