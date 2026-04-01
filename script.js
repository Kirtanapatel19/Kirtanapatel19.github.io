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

  const createChip = (text) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = text;
    return chip;
  };

  const renderSimpleList = (id, items) => {
    const container = byId(id);
    if (!container) return;
    container.innerHTML = "";
    (items || []).forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      container.appendChild(li);
    });
  };

  // Meta and hero
  document.title = `${data.meta.name} | Financial Portfolio`;
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
  setText("hero-location", data.meta.location);
  setText("hero-program", data.meta.program);
  setText("contact-line", data.contactLine);
  setText("footer-line", `${new Date().getFullYear()} | ${data.meta.footerNote}`);

  setHref("resume-cta", data.meta.resumeLink);
  setHref("resume-contact-cta", data.meta.resumeLink);
  setHref("email-cta", `mailto:${data.meta.email}`);
  setHref("email-text-link", `mailto:${data.meta.email}`);
  setText("email-text-link", data.meta.email);
  setHref("linkedin-link", data.meta.linkedin);

  renderSimpleList("target-roles", data.targetRoles);
  renderSimpleList("analyst-framework", data.analystFramework);

  // About
  const aboutContainer = byId("about-lines");
  if (aboutContainer) {
    aboutContainer.innerHTML = "";
    (data.aboutLines || []).forEach((line) => {
      const p = document.createElement("p");
      p.textContent = line;
      aboutContainer.appendChild(p);
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
          <p class="metric-label">What Was Analyzed</p>
          <p class="metric-text">${item.analyzed}</p>
        </div>
        <div class="metric-row">
          <p class="metric-label">Tools Used</p>
          <div class="chip-row"></div>
        </div>
        <div class="metric-row">
          <p class="metric-label">Business Impact</p>
          <p class="metric-text">${item.impact}</p>
        </div>
      `;
      const chipRow = card.querySelector(".chip-row");
      (item.tools || []).forEach((tool) => chipRow.appendChild(createChip(tool)));
      experienceGrid.appendChild(card);
    });
  }

  // Projects
  const projectsStack = byId("projects-stack");
  if (projectsStack) {
    projectsStack.innerHTML = "";
    (data.projects || []).forEach((project) => {
      const card = document.createElement("article");
      card.className = "project-card";

      const header = document.createElement("div");
      header.className = "project-header";
      header.innerHTML = `
        <p class="project-name">${project.name}</p>
        <p class="project-subtitle">${project.subtitle}</p>
      `;
      card.appendChild(header);

      const grid = document.createElement("div");
      grid.className = "project-details-grid";
      (project.blocks || []).forEach((block) => {
        const blockEl = document.createElement("div");
        blockEl.className = "project-block";
        const heading = document.createElement("p");
        heading.className = "project-block-title";
        heading.textContent = block.title;
        blockEl.appendChild(heading);

        if (block.content) {
          const content = document.createElement("p");
          content.className = "project-block-copy";
          content.textContent = block.content;
          blockEl.appendChild(content);
        }

        if (block.list && block.list.length) {
          const list = document.createElement("ul");
          list.className = "project-list";
          block.list.forEach((listItem) => {
            const li = document.createElement("li");
            li.textContent = listItem;
            list.appendChild(li);
          });
          blockEl.appendChild(list);
        }

        grid.appendChild(blockEl);
      });

      card.appendChild(grid);
      projectsStack.appendChild(card);
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
        <p class="cert-status">${cert.status}</p>
      `;
      if (cert.details && cert.details.length) {
        const detailRow = document.createElement("div");
        detailRow.className = "chip-row";
        cert.details.forEach((item) => detailRow.appendChild(createChip(item)));
        card.appendChild(detailRow);
      }
      certGrid.appendChild(card);
    });
  }

  // Leadership
  const leadershipGrid = byId("leadership-grid");
  if (leadershipGrid) {
    leadershipGrid.innerHTML = "";
    (data.leadership || []).forEach((item) => {
      const card = document.createElement("article");
      card.className = "leadership-card";
      card.innerHTML = `
        <p class="leadership-title">${item.title}</p>
        <p class="leadership-detail">${item.detail}</p>
      `;
      leadershipGrid.appendChild(card);
    });
  }

  // Social links
  const socialLinks = byId("social-links");
  if (socialLinks) {
    socialLinks.innerHTML = "";
    (data.socials || []).forEach((social) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.textContent = social.label;
      link.href = social.url || "#";
      link.target = "_blank";
      link.rel = "noopener";
      li.appendChild(link);
      socialLinks.appendChild(li);
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

  // Subtle reveal animation
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  reveals.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 40, 200)}ms`;
    observer.observe(item);
  });
})();
