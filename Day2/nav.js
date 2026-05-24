(function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('mainNav');
  var overlay = document.getElementById('navOverlay');
  if (!toggle || !nav) return;

  function setOpen(open) {
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Toggle menu');
  }

  toggle.addEventListener('click', function () {
    setOpen(!document.body.classList.contains('nav-open'));
  });

  if (overlay) {
    overlay.addEventListener('click', function () { setOpen(false); });
  }

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () { setOpen(false); });
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 1024) setOpen(false);
  });
})();
