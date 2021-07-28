$(document).ready(function () {

  // slider
  var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  // menu
  var menuButton = $('.menu-button');
  menuButton.on('click', function () {
    $('.navbar-bottom').toggleClass('navbar-bottom--visible');
  });

  // modal block
  var modalButton = $("[data-toogle=modal]");
  var closeModalButton = $(".modal__close");
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");

  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }

  function closeModal(event) {
    event.preventDefault();
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }

  // validate form
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Enter your name",
          minlength: "The name must be at least 2 letters long",
        },
        email: {
          required: "Enter your email",
          email: "Your email address must be in the format of name@domain.com"
        },
        phone: {
          required: "Enter your phone",
        },
      }
    });
  });

  // mask phone
  $('#footer-phone').mask('+7 (999) 999-99-99');
  $('#modal-phone').mask('+7 (999) 999-99-99');

  AOS.init();

});


