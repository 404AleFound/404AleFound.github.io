(function () {
  'use strict';

  // Back to top button
  var backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    function toggleBackToTop() {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }

    window.addEventListener('scroll', toggleBackToTop, { passive: true });
    toggleBackToTop();

    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile menu toggle
  var menuToggle = document.querySelector('.menu-toggle');
  var navList = document.querySelector('.nav-list');
  if (menuToggle && navList) {
    menuToggle.addEventListener('click', function () {
      navList.classList.toggle('open');
    });
  }

  // TOC scroll highlight
  var tocLinks = document.querySelectorAll('.toc-content a');
  var headings = document.querySelectorAll('.article-content h2, .article-content h3');

  if (tocLinks.length && headings.length) {
    function updateActiveToc() {
      var scrollPos = window.scrollY + 120;
      var activeIndex = -1;

      for (var i = 0; i < headings.length; i++) {
        if (headings[i].offsetTop <= scrollPos) {
          activeIndex = i;
        }
      }

      tocLinks.forEach(function (link) {
        link.classList.remove('active');
      });

      if (activeIndex >= 0 && tocLinks[activeIndex]) {
        tocLinks[activeIndex].classList.add('active');
      }
    }

    window.addEventListener('scroll', updateActiveToc, { passive: true });
    updateActiveToc();
  }
})();
