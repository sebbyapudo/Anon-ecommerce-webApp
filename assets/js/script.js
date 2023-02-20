'use strict';

// Modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// Modal function
const modalCloseFunc = function () {modal.classList.add('closed')}

// Modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);

// Notification toats variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// Notification toast event listener
toastCloseBtn.addEventListener("click", function () {
    notificationToast.classList.add('closed');
})