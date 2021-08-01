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
    autoHeight: true,

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
    menuButton.toggleClass('menu-button--active');
  });

  // modal window
  var modalButton = $("[data-toogle=modal]");
  var closeModalButton = $(".modal__close");
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");

  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
    disabledScroll();
  }

  function closeModal(event) {
    event.preventDefault();
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
    enableScroll();
  }

  $(".card__button").each(function () {
    $(this).on('click', openModal);
  })


  // scroll lock

  function disabledScroll() {
    var widthScroll = window.innerWidth - document.body.offsetWidth;
    document.body.dbScrollY = window.scrollY;

    document.body.style.cssText = `
      position: fixed;
      top: ${-window.scrollY}px;
      left: 0;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      padding-right: ${widthScroll}px;
    `;
  }

  function enableScroll() {
    document.body.style.cssText = '';
    window.scroll({
      top: document.body.dbScrollY,
    });
  }

  // validate form
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Enter your name.",
          minlength: "Your name must consist of at least 2 characters",
        },
        email: {
          required: "Enter your email",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Enter your phone",
          minlength: "Please specify a valid phone number"
        },
      }
    });
  });

  // mask phone
  $('#footer-phone').mask('+7 (999) 999-99-99');
  $('#modal-phone').mask('+7 (999) 999-99-99');

  AOS.init();

  $("input[name=name]").each(function () {
    $(this).bind('blur focus', function () {
      if (!/^[a-z]+$/i.test(this.value)) {
        // this.value = '';
        $(this).removeClass("valid");
        $(this).addClass("invalid");
        $("#name-error").css('display', 'block');
        $("#name-error").text("English letters only");
      } else {
        this.value = this.value;
      }
    });
  });

  $.validator.methods.email = function (value, element) {
    return this.optional(element) || /[a-z]+@[a-z]+\.[a-z]{2,4}/.test(value);
  };

  $(".newsletter__subscribe").validate({
    errorClass: "invalid",
    rules: {
      required: true,
      email: true
    }
  });

  $(".subscribe__input").bind('blur input', function () {

    if (!/[a-z]+@[a-z]+\.[a-z]{2,4}/.test(this.value)) {
      $(this).addClass("invalid");
      $(".subscribe-error").addClass("invalid");
      $(".subscribe-error").css('display', 'block');
      $(".subscribe-error").text("Your email address must be in the format of name@domain.com");
    } else {
      $(this).removeClass("invalid");
      $(".subscribe-error").removeClass("invalid");
      $(".subscribe-error").css('display', 'none');
      $(".subscribe-error").text('');
      this.value = this.value
    }
  })
});


