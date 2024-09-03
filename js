// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});

// Form validation (example if you have a form)
// function validateForm(form) {
//     const inputs = form.querySelectorAll('input, textarea');
//     let valid = true;

//     inputs.forEach(input => {
//         if (input.required && !input.value.trim()) {
//             valid = false;
//             input.classList.add('error');
//         } else {
//             input.classList.remove('error');
//         }
//     });

//     return valid;
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.querySelector('form');

//     if (form) {
//         form.addEventListener('submit', (event) => {
//             if (!validateForm(form)) {
//                 event.preventDefault();
//                 alert('Por favor, preencha todos os campos obrigatórios.');
//             }
//         });
//     }
// });
