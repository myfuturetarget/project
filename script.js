const barIcon = document.querySelector('.bar_icon');

const barIconIcon = document.querySelector('.bar_icon i');

const navBar = document.querySelector('.navbar');

barIcon.onclick = function () {
    navBar.classList.toggle('open')
}

