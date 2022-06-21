//////////open nav-list

const navBtn = document.querySelector('.main-nav__button');
const navToggle = document.querySelector('.main-nav__toggle');
const navList = document.querySelector('.site-list');

navBtn.addEventListener('click', function(){
    if(navToggle.classList.contains('main-nav__toggle_open')){
        navToggle.classList.remove('main-nav__toggle_open')
        navList.classList.remove('site-list_open')
    } else {
        navToggle.classList.add('main-nav__toggle_open')
        navList.classList.add('site-list_open')
    }
})

///////// close nav-list

const closeLink = document.querySelectorAll('.site-list__item');
const closeOverlay = document.querySelector('.page-header__contacts-row');
const closeOverLay = document.querySelector('.page-main');

function closeList(){
    if(navToggle.classList.contains('main-nav__toggle_open')){
        navToggle.classList.remove('main-nav__toggle_open')
        navList.classList.remove('site-list_open')
}
}

closeLink.forEach(elem => 
    elem.addEventListener('click', closeList
    ))

    closeOverlay.addEventListener('click', closeList
    )
    closeOverLay.addEventListener('click', closeList
    )