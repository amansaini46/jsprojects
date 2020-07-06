const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');


slides.forEach((slide, index) => {
   slide.style.left = `${index * 100}%`;
});
let counter = 0
nextBtn.addEventListener('click',() => {
    counter++; 
    carousel()
});
prevBtn.addEventListener('click', () => {
    counter--; 
    carousel()
});

function carousel () {
    // if( counter === slides.length) {
    //     counter = 0; 
    // }
    // if ( counter < 0) {
    //     counter = slides.length -1; 
    // }

(counter < slides.length -1) ? 
nextBtn.style.display = 'block'
: nextBtn.style.display = 'none'
counter > 0 ? 
prevBtn.style.display = 'block'
: prevBtn.style.display = 'none'
  slides.forEach(slide => slide.style.transform = `translateX(-${counter * 100}%)`)
};
prevBtn.style.display = 'none'