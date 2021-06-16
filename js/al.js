// document.addEventListener('DOMContentLoaded', () => {
// })

document.addEventListener('scroll', function(e) {
    // console.log(window.scrollY)
    if(window.scrollY > 90) {
        getDOMElement('.al-nav-bar').classList.add('al-fixed')
    } else {
        getDOMElement('.al-nav-bar').classList.remove('al-fixed')
    }
})

function getDOMElement(ele) {
    return document.querySelector(ele)
}

const body = getDOMElement('body');
const navBtn = getDOMElement('#al-nav-menu')
const sideNav = getDOMElement('.al-side-nav')
const sideNavMenu = getDOMElement('#al-side-nav-content')
const sideNavMenuLinks = document.querySelectorAll('#al-side-nav-content ul li')

function openCloseNav(){
    if (sideNav.offsetWidth == '0') {
        sideNav.style.width = '100%'
        sideNavMenu.style.left = '0'
        body.style.overflow = 'hidden';
    } else {
        sideNav.style.width = '0'
        sideNavMenu.style.left = '-75%'
        body.style.overflow = '';

    }
}
navBtn.addEventListener('click', function(e){
  openCloseNav()
})

sideNav.onclick = function(event) {
    const tagName = 'LI'
    if (event.target != sideNavMenu) {
        openCloseNav()
    }
    if(event.target.tagName == tagName){
        openCloseNav()
    }
}