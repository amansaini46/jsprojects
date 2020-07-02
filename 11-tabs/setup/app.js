const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const article = document.querySelectorAll('.content');

about.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
        btns.forEach(btn => btn.classList.remove('active'))
    } 
});