document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
});

// Прокрутка к разделам по клику на меню
const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 20,
            behavior: 'smooth'
        });
    });
});
