const nav = document.getElementById('nav');
const menu = document.querySelector('.menu');
console.log(menu);

menu.addEventListener('click', () => {
  nav.classList.toggle('hiden');
});

const header = document.querySelector('.header');
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
header.before(scrollWatcher);

const headerObs = new IntersectionObserver(
  (entries) => {
    header.classList.toggle('scroll', !entries[0].isIntersecting);
  },
  { rootMargin: '70px 0px 0px 0px' }
);

headerObs.observe(scrollWatcher);
