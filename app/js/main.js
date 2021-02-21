$(function () {

  $('.product__slider').slick({
    nextArrow: '<button type = "button" class = "slick-next"><svg width = "10" height = "18" viewBox = "0 0 10 18" fill = "none" xmlns = "http://www.w3.org/2000/svg"><path d = "M0.78161 17L9 9L0.78161 1"stroke = "black"/></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d = "M9.21839 1L1 9L9.21839 17"stroke = "#000"/></svg></button>',
    infinite: false,
  });

  $('.info__caption').on('click', function () {
    $('.info__item').removeClass('info__item--active');
    $(this).parent().addClass('info__item--active');
  });


  $('#fullpage').fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
    scrollOverflow: true,
    lazyLoading: true,
    sectionSelector: '.section-page',
    anchors: ['top', 'product', 'benefit', 'skills', 'info', 'contacts'],
    menu: '#header__nav'
  });



});

const anchors = querySelector('.scroll-btn')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault();
    const blockId = anchor.getAttribute('href');
    document.querySelector('' + blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}