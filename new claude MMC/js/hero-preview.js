(function () {
  'use strict';
  var hero = document.querySelector('.campaign-hero');
  if (!hero) return;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  var intro;
  function reveal() {
    if (!window.gsap || reduced.matches) return;
    intro = gsap.timeline();
    intro.from(hero.querySelectorAll('.canvas-mask > span'), {
      yPercent: 110, duration: 0.7, stagger: 0.08, ease: 'power3.out'
    }).from(hero.querySelectorAll('.canvas-piece'), {
      opacity: 0, y: 28, scale: 0.96, duration: 0.85, stagger: 0.12, ease: 'power3.out'
    }, 0.18);
  }
  // Start when the existing preloader releases the page. Never alter it.
  var preloader = document.getElementById('preloader');
  if (preloader && !preloader.classList.contains('is-done')) {
    var observer = new MutationObserver(function () {
      if (preloader.classList.contains('is-done')) {
        observer.disconnect();
        reveal();
      }
    });
    observer.observe(preloader, { attributes: true, attributeFilter: ['class'] });
  } else reveal();
  // A restrained exit leads into the existing manifesto; no pinning or new scroller.
  if (window.gsap && window.ScrollTrigger) {
    gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', function () {
      gsap.to(hero.querySelector('.canvas-art'), {
        y: -18, ease: 'none', scrollTrigger: {
          trigger: hero, start: 'top top', end: 'bottom top', scrub: true
        }
      });
    });
  }
  reduced.addEventListener('change', function () {
    if (reduced.matches && intro) intro.progress(1).kill();
  });
})();
