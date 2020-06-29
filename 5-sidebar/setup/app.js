const sideToggle = document.querySelector('.sidebar-toggle');
const showSidebar = document.querySelector('.sidebar')
const closeBtn = document.querySelector('.close-btn');

sideToggle.addEventListener('click', () => {
    console.log(showSidebar.classList)
    showSidebar.classList.toggle('show-sidebar');
})
closeBtn.addEventListener('click', () => {
    showSidebar.classList.remove('show-sidebar');
});