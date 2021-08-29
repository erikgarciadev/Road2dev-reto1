const icon = document.getElementById("icon")
const navbarLinks = document.getElementById('navbar__links')
const jumper = document.getElementById('jumper')

window.onscroll = function () {
    let top = window.pageYOffset || document.documentElement.scrollTop
    if(top > 0) {
            document.getElementsByClassName('header')[0].classList.add('shadow')
    }else {
        document.getElementsByClassName('header')[0].classList.remove('shadow')
    }

    if(top>200) {
        jumper.classList.add('show')
    }else {
        jumper.classList.remove('show')
    }
}


icon.addEventListener("click", () => {
    const classList = icon.className.split(' ')
    let burguer = false
    for (const _class of classList) {
        if(_class === 'icon-burger'){
            burguer = true
        }
    }
    if(burguer){
        icon.classList.remove('icon-burger')
        icon.classList.add('icon-cancel')
        navbarLinks.classList.add('show')

    }else {
        icon.classList.remove('icon-cancel')
        icon.classList.add('icon-burger')
        navbarLinks.classList.remove('show')
    }
})

function hiddenNavbarLinks() {
    navbarLinks.classList.remove('show')
    icon.classList.remove('icon-cancel')
    icon.classList.add('icon-burger')
}

jumper.addEventListener('click', () => {
    document.body.scrollTop = 0; // Supports Safari
    document.documentElement.scrollTop = 0; // Supports Chrome, Firefox, IE and Opera
})