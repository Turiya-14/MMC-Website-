/* =============================================================
   MakeMyCampaign — main.js
   ============================================================= */
(function(){
  "use strict";

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
  var hasGSAP = typeof window.gsap !== 'undefined';

  if (hasGSAP && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  /* ---------------------------------------------------------
     Lenis smooth scroll (skip on touch / reduced motion)
     --------------------------------------------------------- */
  var lenis = null;
  if (!isTouch && !prefersReduced && typeof window.Lenis !== 'undefined') {
    lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenis.on('scroll', hasGSAP && window.ScrollTrigger ? ScrollTrigger.update : function(){});
    if (hasGSAP) {
      gsap.ticker.add(function(time){ lenis.raf(time * 1000); });
      gsap.ticker.lagSmoothing(0);
    } else {
      requestAnimationFrame(function raf(time){ lenis.raf(time); requestAnimationFrame(raf); });
    }
  }

  /* ---------------------------------------------------------
     Preloader
     --------------------------------------------------------- */
  var preloader = document.getElementById('preloader');
  var pct = document.getElementById('preloader-pct');
  var fill = document.getElementById('preloader-fill');
  var words = document.querySelectorAll('.preloader-word');

  function litWords(p){
    var steps = words.length;
    var lit = Math.floor((p/100) * steps);
    words.forEach(function(w, i){ w.classList.toggle('is-lit', i < lit || p >= 100); });
  }

  var progress = 0;
  var target = 0;
  var loaded = false;

  if (preloader && pct && fill){
    window.addEventListener('load', function(){ loaded = true; target = 100; });
    // simulated ramp so it never feels stuck, but waits for real load to finish
    var rampInterval = setInterval(function(){
      if (!loaded) target = Math.min(target + Math.random()*9 + 2, 92);
    }, 220);

    var tickPreloader = function(){
      progress += (target - progress) * 0.12;
      if (target - progress < 0.3) progress = target;
      var shown = Math.round(progress);
      pct.textContent = shown;
      fill.style.width = shown + '%';
      litWords(shown);

      if (progress >= 100){
        clearInterval(rampInterval);
        finishPreloader();
        return;
      }
      requestAnimationFrame(tickPreloader);
    };
    requestAnimationFrame(tickPreloader);

    // hard fallback: never block the site for more than ~4.5s
    setTimeout(function(){ loaded = true; target = 100; }, 4500);
  } else {
    // pages with no preloader markup (e.g. work.html) skip straight to the
    // hero/intro reveal once the DOM is ready
    playHeroIntro();
  }

  function finishPreloader(){
    preloader.classList.add('is-done');
    document.body.classList.add('is-ready');
    setTimeout(function(){
      preloader.style.display = 'none';
      playHeroIntro();
    }, 700);
  }

  /* ---------------------------------------------------------
     Hero intro (headline lines rise in)
     --------------------------------------------------------- */
  function playHeroIntro(){
    if (!hasGSAP){
      document.querySelectorAll('.hero-headline .word').forEach(function(w){ w.style.transform = 'translateY(0)'; });
      return;
    }
    gsap.to('.hero-headline .word', {
      y: '0%', duration: 1.1, ease: 'power4.out', stagger: 0.045
    });
    gsap.fromTo('.eyebrow', { opacity:0, y:12 }, { opacity:1, y:0, duration:.8, delay:.1 });
    gsap.fromTo('.hero-sub, .hero-cta-row', { opacity:0, y:16 }, { opacity:1, y:0, duration:.8, delay:.5, stagger:.08 });
    gsap.fromTo('.scroll-cue', { opacity:0 }, { opacity:1, duration:.8, delay:1 });
  }

  /* ---------------------------------------------------------
     Scroll progress rails
     --------------------------------------------------------- */
  var railTop = document.getElementById('railTop');
  var railBottom = document.getElementById('railBottom');
  var toTopBtn = document.getElementById('toTop');

  function updateRails(){
    var h = document.documentElement.scrollHeight - window.innerHeight;
    var p = h > 0 ? Math.min(window.scrollY / h, 1) : 0;
    railTop.style.transform = 'scaleX(' + p + ')';
    railBottom.style.transform = 'scaleX(' + p + ')';
    toTopBtn.classList.toggle('is-visible', window.scrollY > window.innerHeight * 0.6);
  }
  window.addEventListener('scroll', updateRails, { passive:true });
  updateRails();

  toTopBtn.addEventListener('click', function(){
    if (lenis) lenis.scrollTo(0, { duration: 1.2 });
    else window.scrollTo({ top:0, behavior:'smooth' });
  });

  /* ---------------------------------------------------------
     Quick nav — full-screen overlay menu (the old header's
     "+" opened this same overlay; only the sticky bar around
     it is gone). Big stacked links, Jio-style.
     --------------------------------------------------------- */
  var quickNav = document.getElementById('quickNav');
  var quickNavToggle = document.getElementById('quickNavToggle');
  var navOverlay = document.getElementById('quickNavOverlay');
  if (quickNav && quickNavToggle && navOverlay){
    var setNavOpen = function(open){
      quickNav.classList.toggle('is-open', open);
      navOverlay.classList.toggle('is-open', open);
      navOverlay.setAttribute('aria-hidden', open ? 'false' : 'true');
      quickNavToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.documentElement.classList.toggle('nav-open', open);
      if (lenis){ if (open) lenis.stop(); else lenis.start(); }
    };
    quickNavToggle.addEventListener('click', function(e){
      e.stopPropagation();
      setNavOpen(!quickNav.classList.contains('is-open'));
    });
    navOverlay.addEventListener('click', function(e){
      if (e.target === navOverlay) setNavOpen(false);
    });
    navOverlay.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ setNavOpen(false); });
    });
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape' && quickNav.classList.contains('is-open')) setNavOpen(false);
    });
  }

  /* ---------------------------------------------------------
     Internal anchor links (footer nav, hero CTA) use Lenis
     --------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function(link){
    link.addEventListener('click', function(e){
      var id = link.getAttribute('href');
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(target, { duration: 1.2, offset: 0 });
      else target.scrollIntoView({ behavior:'smooth' });
    });
  });

  /* ---------------------------------------------------------
     Custom cursor + magnetic buttons (desktop only)
     --------------------------------------------------------- */
  if (!isTouch){
    document.documentElement.classList.add('has-cursor');
    var cursor = document.getElementById('cursor');
    var cx = window.innerWidth/2, cy = window.innerHeight/2, curX = cx, curY = cy;
    window.addEventListener('mousemove', function(e){ cx = e.clientX; cy = e.clientY; });
    (function animCursor(){
      curX += (cx - curX) * 0.18;
      curY += (cy - curY) * 0.18;
      cursor.style.transform = 'translate(' + curX + 'px,' + curY + 'px) translate(-50%,-50%)';
      requestAnimationFrame(animCursor);
    })();

    document.querySelectorAll('a, button, .service-row').forEach(function(el){
      el.addEventListener('mouseenter', function(){ cursor.classList.add('is-active'); });
      el.addEventListener('mouseleave', function(){ cursor.classList.remove('is-active'); });
    });

    document.querySelectorAll('.magnetic').forEach(function(el){
      el.addEventListener('mousemove', function(e){
        var r = el.getBoundingClientRect();
        var mx = e.clientX - r.left - r.width/2;
        var my = e.clientY - r.top - r.height/2;
        el.style.transform = 'translate(' + mx*0.28 + 'px,' + my*0.35 + 'px)';
      });
      el.addEventListener('mouseleave', function(){ el.style.transform = ''; });
    });
  }

  /* ---------------------------------------------------------
     Scroll-triggered reveals (only if GSAP present)
     --------------------------------------------------------- */
  if (hasGSAP && window.ScrollTrigger && !prefersReduced){

    /* Manifesto: pinned 3D orbit. Panels are arranged in a circle in 3D
       space (base transform set once below); scrolling spins the shared
       .manifesto-stage so each panel sweeps through "front and center" in
       turn, Jio-Creative-Labs style. A single scrubbed tween drives a proxy
       angle; onUpdate recomputes every panel's scale/opacity/brightness from
       its angular distance to the camera, so depth stays in sync with the
       rotation (no separate per-panel scroll triggers to desync). Skipped
       on narrow screens — see the matching CSS fallback for why. */
    var manifestoStage = document.getElementById('manifestoStage');
    var manifestoPanels = gsap.utils.toArray('.manifesto-panel');
    var manifestoFinal = document.getElementById('manifestoFinal');
    var manifestoScene = document.querySelector('.manifesto-scene');

    if (manifestoStage && manifestoPanels.length && window.innerWidth > 680){
      var panelCount = manifestoPanels.length;
      var angleStep = 360 / panelCount;
      var ringRadius = 0;

      function layoutRing(){
        var rect = manifestoPanels[0].getBoundingClientRect();
        // 1.85x the tight inscribed-circle radius — the bare formula below
        // packs panels edge-to-edge (fine for a solid box, but with 3D
        // perspective the off-angle faces visually bleed into each other
        // mid-transition). The multiplier opens up real air between panels,
        // "like Jio" (point 19 feedback).
        ringRadius = Math.round(((rect.width / 2) / Math.tan(Math.PI / panelCount)) * 1.85);
      }
      function paintPanels(stageAngle){
        // Spin the whole ring: the stage's own rotateY composes (via
        // transform-style:preserve-3d) with each panel's fixed base
        // rotateY+translateZ, which is what actually sweeps panels past
        // the front-center camera position.
        manifestoStage.style.transform = 'rotateY(' + stageAngle + 'deg)';
        manifestoPanels.forEach(function(panel, i){
          var base = i * angleStep;
          var world = ((base + stageAngle) % 360 + 540) % 360 - 180; // normalize -180..180
          var focus = Math.cos(world * Math.PI / 180); // 1 = facing camera, -1 = facing away
          var norm = (focus + 1) / 2; // 0..1
          // Sharpen the falloff (norm^1.6) so off-angle panels shrink/dim
          // faster — they're smaller and fainter sooner, which reads as
          // separation instead of a collision during the crossfade.
          var sharp = Math.pow(norm, 1.6);
          var scale = 0.62 + sharp * 0.46;
          panel.style.transform = 'rotateY(' + base + 'deg) translateZ(' + ringRadius + 'px) scale(' + scale + ')';
          panel.style.opacity = 0.1 + sharp * 0.9;
          panel.style.filter = 'brightness(' + (0.38 + sharp * 0.82) + ')';
          panel.style.zIndex = Math.round(sharp * 100);
        });
      }

      layoutRing();
      paintPanels(0);

      var per = 1 / (panelCount + 1);
      var proxy = { angle: 0 };
      var manifestoTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.manifesto',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.6,
          onRefresh: layoutRing,
        }
      });
      manifestoTl
        .to(proxy, {
          angle: -(panelCount - 1) * angleStep,
          duration: panelCount * per,
          ease: 'none',
          onUpdate: function(){ paintPanels(proxy.angle); },
        }, 0)
        .to(manifestoScene, { opacity: 0, duration: per * 0.6, ease: 'power2.in' }, panelCount * per + per * 0.1)
        .fromTo(manifestoFinal, { opacity: 0 }, { opacity: 1, duration: per * 0.6, ease: 'power2.out' }, panelCount * per + per * 0.25);
    }

    /* Showpiece: pinned horizontal filmstrip — ONE shared scroll-linked
       transform on the track (not six independently-animated badges), so
       there's nothing to desync or flicker as the user scrolls. */
    var filmstripTrack = document.getElementById('filmstripTrack');
    if (filmstripTrack){
      gsap.to(filmstripTrack, {
        x: function(){ return -(filmstripTrack.scrollWidth - window.innerWidth); },
        ease: 'none',
        scrollTrigger: {
          trigger:'.showpiece', start:'top top', end:'bottom bottom',
          scrub:true, invalidateOnRefresh:true
        }
      });
    }

    /* "What's going on" center video: when the tile's center reaches the
       middle of the viewport the section pins, the tile scales up until it
       covers the screen and the eight side tiles slide out and fade; after a
       short hold the pin releases and the page scrolls on (the footer then
       slides over the still-zoomed tile — see .contact's z-index).
       Everything is transform/opacity only. The tile scales to COVER the
       viewport (its blurred backdrop fills the screen) while the media slot
       inside is counter-scaled so the clip itself ends up CONTAINED, never
       cropped — so the clip's shape, or swapping the <video> for an
       <iframe>, needs no change here. */
    var zoomTile = document.getElementById('latestVideoTile');
    var zoomSection = zoomTile ? zoomTile.closest('.latest') : null;
    var zoomMedia = zoomTile ? zoomTile.querySelector('.latest-media') : null;
    if (zoomTile && zoomSection && zoomMedia){
      var zoomToggle = zoomMedia.querySelector('.sound-toggle');
      var zoomGrid = Array.prototype.slice.call(zoomTile.parentNode.children);
      var zoomSides = zoomGrid.filter(function(el){ return el !== zoomTile; });
      var zoomCenter = zoomGrid.indexOf(zoomTile);
      var zoomFit = { cover: 1, contain: 1 };
      var zoomState = { p: 0 };
      // quickSetter ignores the "scale" shorthand, so drive scaleX + scaleY
      function scaleSetter(el){
        var sx = gsap.quickSetter(el, 'scaleX'), sy = gsap.quickSetter(el, 'scaleY');
        return function(v){ sx(v); sy(v); };
      }
      var setTileScale = scaleSetter(zoomTile);
      var setMediaScale = scaleSetter(zoomMedia);

      // offset* are layout sizes, unaffected by the zoom's own transforms,
      // so this is safe to re-run mid-animation on resize/refresh
      function measureZoom(){
        var vw = document.documentElement.clientWidth, vh = window.innerHeight;
        zoomFit.cover = Math.max(vw / zoomTile.offsetWidth, vh / zoomTile.offsetHeight) * 1.02;
        zoomFit.contain = Math.min(vw / zoomMedia.offsetWidth, vh / zoomMedia.offsetHeight);
      }
      function paintZoom(){
        // tile and clip each grow linearly to their own target; the media
        // slot's own scale is just the ratio between the two
        var tile = 1 + (zoomFit.cover - 1) * zoomState.p;
        var clip = 1 + (zoomFit.contain - 1) * zoomState.p;
        setTileScale(tile);
        setMediaScale(clip / tile);
        if (zoomToggle) zoomToggle.style.setProperty('--zoom-counter', 1 / clip);
      }
      // grid step (-1/0/1) from the center cell — side tiles exit away from it
      function gridStep(el, axis){
        var i = zoomGrid.indexOf(el);
        return axis === 'x' ? (i % 3) - (zoomCenter % 3) : Math.floor(i / 3) - Math.floor(zoomCenter / 3);
      }

      measureZoom();
      gsap.timeline({
        scrollTrigger: {
          trigger: zoomTile,
          start: 'center center',
          end: function(){ return '+=' + Math.round(window.innerHeight * 1.6); },
          pin: zoomSection,
          scrub: 0.6,
          onRefresh: function(){ measureZoom(); paintZoom(); },
        }
      })
        .to(zoomState, { p: 1, duration: 1, ease: 'power2.inOut', onUpdate: paintZoom }, 0)
        .to(zoomSides, {
          xPercent: function(i, el){ return gridStep(el, 'x') * 45; },
          yPercent: function(i, el){ return gridStep(el, 'y') * 45; },
          scale: 0.82, opacity: 0, duration: 0.7, ease: 'power2.in'
        }, 0)
        .to({}, { duration: 0.6 }); // hold full-screen before the pin releases
    }

    /* Generic fade-up reveal for section heads, cards, rows */
    gsap.utils.toArray('.section-head, .service-row, .why-card, .featured-case, .logo-tile, .elections-inner').forEach(function(el){
      gsap.fromTo(el, { opacity:0, y:36 }, {
        opacity:1, y:0, duration:0.9, ease:'power3.out',
        scrollTrigger: { trigger:el, start:'top 88%' }
      });
    });

    /* Contact headline pop */
    gsap.fromTo('.contact-headline', { opacity:0, y:50 }, {
      opacity:1, y:0, duration:1, ease:'power3.out',
      scrollTrigger:{ trigger:'.contact', start:'top 70%' }
    });

  } else {
    // no-JS-animation fallback: manifesto's static stacked layout is handled
    // entirely by the prefers-reduced-motion CSS fallback (see style.css)
  }

  /* ---------------------------------------------------------
     Elections lightbox — pillar buttons open a per-track gallery
     --------------------------------------------------------- */
  var galleries = {
    political: {
      title: 'Political Campaigns',
      note: 'Goa Assembly Elections — creative &amp; on-ground campaign work.',
      images: [
        { src:'assets/goa1.jpg', alt:'MMC Goa Assembly Elections campaign creative' },
        { src:'assets/goa2.jpg', alt:'MMC Goa Elections campaign creative' }
      ]
    },
    corporate: {
      title: 'Corporate Elections',
      note: 'Case studies from this track are being added.',
      images: []
    },
    institutional: {
      title: 'Institutional Elections',
      note: 'Case studies from this track are being added.',
      images: []
    }
  };

  var lightbox = document.getElementById('electionsLightbox');
  if (lightbox){
    var lightboxTitle = document.getElementById('lightboxTitle');
    var lightboxNote = document.getElementById('lightboxNote');
    var lightboxGallery = document.getElementById('lightboxGallery');
    var lightboxClose = document.getElementById('lightboxClose');
    var lastFocused = null;

    function openLightbox(key){
      var data = galleries[key];
      if (!data) return;
      lightboxTitle.textContent = data.title;
      lightboxNote.innerHTML = data.note;
      lightboxGallery.innerHTML = '';
      if (data.images.length){
        data.images.forEach(function(img){
          var el = document.createElement('img');
          el.src = img.src; el.alt = img.alt; el.loading = 'lazy';
          lightboxGallery.appendChild(el);
        });
        lightboxGallery.style.display = '';
      } else {
        lightboxGallery.style.display = 'none';
        var empty = document.createElement('div');
        empty.className = 'lightbox-empty';
        empty.textContent = 'Coming soon';
        lightboxGallery.parentNode.insertBefore(empty, lightboxGallery.nextSibling);
      }
      lastFocused = document.activeElement;
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      lightboxClose.focus();
    }
    function closeLightbox(){
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      var stray = lightbox.querySelector('.lightbox-empty');
      if (stray) stray.remove();
      if (lastFocused) lastFocused.focus();
    }

    document.querySelectorAll('.pillar[data-gallery]').forEach(function(btn){
      btn.addEventListener('click', function(){ openLightbox(btn.dataset.gallery); });
    });
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.querySelectorAll('[data-lightbox-close]').forEach(function(el){
      el.addEventListener('click', closeLightbox);
    });
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
    });
  }

  /* ---------------------------------------------------------
     Contact modal — compiles the form into a WhatsApp deep link
     --------------------------------------------------------- */
  var modal = document.getElementById('contactModal');
  if (modal){
    var modalClose = document.getElementById('modalClose');
    var contactForm = document.getElementById('contactForm');
    var modalLastFocused = null;

    function openModal(){
      modalLastFocused = document.activeElement;
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      var firstField = contactForm.querySelector('input');
      if (firstField) firstField.focus();
    }
    function closeModal(){
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (modalLastFocused) modalLastFocused.focus();
    }

    document.querySelectorAll('.js-open-contact').forEach(function(btn){
      btn.addEventListener('click', openModal);
    });
    modalClose.addEventListener('click', closeModal);
    modal.querySelectorAll('[data-modal-close]').forEach(function(el){
      el.addEventListener('click', closeModal);
    });
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
    });

    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      var fd = new FormData(contactForm);
      var lines = [
        'Hi MakeMyCampaign, I\'d like to talk about a project.',
        'Name: ' + (fd.get('name') || '-'),
        'Phone: ' + (fd.get('phone') || '-')
      ];
      if (fd.get('email')) lines.push('Email: ' + fd.get('email'));
      if (fd.get('company')) lines.push('Company/Brand: ' + fd.get('company'));
      if (fd.get('service')) lines.push('Interested in: ' + fd.get('service'));
      if (fd.get('message')) lines.push('Message: ' + fd.get('message'));
      var text = encodeURIComponent(lines.join('\n'));
      window.open('https://wa.me/918888533422?text=' + text, '_blank', 'noopener');
      closeModal();
      contactForm.reset();
    });
  }

  /* footer year */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* pause autoplaying brand-video tile under reduced motion, show first frame */
  if (prefersReduced) {
    document.querySelectorAll('.latest-tile.has-video video').forEach(function(v){
      v.removeAttribute('autoplay');
      v.pause();
      v.currentTime = 0;
    });
  }

  /* sound toggle for the brand-video tile */
  document.querySelectorAll('.latest-tile.has-video .sound-toggle').forEach(function(btn){
    var tile = btn.closest('.latest-tile.has-video');
    var fg = tile ? tile.querySelector('.video-fg') : null;
    if (!fg) return;
    btn.addEventListener('click', function(e){
      e.preventDefault();
      e.stopPropagation();
      fg.muted = !fg.muted;
      if (!fg.muted) { fg.play().catch(function(){}); }
      btn.setAttribute('aria-pressed', fg.muted ? 'false' : 'true');
      btn.setAttribute('aria-label', fg.muted ? 'Unmute video' : 'Mute video');
    });
  });

})();
