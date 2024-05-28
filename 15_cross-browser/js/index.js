// swiper
const swiper = new Swiper('.section-decision__container_swiper', {
    loop: true,
    speed: 800,
    pagination: {
        el: '.swiper-pagination',
        clickable: 'boolean'
    },
    a11y: {
        paginationBulletMessage: 'Перейти на следующий слайд {{index}}'
    }
});

window.addEventListener('DOMContentLoaded', function() {
    //search
    document.querySelector('.header__search__btn').addEventListener('click', function() {
        document.querySelector('.header__search__form-container').classList.toggle('header__form--active')
    });
    document.querySelector('.header__closed__btn').addEventListener('click', function() {
        document.querySelector('.header__search__form-container').classList.remove('header__form--active')
    });

    //burger
    document.querySelector('.header__burger').addEventListener('click', function() {
        document.querySelector('.header__container-burger-wrapper').classList.toggle('header__burger--active')
    });
    document.querySelector('.header__burger_closed_btn').addEventListener('click', function() {
        document.querySelector('.header__container-burger-wrapper').classList.remove('header__burger--active')
    });


    //tabs
    document.querySelectorAll('.section-steps__link-into').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.section-steps__container__main').forEach(function(tabsContent) {
                tabsContent.classList.remove('section-steps__container__main--active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('section-steps__container__main--active')
        })
    })
})