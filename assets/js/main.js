(function () {
  "use strict";
  var root = document.documentElement;
  root.classList.add("js");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var META = window.I18N_META;
  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function lang() { return root.lang === "en" ? "en" : "fr"; }

  /* ================= Thème ================= */
  var themeBtn = document.getElementById("theme-toggle");
  var mq = window.matchMedia("(prefers-color-scheme: dark)");
  function theme() { return root.dataset.theme || (mq.matches ? "dark" : "light"); }
  function syncThemeColor() {
    var c = theme() === "dark" ? "#121212" : "#f7f6f3";
    document.querySelectorAll('meta[name="theme-color"]').forEach(function (m) { m.setAttribute("content", c); });
  }
  themeBtn.addEventListener("click", function () {
    var next = theme() === "dark" ? "light" : "dark";
    root.dataset.theme = next; store("theme", next); syncThemeColor();
  });
  syncThemeColor();

  /* ================= Menu plein écran ================= */
  var burger = document.getElementById("menu-toggle");
  var overlay = document.getElementById("overlay");
  function setMenu(open) {
    overlay.classList.toggle("open", open);
    overlay.setAttribute("aria-hidden", String(!open));
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? META[lang()].menuClose : META[lang()].menuOpen);
    document.body.style.overflow = open ? "hidden" : "";
    if (open) { var first = overlay.querySelector("a"); if (first) setTimeout(function () { first.focus(); }, 120); }
  }
  burger.addEventListener("click", function () { setMenu(!overlay.classList.contains("open")); });
  overlay.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && overlay.classList.contains("open")) { setMenu(false); burger.focus(); } });
  window.matchMedia("(min-width: 900px)").addEventListener("change", function (e) { if (e.matches) setMenu(false); });

  /* ================= Langue ================= */
  var langBtn = document.getElementById("lang-toggle");
  var tNodes = document.querySelectorAll("[data-i18n]");
  var aNodes = document.querySelectorAll("[data-i18n-alt]");
  tNodes.forEach(function (el) { el.dataset.fr = el.innerHTML; });
  aNodes.forEach(function (el) { el.dataset.frAlt = el.getAttribute("alt"); });
  var rNodes = document.querySelectorAll("[data-i18n-aria]");
  rNodes.forEach(function (el) { el.dataset.frAria = el.getAttribute("aria-label"); });
  function applyLang(l) {
    var en = l === "en", d = window.I18N_EN || {};
    tNodes.forEach(function (el) { var k = el.dataset.i18n; el.innerHTML = en && d[k] ? d[k] : el.dataset.fr; });
    aNodes.forEach(function (el) { var k = el.dataset.i18nAlt; el.setAttribute("alt", en && d[k] ? d[k] : el.dataset.frAlt); });
    rNodes.forEach(function (el) { var k = el.dataset.i18nAria; el.setAttribute("aria-label", en && d[k] ? d[k] : el.dataset.frAria); });
    var m = META[en ? "en" : "fr"];
    root.lang = en ? "en" : "fr";
    document.title = m.title;
    document.querySelector('meta[name="description"]').setAttribute("content", m.description);
    langBtn.textContent = m.langBtn; langBtn.setAttribute("aria-label", m.langLabel);
    themeBtn.setAttribute("aria-label", m.themeLabel);
    burger.setAttribute("aria-label", overlay.classList.contains("open") ? m.menuClose : m.menuOpen);
  }
  langBtn.addEventListener("click", function () { var n = lang() === "en" ? "fr" : "en"; applyLang(n); store("lang", n); });
  if (lang() === "en") applyLang("en");

  /* ================= Apparitions échelonnées ================= */
  var reveals = document.querySelectorAll(".reveal");
  reveals.forEach(function (el) {
    var sibs = Array.prototype.filter.call(el.parentElement.children, function (c) { return c.classList.contains("reveal"); });
    var i = sibs.indexOf(el);
    if (i > 0) el.style.transitionDelay = Math.min(i, 6) * 80 + "ms";
  });
  function show(el) {
    el.classList.add("visible");
    setTimeout(function () { el.style.transitionDelay = ""; }, 1500);
  }
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(show);
  }

  /* ================= Section active ================= */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav a"));
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        navLinks.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    navLinks.forEach(function (a) { var s = document.querySelector(a.getAttribute("href")); if (s) spy.observe(s); });
  }

  /* ================= Chemin A* ================= */
  var astar = document.getElementById("astar");
  if (astar && astar.getTotalLength) {
    var len = Math.ceil(astar.getTotalLength());
    astar.style.strokeDasharray = len;
    astar.style.strokeDashoffset = reduce ? 0 : len;
    if (!reduce && "IntersectionObserver" in window) {
      var aio = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { astar.style.strokeDashoffset = 0; aio.disconnect(); } });
      }, { threshold: 0.45 });
      aio.observe(astar.closest(".case-media, .media") || astar);
    }
  }

  /* ================= Une seule vidéo à la fois ================= */
  var vids = document.querySelectorAll("video");
  vids.forEach(function (v) { v.addEventListener("play", function () { vids.forEach(function (o) { if (o !== v) o.pause(); }); }); });

  var y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
})();
