window.addEventListener('DOMContentLoaded', function () {

  'use strict';

  // slider

  const hotelSlider = new Swiper('.hotel-slider', {
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

  const reviewsSlider = new Swiper('.reviews-slider', {
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

  const menuButton = document.querySelector('.menu-button');

  menuButton.addEventListener('click', () => {
    const toggleMenu = document.querySelector('.navbar-bottom');
    toggleMenu.classList.toggle('navbar-bottom--visible');
  });

  // modal block

  const toggleModal = () => {
    const modalOverlay = document.querySelector('.modal__overlay');
    const modalDialog = document.querySelector('.modal__dialog');
    const modalButton = document.querySelector('.booking__button');
    const closeModalButton = document.querySelector('.modal__close');

    const handlerModal = () => {
      modalOverlay.classList.toggle('modal__overlay--visible');
      modalDialog.classList.toggle('modal__dialog--visible');
    };

    modalButton.addEventListener('click', () => {
      handlerModal();
    });

    closeModalButton.addEventListener('click', (event) => {
      event.preventDefault();
      handlerModal();
    });

  };

  toggleModal();
});