(function () {
  "use strict";
  var root = document.documentElement;
  root.classList.add("js");

  function store(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  }

  /* ---------- Thème clair / sombre ---------- */
  var themeBtn = document.getElementById("theme-toggle");
  var media = window.matchMedia("(prefers-color-scheme: dark)");
  function currentTheme() {
    return root.dataset.theme || (media.matches ? "dark" : "light");
  }
  function syncThemeColor() {
    var meta = document.querySelectorAll('meta[name="theme-color"]');
    var color = currentTheme() === "dark" ? "#0f1114" : "#f4f3ef";
    meta.forEach(function (m) { m.setAttribute("content", color); });
  }
  themeBtn.addEventListener("click", function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    store("theme", next);
    syncThemeColor();
  });
  syncThemeColor();

  /* ---------- Menu mobile ---------- */
  var menuBtn = document.getElementById("menu-toggle");
  var nav = document.getElementById("nav");
  function setMenu(open) {
    nav.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    var meta = window.I18N_META[root.lang === "en" ? "en" : "fr"];
    menuBtn.setAttribute("aria-label", open ? meta.menuClose : meta.menuOpen);
  }
  menuBtn.addEventListener("click", function () { setMenu(!nav.classList.contains("open")); });
  nav.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  /* ---------- Langue ---------- */
  var langBtn = document.getElementById("lang-toggle");
  var textNodes = document.querySelectorAll("[data-i18n]");
  var altNodes = document.querySelectorAll("[data-i18n-alt]");
  textNodes.forEach(function (el) { el.dataset.fr = el.innerHTML; });
  altNodes.forEach(function (el) { el.dataset.frAlt = el.getAttribute("alt"); });

  function applyLang(lang) {
    var en = lang === "en";
    var dict = window.I18N_EN || {};
    textNodes.forEach(function (el) {
      var key = el.dataset.i18n;
      el.innerHTML = en && dict[key] ? dict[key] : el.dataset.fr;
    });
    altNodes.forEach(function (el) {
      var key = el.dataset.i18nAlt;
      el.setAttribute("alt", en && dict[key] ? dict[key] : el.dataset.frAlt);
    });
    var meta = window.I18N_META[en ? "en" : "fr"];
    root.lang = en ? "en" : "fr";
    document.title = meta.title;
    document.querySelector('meta[name="description"]').setAttribute("content", meta.description);
    langBtn.textContent = meta.langBtn;
    langBtn.setAttribute("aria-label", meta.langLabel);
    themeBtn.setAttribute("aria-label", meta.themeLabel);
    menuBtn.setAttribute("aria-label", nav.classList.contains("open") ? meta.menuClose : meta.menuOpen);
  }
  langBtn.addEventListener("click", function () {
    var next = root.lang === "en" ? "fr" : "en";
    applyLang(next);
    store("lang", next);
  });
  if (root.lang === "en") applyLang("en");

  /* ---------- Section active dans le menu ---------- */
  var links = Array.prototype.slice.call(nav.querySelectorAll("a"));
  var sections = links.map(function (a) { return document.querySelector(a.getAttribute("href")); });
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { if (s) spy.observe(s); });

    /* ---------- Apparition au défilement ---------- */
    var reveal = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          reveal.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal").forEach(function (el) { reveal.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---------- Année du pied de page ---------- */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
