document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var navUl = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        if (navUl.classList.contains('active')) {
            navUl.classList.remove('active');
            navUl.classList.add('inactive');
        } else {
            navUl.classList.remove('inactive');
            navUl.classList.add('active');
        }
    });
});
