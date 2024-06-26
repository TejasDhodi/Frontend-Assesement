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
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    spaceBetween: 70,
    pagination: {
      el: ".swiper-pagination1",
      clickable: true,
    },
  });

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 70,
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
  });



//   For Nav 1 Hamburger
const na1Ham = document.querySelector('.nav1Ham');
const nav1menu = document.querySelector('#navInfoContainer');

na1Ham.addEventListener('click', () => {
    nav1menu.classList.toggle('downNav1')
})