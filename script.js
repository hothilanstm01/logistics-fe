const menuBtn = document.querySelector('#menu-btn')
const navLinks = document.querySelector('#nav-links')
const menuBtnIcon = menuBtn.querySelector('i')
function toggleLanguage () {
    var language = document.querySelector('.language');
    language.classList.toggle('active');
}

function changeLanguage (lang) {
    var language = document.querySelector('.language .text');
    language.textContent = lang.toUpperCase();
    toggleLanguage();
}



menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open')
    const isOpen =  navLinks.classList.contains('open')
    menuBtnIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line')
})

const backgroundImage = document.querySelector('.banner__container');
const slideTitle = document.getElementById('slide-title');
const slideDescription = document.getElementById('slide-description');

const swiperBanner = new Swiper('.swiper__banner', {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    initialSlide: 0,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      on: {
        slideChange() {
            const slide = this.slides[this.activeIndex];
            changeSlide(slide);
            
            
        },
        
      },
      breakpoints: {
        100: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 3,
        }, 
        
    }
})


function changeSlide(slide) {
    const newBg = slide.querySelector('img').getAttribute('data-bg');
    backgroundImage.style.backgroundImage = `url(${newBg})`;

    const newTitle = slide.getAttribute('data-title');
    const newDescription = slide.getAttribute('data-description');
    slideTitle.textContent = newTitle;
    slideDescription.textContent = newDescription;
}

const backgroundService = document.querySelector('.section__services');
const slideTitleService = document.getElementById('service-title');
const swiperService = new Swiper('.swiper__service', {
    loop: true,
    navigation: {
        nextEl: ".btn__next",
      },

      on: {
        slideChange() {
            const slide = this.slides[this.activeIndex];
            changeSlideService(slide);
        },
        
      },
})

function changeSlideService(slide) {
    const newBg = slide.querySelector('img').getAttribute('data-bg');
    backgroundService.style.backgroundImage = `url(${newBg})`;

    const newTitle = slide.getAttribute('data-title');
    slideTitleService.textContent = newTitle;
}


const partnerScroll = document.querySelectorAll('.partner__logos')
if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    aadAnimation()
}

function aadAnimation() {
    partnerScroll.forEach(partner => {
        partner.setAttribute('data-animated', true)

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    })
}




