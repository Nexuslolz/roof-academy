const featBtn = document.querySelector('.features__btn');
const featBlock = document.querySelector('.features');
// const navBtn = document.querySelector('.main-nav__button');

navBtn.addEventListener('click', function () {
    if (featBtn.classList.contains('features__btn_active')) {
        featBtn.classList.remove('features__btn_active')
        featBlock.classList.remove('features_active')
    }
})

featBtn.addEventListener('click', function () {
    if (featBtn.classList.contains('features__btn_active')) {
        featBtn.classList.remove('features__btn_active')
        featBlock.classList.remove('features_active')
    } else {
        featBtn.classList.add('features__btn_active')
        featBlock.classList.add('features_active')
    }
})
