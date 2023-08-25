// scroll.js

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  smoothMobile: true,
  inertia: 0.75,
});

export default scroll;
