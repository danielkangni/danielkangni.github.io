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
    var c = theme() === "dark" ? "#0a0b0d" : "#f1f0eb";
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
  function applyLang(l) {
    var en = l === "en", d = window.I18N_EN || {};
    tNodes.forEach(function (el) { var k = el.dataset.i18n; el.innerHTML = en && d[k] ? d[k] : el.dataset.fr; });
    aNodes.forEach(function (el) { var k = el.dataset.i18nAlt; el.setAttribute("alt", en && d[k] ? d[k] : el.dataset.frAlt); });
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
    if (i > 0) el.style.transitionDelay = Math.min(i, 6) * 70 + "ms";
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
      aio.observe(astar.closest(".media"));
    }
  }

  /* ================= Bras robotique : cinématique inverse 2 DDL ================= */
  var svg = document.getElementById("arm");
  if (svg) {
    var $ = function (id) { return document.getElementById(id); };
    var BX = 200, BY = 292, L1 = 120, L2 = 105;
    var link1 = $("link1"), slot1 = $("slot1"), link2 = $("link2"), slot2 = $("slot2");
    var j1c = $("j1c"), j1p = $("j1p"), grip = $("grip"), jawA = $("jawA"), jawB = $("jawB");
    var target = $("arm-target"), arc = $("arm-arc"), lbl = $("lbl1");
    var rT1 = $("r-t1"), rT2 = $("r-t2"), rX = $("r-x"), rY = $("r-y");
    var goal = { x: 300, y: 130 }, cur = { x: 300, y: 130 };
    var lastInput = -1e9, t0 = performance.now();

    function setLine(el, x1, y1, x2, y2) { el.setAttribute("x1", x1); el.setAttribute("y1", y1); el.setAttribute("x2", x2); el.setAttribute("y2", y2); }

    function solve(tx, ty, time) {
      var dx = tx - BX, dy = BY - ty;            // repère mathématique, y vers le haut
      if (dy < 12) dy = 12;
      var d = Math.hypot(dx, dy);
      var dMin = Math.abs(L1 - L2) + 8, dMax = L1 + L2 - 1;
      var k = Math.min(Math.max(d, dMin), dMax) / d;
      dx *= k; dy *= k; d = Math.hypot(dx, dy);
      var c2 = (d * d - L1 * L1 - L2 * L2) / (2 * L1 * L2);
      c2 = Math.max(-1, Math.min(1, c2));
      var best = null;
      [1, -1].forEach(function (s) {                  // deux solutions : on garde le coude le plus haut
        var t2 = s * Math.acos(c2);
        var t1 = Math.atan2(dy, dx) - Math.atan2(L2 * Math.sin(t2), L1 + L2 * Math.cos(t2));
        var ey = L1 * Math.sin(t1);
        if (!best || ey > best.ey) best = { t1: t1, t2: t2, ey: ey };
      });
      var t1 = best.t1, t2 = best.t2;
      var ex = BX + L1 * Math.cos(t1), ey = BY - L1 * Math.sin(t1);
      var px = ex + L2 * Math.cos(t1 + t2), py = ey - L2 * Math.sin(t1 + t2);

      setLine(link1, BX, BY, ex, ey); setLine(slot1, BX, BY, ex, ey);
      setLine(link2, ex, ey, px, py); setLine(slot2, ex, ey, px, py);
      j1c.setAttribute("cx", ex); j1c.setAttribute("cy", ey); j1p.setAttribute("cx", ex); j1p.setAttribute("cy", ey);
      var phi = (t1 + t2) * 180 / Math.PI;
      grip.setAttribute("transform", "translate(" + px.toFixed(1) + " " + py.toFixed(1) + ") rotate(" + (90 - phi).toFixed(1) + ")");
      var o = reduce ? 8 : 7 + 3.5 * Math.sin(time / 420);
      jawA.setAttribute("d", "M0 0 L" + (-o) + " -7 L" + (-o) + " -21");
      jawB.setAttribute("d", "M0 0 L" + o + " -7 L" + o + " -21");

      var R = 44, a1 = Math.max(0, Math.min(Math.PI, t1));
      var large = a1 > Math.PI ? 1 : 0;
      arc.setAttribute("d", "M" + (BX + R) + " " + BY + " A" + R + " " + R + " 0 " + large + " 0 " + (BX + R * Math.cos(a1)).toFixed(1) + " " + (BY - R * Math.sin(a1)).toFixed(1));
      lbl.setAttribute("x", (BX + 62 * Math.cos(a1 / 2) - 7).toFixed(1));
      lbl.setAttribute("y", (BY - 62 * Math.sin(a1 / 2) + 4).toFixed(1));
      target.setAttribute("transform", "translate(" + tx.toFixed(1) + " " + ty.toFixed(1) + ")");

      rT1.textContent = (t1 * 180 / Math.PI).toFixed(1) + "°";
      rT2.textContent = (t2 * 180 / Math.PI).toFixed(1) + "°";
      rX.textContent = Math.round(px - BX);
      rY.textContent = Math.round(BY - py);
    }

    function toSvg(e) {
      var m = svg.getScreenCTM(); if (!m) return null;
      var p = svg.createSVGPoint(); p.x = e.clientX; p.y = e.clientY;
      return p.matrixTransform(m.inverse());
    }
    function onMove(e) {
      var p = toSvg(e); if (!p) return;
      goal.x = Math.max(-40, Math.min(440, p.x)); goal.y = Math.max(-20, Math.min(320, p.y));
      lastInput = performance.now();
      if (reduce) solve(goal.x, goal.y, 0);
    }
    var hero = document.getElementById("accueil");
    hero.addEventListener("pointermove", function (e) { if (e.pointerType === "mouse") onMove(e); });
    svg.addEventListener("pointerdown", onMove);
    svg.addEventListener("pointermove", function (e) { if (e.pointerType !== "mouse") onMove(e); });

    solve(cur.x, cur.y, 0);

    if (!reduce) {
      var running = false, visible = true, raf = 0;
      function frame(now) {
        if (now - lastInput > 2600) {                 // au repos : trajectoire de Lissajous
          var t = (now - t0) / 1000;
          goal.x = 200 + 150 * Math.sin(t * 0.55);
          goal.y = 150 + 70 * Math.sin(t * 1.1 + 0.6);
        }
        cur.x += (goal.x - cur.x) * 0.1;
        cur.y += (goal.y - cur.y) * 0.1;
        solve(cur.x, cur.y, now);
        raf = requestAnimationFrame(frame);
      }
      function sync() {
        var should = visible && !document.hidden;
        if (should && !running) { running = true; raf = requestAnimationFrame(frame); }
        if (!should && running) { running = false; cancelAnimationFrame(raf); }
      }
      if ("IntersectionObserver" in window) {
        new IntersectionObserver(function (es) { visible = es[0].isIntersecting; sync(); }).observe(svg);
      }
      document.addEventListener("visibilitychange", sync);
      sync();
    }
  }

  var y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
})();
