console.log('Jay Shree Ram');

const accordian = document.querySelectorAll('.accordian')
const expandFAQs = document.querySelectorAll('.show');
const shrinkFAQs = document.querySelectorAll('.minus');
const answers = document.querySelector('.answer');

console.log(accordian);

accordian.forEach(currAccordian => {
  currAccordian.addEventListener('click', () => {
    accordian.forEach(otherAccordian => {
      otherAccordian.classList.remove('active');
    });
    currAccordian.classList.add('active');
  });
});


// --------------- For Carousel ------------------

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: { 
    200: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    700: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    1025: {
        slidesPerView: 3,
        spaceBetween: 50,
    },
},
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 3,
  spaceBetween: 70,
  breakpoints: { 
    641: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
},
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 70,
  breakpoints: { 
    641: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
},
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
});



//   For Nav 1 Hamburger
const na1Ham = document.querySelector('.nav1Ham');
const nav1menu = document.querySelector('#navInfoContainer');

// For  Nav 1 Hamburger
const nav2Ham = document.querySelector('.nav2Hamburger');
const nav2menu = document.querySelector('.navItems');
const nav2 = document.querySelector('#nav2')


const toggleNavs = (elem1, elem2, className) => {
  elem1.addEventListener('click', () => {
    elem2.classList.toggle(className)

    console.log(elem1, elem2, className);
  })
}

toggleNavs(na1Ham, nav1menu, 'downNav1');
toggleNavs(nav2Ham, nav2menu, 'showNav2');
toggleNavs(nav2Ham, nav2, 'showNav2');

// na1Ham.addEventListener('click', () => {
//   nav1menu.classList.toggle('downNav1')
// })