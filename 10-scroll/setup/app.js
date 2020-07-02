// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels
const date = document.getElementById('date');
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
const navBar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
const scrollLinks = document.querySelectorAll('.scroll-link');
// ********** set date ************
date.innerHTML = new Date().getFullYear();
// ********** close links ************

// static way to show the height 
//navToggle.addEventListener('click', () => linksContainer.classList.toggle('show-links'));
//Dynamic way to adjust height
navToggle.addEventListener('click', () => {
   const containerHeight = linksContainer.getBoundingClientRect().height; 
   const linkHeight = links.getBoundingClientRect().height; 
   containerHeight === 0 ? 
   linksContainer.style.height = `${linkHeight}px`: 
   linksContainer.style.height = 0
});
// ********** fixed navbar ************
window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;
    scrollHeight > navHeight ? 
    navBar.classList.add('fixed-nav'):
    navBar.classList.remove('fixed-nav');

    scrollHeight > 500?
    topLink.classList.add('show-link'):
    topLink.classList.remove('show-link')
});
// ********** smooth scroll ************
// select links
scrollLinks.forEach(link => {
 link.addEventListener('click', (e) => {
     e.preventDefault(); 
     const id = e.currentTarget.getAttribute('href').slice(1)
     
 });
});