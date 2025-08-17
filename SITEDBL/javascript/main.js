document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});

elementbutton.addEventListener('click', () => {
    const element = document.querySelector('.element');
    element.style.display = 'block';
});