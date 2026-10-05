(function () {
  "use strict";

  // Replace with your real email; valid messages open in the visitor's mail app.
  var CONTACT_EMAIL = "poojarym738@gmail.com";

  var header = document.getElementById("header");
  var menuBtn = document.getElementById("menuBtn");
  var navLinks = document.getElementById("navLinks");

  // Mobile menu
  function setMenu(open) {
    navLinks.classList.toggle("open", open);
    menuBtn.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
  }
  menuBtn.addEventListener("click", function () {
    setMenu(!navLinks.classList.contains("open"));
  });
  navLinks.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { setMenu(false); });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenu(false);
  });

  // Header shadow + active link on scroll
  var sections = document.querySelectorAll("main section[id]");
  var links = navLinks.querySelectorAll("a");
  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 10);
    var pos = window.scrollY + 120, current = "home";
    sections.forEach(function (s) { if (pos >= s.offsetTop) current = s.id; });
    links.forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("href") === "#" + current);
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Profile image fallback if the photo is missing
  var img = document.querySelector(".hero-img img");
  img.addEventListener("error", function () {
    img.src = "data:image/svg+xml;utf8," + encodeURIComponent(
      "<svg xmlns='http://www.w3.org/2000/svg' width='320' height='320'><rect width='320' height='320' fill='#dbe7ea'/><text x='50%' y='54%' font-family='sans-serif' font-size='96' font-weight='700' fill='#0e7c86' text-anchor='middle'>MP</text></svg>");
  }, { once: true });

  // Form validation
  var form = document.getElementById("contactForm");
  var status = document.getElementById("formStatus");
  var fields = {
    name: function (v) {
      if (!v) return "Please enter your name.";
      if (v.length < 2) return "Name must be at least 2 characters.";
      return "";
    },
    email: function (v) {
      if (!v) return "Please enter your email address.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return "Enter a valid email, like name@example.com.";
      return "";
    },
    message: function (v) {
      if (!v) return "Please enter a message.";
      if (v.length < 10) return "Message must be at least 10 characters.";
      return "";
    }
  };

  function validate(id) {
    var input = document.getElementById(id);
    var msg = fields[id](input.value.trim());
    document.getElementById(id + "Error").textContent = msg;
    input.classList.toggle("invalid", !!msg);
    input.setAttribute("aria-invalid", msg ? "true" : "false");
    return !msg;
  }

  Object.keys(fields).forEach(function (id) {
    var input = document.getElementById(id);
    input.addEventListener("blur", function () { validate(id); });
    input.addEventListener("input", function () {
      if (input.classList.contains("invalid")) validate(id);
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    status.textContent = "";
    var results = Object.keys(fields).map(validate);
    if (results.indexOf(false) !== -1) {
      form.querySelector(".invalid").focus();
      return;
    }
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
    var body = message + "\n\nFrom: " + name + " (" + email + ")";
    window.location.href = "mailto:" + CONTACT_EMAIL +
      "?subject=" + encodeURIComponent("Portfolio message from " + name) +
      "&body=" + encodeURIComponent(body);
    status.textContent = "Thanks, " + name + "! Your email app should open with the message ready to send.";
    form.reset();
  });
})();
