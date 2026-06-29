/* ============================================================================
   Renders the data in content.js (SITE) into index.html.
   You normally don't need to edit this file — edit content.js instead.
   ============================================================================ */
(function () {
  "use strict";

  var el = function (id) { return document.getElementById(id); };
  var escapeHtml = function (s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  };
  var stripTags = function (s) { return String(s).replace(/<[^>]*>/g, ""); };

  var ICONS = {
    cv: "ic-cv",
    scholar: "ic-scholar",
    github: "ic-github",
    linkedin: "ic-linkedin",
    mail: "ic-mail",
  };
  var LABELS = {
    cv: "Curriculum Vitae",
    scholar: "Google Scholar",
    github: "GitHub",
    linkedin: "LinkedIn",
    mail: "Contact",
  };

  function icon(symbolId) {
    return '<svg aria-hidden="true"><use href="#' + symbolId + '"></use></svg>';
  }

  // ---- Sidebar ----------------------------------------------------------
  function renderProfile(p) {
    el("avatar").src = p.avatar;
    el("name").textContent = p.name;
    el("subtitle").textContent = p.subtitle;

    var order = ["cv", "scholar", "github", "linkedin", "mail"];
    var html = order
      .filter(function (k) { return p.links[k]; })
      .map(function (k) {
        var isMail = k === "mail";
        var attrs = isMail ? "" : ' target="_blank" rel="noopener noreferrer"';
        return (
          "<li><a href=\"" + p.links[k] + "\"" + attrs + ">" +
          icon(ICONS[k]) + "<span>" + LABELS[k] + "</span></a></li>"
        );
      })
      .join("");
    el("social-links").innerHTML = html;
  }

  // ---- Intro ------------------------------------------------------------
  function renderIntro(data) {
    el("intro-heading").textContent = data.introHeading;
    el("intro-body").innerHTML = data.intro
      .map(function (para) { return "<p>" + para + "</p>"; })
      .join("");
  }

  // ---- Cards (publications / projects) ---------------------------------
  function pillsHtml(links) {
    if (!links || !links.length) return "";
    return links
      .map(function (l) {
        return (
          '<a class="pill" href="' + l.url +
          '" target="_blank" rel="noopener noreferrer">' +
          escapeHtml(l.label) + "</a>"
        );
      })
      .join("");
  }

  function publicationCard(pub) {
    var oral = pub.oral ? '<span class="oral-tag">Oral</span>' : "";
    var thumb = pub.thumb
      ? '<div class="card-image"><img src="' + pub.thumb + '" alt="' +
        escapeHtml(stripTags(pub.title)) + '" loading="lazy" /></div>'
      : "";
    var bibtex = pub.bibtex
      ? '<details class="bibtex"><summary>BibTeX</summary><pre>' +
        escapeHtml(pub.bibtex) + "</pre></details>"
      : "";
    return (
      '<article class="card">' +
      thumb +
      '<div class="card-text">' +
      "<h3>" + pub.title + oral + "</h3>" +
      '<p class="card-authors">' + pub.authors + "</p>" +
      '<p class="card-venue">' + escapeHtml(pub.venue) + "</p>" +
      '<p class="card-tldr">' + pub.tldr + "</p>" +
      '<div class="card-links">' + pillsHtml(pub.links) + bibtex + "</div>" +
      "</div></article>"
    );
  }

  function projectCard(proj) {
    var thumb = proj.thumb
      ? '<div class="card-image"><img src="' + proj.thumb + '" alt="' +
        escapeHtml(stripTags(proj.title)) + '" loading="lazy" /></div>'
      : "";
    return (
      '<article class="card">' +
      thumb +
      '<div class="card-text">' +
      "<h3>" + proj.title + "</h3>" +
      '<p class="card-tldr">' + (proj.blurb || "") + "</p>" +
      '<div class="card-links">' + pillsHtml(proj.links) + "</div>" +
      "</div></article>"
    );
  }

  // ---- Render -----------------------------------------------------------
  function render() {
    if (typeof SITE === "undefined") {
      console.error("content.js (SITE) failed to load.");
      return;
    }
    renderProfile(SITE.profile);
    renderIntro(SITE);

    el("research-heading").textContent = SITE.researchHeading || "Research";
    el("research-intro").innerHTML = SITE.researchIntro || "";
    el("research-list").innerHTML = (SITE.publications || [])
      .map(publicationCard)
      .join("");

    if (SITE.projects && SITE.projects.length) {
      el("projects-list").innerHTML = SITE.projects.map(projectCard).join("");
      el("projects").hidden = false;
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
