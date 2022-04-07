const logo = document.querySelector('.logo img');
const navbar = document.querySelector('.navigator');

document.onscroll = () => {
    scrollAction()
};

function scrollAction () {
    if(document.body.scrollTop > 675 || document.documentElement.scrollTop > 675) {
        logo.style.width = "50px";
        navbar.style.backgroundColor = "rgba(0, 0, 0, .7)"
    } else {
        logo.style.width = "100px"
        navbar.style.backgroundColor = "transparent"
    }
}

// MENU TOGGLE
const navToggle = () => {
    const menuIcon = document.querySelector('.menu-icon');
    const listItem = document.querySelector('.navigation');
    const navigator = document.querySelector('.navigator');

    menuIcon.addEventListener('click', function () {
        listItem.classList.toggle('active-navigation');
        navigator.classList.toggle('change');
    })
}
navToggle()
