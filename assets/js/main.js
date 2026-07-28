// PMU Student Affairs — Best Practices Seminar
// Shared vanilla-JS behaviour for icons, nav, modals, tabs, accordions and the form.
// No external dependencies / CDNs — everything (including icons) is self-contained
// so the page works with zero network access.

/* ---------------- Inline icon set (lucide-style, 24x24 stroke icons) ---------------- */
var ICONS = {
  "menu": '<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>',
  "x": '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  "chevron-down": '<polyline points="6 9 12 15 18 9"/>',
  "chevron-right": '<polyline points="9 18 15 12 9 6"/>',
  "log-in": '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/>',
  "calendar": '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  "map-pin": '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  "arrow-right": '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  "play-circle": '<circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>',
  "graduation-cap": '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12.5V17c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5"/><path d="M22 10v6"/>',
  "building-2": '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',
  "clipboard-list": '<rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>',
  "users": '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  "users-round": '<path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4.5-8"/>',
  "briefcase": '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  "heart-handshake": '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/><path d="M12 5.36 8.87 8.5a2.13 2.13 0 0 0 0 3l.35.35a1.94 1.94 0 0 0 2.75 0l1.13-1.12a3.84 3.84 0 0 1 5.37 0l2.63 2.62"/>',
  "sparkles": '<path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3z"/>',
  "clock": '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  "user": '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  "target": '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  "list-checks": '<path d="M3 7h.01"/><path d="M7 7h13"/><path d="M3 12h.01"/><path d="M7 12h13"/><path d="M3 17h.01"/><path d="M7 17h13"/>',
  "share-2": '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>',
  "trending-up": '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
  "lightbulb": '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.6c.6.5 1 1.3 1 2.4h6c0-1 .4-1.9 1-2.4A7 7 0 0 0 12 2Z"/>',
  "award": '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 22 12 19 17 22 15.79 13.88"/>',
  "external-link": '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',
  "mic": '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>',
  "phone": '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>',
  "mail": '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
  "loader-2": '<path d="M21 12a9 9 0 1 1-6.219-8.56"/>',
  "check-circle-2": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
  "download": '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  "file-text": '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>',
  "file-spreadsheet": '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M8 13h2"/><path d="M14 13h2"/><path d="M8 17h2"/><path d="M14 17h2"/>',
  "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  "bar-chart-3": '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
  "handshake": '<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/>'
};

function renderIcons() {
  document.querySelectorAll("[data-lucide]").forEach(function (el) {
    var name = el.getAttribute("data-lucide");
    var inner = ICONS[name];
    if (!inner) return;
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "2");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    if (el.getAttribute("class")) svg.setAttribute("class", el.getAttribute("class"));
    if (el.getAttribute("style")) svg.setAttribute("style", el.getAttribute("style"));
    svg.innerHTML = inner;
    el.replaceWith(svg);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderIcons();
  safeInit(initNav);
  safeInit(initHeroVideo);
  safeInit(initSchedule);
  safeInit(initPresenterDialog);
  safeInit(initContactForm);
  safeInit(initFooterYear);
});

function safeInit(fn) {
  try {
    fn();
  } catch (err) {
    console.error("[main.js] init failed:", fn.name, err);
  }
}

/* ---------------- Nav ---------------- */
function initNav() {
  var nav = document.querySelector(".nav");
  if (!nav) return;
  var solid = nav.dataset.solid === "true";

  if (solid) {
    nav.classList.add("is-solid");
  } else {
    var onScroll = function () {
      nav.classList.toggle("is-solid", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  var toggleBtn = nav.querySelector(".nav-toggle");
  var mobile = nav.querySelector(".nav-mobile");
  if (toggleBtn && mobile) {
    toggleBtn.addEventListener("click", function () {
      var isOpen = mobile.classList.toggle("is-open");
      var menuIcon = toggleBtn.querySelector(".icon-menu");
      var xIcon = toggleBtn.querySelector(".icon-x");
      if (menuIcon) menuIcon.style.display = isOpen ? "none" : "block";
      if (xIcon) xIcon.style.display = isOpen ? "block" : "none";
    });
    mobile.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mobile.classList.remove("is-open");
        var menuIcon = toggleBtn.querySelector(".icon-menu");
        var xIcon = toggleBtn.querySelector(".icon-x");
        if (menuIcon) menuIcon.style.display = "block";
        if (xIcon) xIcon.style.display = "none";
      });
    });
  }

  var dropdown = nav.querySelector(".nav-dropdown");
  if (dropdown) {
    var btn = dropdown.querySelector(".nav-dropdown-btn");
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      dropdown.classList.toggle("is-open");
    });
    document.addEventListener("click", function (e) {
      if (!dropdown.contains(e.target)) dropdown.classList.remove("is-open");
    });
  }
}

/* ---------------- Hero video modal ---------------- */
function initHeroVideo() {
  var openBtn = document.querySelector("[data-open-video]");
  var overlay = document.querySelector("[data-video-modal]");
  if (!openBtn || !overlay) return;
  var closeBtn = overlay.querySelector("[data-close-video]");
  var iframe = overlay.querySelector("iframe");
  var src = iframe.dataset.src;

  var open = function () {
    iframe.src = src;
    overlay.classList.add("is-open");
  };
  var close = function () {
    overlay.classList.remove("is-open");
    iframe.src = "";
  };

  openBtn.addEventListener("click", open);
  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) close();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });
}

/* ---------------- Schedule: day tabs + accordion ---------------- */
function initSchedule() {
  var tabs = document.querySelectorAll(".day-tab");
  var lists = document.querySelectorAll(".sessions-list");
  if (!tabs.length) return;

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var day = tab.dataset.day;
      tabs.forEach(function (t) { t.classList.toggle("is-active", t === tab); });
      lists.forEach(function (l) { l.classList.toggle("is-active", l.dataset.day === day); });
    });
  });

  document.querySelectorAll(".session-header").forEach(function (header) {
    header.addEventListener("click", function () {
      var card = header.closest(".session-card");
      var list = card.closest(".sessions-list");
      var wasOpen = card.classList.contains("is-open");
      list.querySelectorAll(".session-card").forEach(function (c) { c.classList.remove("is-open"); });
      if (!wasOpen) card.classList.add("is-open");
    });
  });
}

/* ---------------- Presenter bio dialog ---------------- */
function initPresenterDialog() {
  var overlay = document.querySelector("[data-presenter-dialog]");
  if (!overlay) return;
  var closeBtn = overlay.querySelector("[data-close-dialog]");
  var deptEl = overlay.querySelector("[data-dialog-dept]");
  var nameEl = overlay.querySelector("[data-dialog-name]");
  var roleEl = overlay.querySelector("[data-dialog-role]");
  var bioEl = overlay.querySelector("[data-dialog-bio]");
  var avatarEl = overlay.querySelector("[data-dialog-avatar]");

  document.querySelectorAll("[data-presenter-card]").forEach(function (card) {
    card.addEventListener("click", function () {
      deptEl.textContent = card.dataset.dept || "";
      nameEl.textContent = card.dataset.name || "";
      bioEl.textContent = card.dataset.bio || "";

      if (card.dataset.role) {
        roleEl.textContent = card.dataset.role;
        roleEl.style.display = "block";
      } else {
        roleEl.textContent = "";
        roleEl.style.display = "none";
      }

      if (card.dataset.photo) {
        avatarEl.innerHTML = '<img src="' + card.dataset.photo + '" alt="' + (card.dataset.name || "") + '" />';
      } else {
        avatarEl.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:32px;height:32px;color:rgba(30,42,74,0.4)"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';
      }

      overlay.classList.add("is-open");
    });
  });

  var close = function () { overlay.classList.remove("is-open"); };
  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) close();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });
}

/* ---------------- Contact / registration form ---------------- */
function initContactForm() {
  var form = document.querySelector("[data-contact-form]");
  if (!form) return;

  var validators = {
    presentingAs: function (v) { return v ? "" : "Required"; },
    firstName: function (v) { return v.trim().length ? "" : "Required"; },
    lastName: function (v) { return v.trim().length ? "" : "Required"; },
    email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "Enter a valid email"; },
    institution: function (v) { return v.trim().length ? "" : "Required"; },
    title: function (v) { return v ? "" : "Required"; },
    "function": function (v) { return v ? "" : "Required"; },
    country: function (v) { return v ? "" : "Required"; },
    phone: function (v) { return v.trim().length >= 4 ? "" : "Required"; },
    dataSharing: function (v) { return v ? "" : "Required"; }
  };

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var fd = new FormData(form);
    var errors = {};

    Object.keys(validators).forEach(function (name) {
      var value = fd.get(name) || "";
      var message = validators[name](String(value));
      if (message) errors[name] = message;
    });

    form.querySelectorAll(".field, .radio-group").forEach(function (el) {
      var name = el.dataset.field;
      var errorEl = el.querySelector(".field-error");
      if (errors[name]) {
        el.classList.add("has-error");
        if (errorEl) errorEl.textContent = errors[name];
      } else {
        el.classList.remove("has-error");
        if (errorEl) errorEl.textContent = "";
      }
    });

    if (Object.keys(errors).length) return;

    var submitBtn = form.querySelector("[data-submit-btn]");
    var submitLabel = submitBtn.querySelector("[data-submit-label]");
    var spinner = submitBtn.querySelector(".icon-spinner");
    var check = submitBtn.querySelector(".icon-check");

    submitBtn.disabled = true;
    if (spinner) spinner.style.display = "block";
    if (check) check.style.display = "none";
    submitLabel.textContent = "Submitting…";

    setTimeout(function () {
      if (spinner) spinner.style.display = "none";
      if (check) check.style.display = "block";
      submitLabel.textContent = "Registration received — thank you!";
      form.reset();

      setTimeout(function () {
        submitBtn.disabled = false;
        if (check) check.style.display = "none";
        submitLabel.textContent = "Submit";
      }, 4000);
    }, 900);
  });
}

/* ---------------- Footer year ---------------- */
function initFooterYear() {
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
}
