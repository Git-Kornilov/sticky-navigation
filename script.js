'use strict';

const nav = document.querySelector('.nav');

const fixNav = function () {
  if (window.scrollY > nav.offsetHeight + 150)
    nav.classList.add('active'); // 150px - some space beneath nav
  else nav.classList.remove('active');
};

window.addEventListener('scroll', fixNav);
