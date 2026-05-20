(function () {
  const resume = window.RESUME_DATA;

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function setText(selector, value) {
    document.querySelectorAll(selector).forEach((node) => {
      node.textContent = value;
    });
  }

  function setLink(name, href) {
    document.querySelectorAll(`[data-link="${name}"]`).forEach((node) => {
      node.setAttribute("href", href || "#");
    });
  }

  function renderBasics() {
    document.title = `${resume.name} - Resume Showcase`;
    setText('[data-field="name"]', resume.name);
    setText('[data-field="initials"]', resume.initials);
    setText('[data-field="headline"]', resume.headline);
    setText('[data-field="summary"]', resume.summary);
    setText('[data-field="availability"]', resume.availability);
    setLink("email", `mailto:${resume.email}`);
    setLink("linkedin", resume.linkedin);
    setLink("github", resume.github);
    setLink("resume", resume.resumePdf);
  }

  function renderQuickFacts() {
    document.getElementById("quickFacts").innerHTML = resume.facts
      .map(
        (fact) => `
          <div class="fact-row">
            <span>${escapeHtml(fact.label)}</span>
            <strong>${escapeHtml(fact.value)}</strong>
          </div>
        `
      )
      .join("");
  }

  function renderMetrics() {
    document.getElementById("metrics").innerHTML = resume.metrics
      .map(
        (metric) => `
          <article class="metric-card">
            <span class="metric-value">${escapeHtml(metric.value)}</span>
            <span class="metric-label">${escapeHtml(metric.label)}</span>
          </article>
        `
      )
      .join("");
  }

  function renderExperience() {
    document.getElementById("experienceList").innerHTML = resume.experience
      .map(
        (item) => `
          <article class="experience-item">
            <div class="period">${escapeHtml(item.period)}</div>
            <div class="role-block">
              <div>
                <h3>${escapeHtml(item.role)}</h3>
                <div class="company">${escapeHtml(item.company)}</div>
              </div>
              <p class="summary">${escapeHtml(item.summary)}</p>
              <ul class="bullet-list">
                ${item.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
              </ul>
              <div class="tag-row">
                ${item.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderProjects() {
    document.getElementById("projectList").innerHTML = resume.projects
      .map(
        (project) => `
          <article class="project-card">
            <span class="project-type">${escapeHtml(project.type)}</span>
            <h3>${escapeHtml(project.name)}</h3>
            <p class="project-description">${escapeHtml(project.description)}</p>
            <div class="tag-row">
              ${project.stack.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
            </div>
            <p class="project-impact">${escapeHtml(project.impact)}</p>
          </article>
        `
      )
      .join("");
  }

  function renderSkills() {
    document.getElementById("skillGroups").innerHTML = resume.skills
      .map(
        (group) => `
          <section class="skill-group">
            <h3>${escapeHtml(group.group)}</h3>
            <div class="tag-row">
              ${group.items.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("")}
            </div>
          </section>
        `
      )
      .join("");
  }

  function renderCredentials() {
    document.getElementById("credentialList").innerHTML = `
      <div class="credential-list">
        ${resume.credentials
          .map(
            (credential, index) => `
              <div class="credential-row">
                <span>0${index + 1}</span>
                <strong>${escapeHtml(credential)}</strong>
              </div>
            `
          )
          .join("")}
      </div>
    `;
  }

  function wireControls() {
    document.getElementById("printButton").addEventListener("click", () => window.print());
    document.getElementById("themeToggle").addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
    document.getElementById("copyEmailButton").addEventListener("click", async (event) => {
      try {
        await navigator.clipboard.writeText(resume.email);
        event.currentTarget.textContent = "Copied";
        window.setTimeout(() => {
          event.currentTarget.textContent = "Copy email";
        }, 1400);
      } catch {
        window.location.href = `mailto:${resume.email}`;
      }
    });
  }

  renderBasics();
  renderQuickFacts();
  renderMetrics();
  renderExperience();
  renderProjects();
  renderSkills();
  renderCredentials();
  wireControls();
})();
