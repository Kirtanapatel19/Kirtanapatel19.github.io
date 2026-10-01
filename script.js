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

  const appendProjectBrief = (parent, label, text) => {
    if (!text) return;
    const section = document.createElement("section");
    section.className = "project-brief";

    const heading = document.createElement("p");
    heading.className = "detail-label";
    heading.textContent = label;

    const copy = document.createElement("p");
    copy.textContent = text;

    section.append(heading, copy);
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
  setHref("phone-text-link", `tel:${(data.meta.phone || "").replace(/[^\d+]/g, "")}`);
  setText("phone-text-link", data.meta.phone);
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
      header.innerHTML = `<h3 class="project-title">${project.title}</h3>${
        project.verdict ? `<p class="project-verdict">${project.verdict}</p>` : ""
      }`;
      card.appendChild(header);

      if (project.coAuthor) {
        const coAuthor = document.createElement("p");
        coAuthor.className = "project-coauthor";
        coAuthor.textContent = project.coAuthor;
        card.appendChild(coAuthor);
      }

      const result = document.createElement("section");
      result.className = "project-result";
      appendProjectBrief(result, "Result", project.result);
      appendProjectBrief(result, "Key Takeaway", project.keyTakeaway);
      card.appendChild(result);

      if (project.keyNumbers?.length) {
        const metrics = document.createElement("div");
        metrics.className = "project-metrics";
        project.keyNumbers.forEach((metric) => {
          const item = document.createElement("div");
          item.className = "project-metric";
          item.innerHTML = `<strong>${metric.value}</strong><span>${metric.label}</span>`;
          metrics.appendChild(item);
        });
        card.appendChild(metrics);
      }

      if (project.reportLink) {
        const reportLink = document.createElement("a");
        reportLink.className = "project-file-link";
        reportLink.href = project.reportLink;
        reportLink.target = "_blank";
        reportLink.rel = "noopener";
        reportLink.textContent = project.reportLabel || "View Project File";
        card.appendChild(reportLink);
      }

      if (project.skills && project.skills.length) {
        const skillRow = document.createElement("div");
        skillRow.className = "chip-row";
        project.skills.forEach((skill) => skillRow.appendChild(createChip(skill)));
        card.appendChild(skillRow);
      }

      const story = document.createElement("div");
      story.className = "project-story";
      appendProjectBrief(story, "Problem", project.problem);
      appendProjectBrief(story, "Method", project.method);
      appendProjectBrief(story, "What I Would Change", project.wouldChange);
      card.appendChild(story);

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

  // Education
  const educationGrid = byId("education-grid");
  if (educationGrid) {
    educationGrid.innerHTML = "";
    (data.education || []).forEach((item) => {
      const card = document.createElement("article");
      card.className = "education-card";
      card.innerHTML = `
        <p class="education-degree">${item.degree}</p>
        <p class="education-school">${item.school}</p>
        <p class="education-period">${item.period}</p>
      `;
      educationGrid.appendChild(card);
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

  // Keep motion restrained: sections reveal only as they enter the reading flow.
  if ("IntersectionObserver" in window) {
    document.documentElement.classList.add("js");
    const revealItems = document.querySelectorAll(".panel");
    const observer = new IntersectionObserver(
      (entries, activeObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          activeObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.08 }
    );
    revealItems.forEach((item) => {
      item.classList.add("reveal");
      observer.observe(item);
    });
  }
})();
