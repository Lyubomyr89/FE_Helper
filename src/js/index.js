import * as $ from 'jquery';
import mobileNav from './modules/mobile-nav.js';
import tabs from './modules/tabs.js';
tabs();

const openModalBtn = $('.open-modal');
const closeModalBtn = $('.close-modal');

if (openModalBtn[0]) {
    openModalBtn.on('click', openModal);
} else {
    console.log('No elements')
}

function openModal() {
    const currentEl = $(this).data("target");
    const currentModal = $('[data-modal="' + currentEl + '"]');

    if (!currentModal[0]) return;

    currentModal.addClass('active');
}

if (closeModalBtn[0]) {
    closeModalBtn.on('click', closeModal);
} else {
    console.log('No close element')
}

function closeModal() {
    const currentModal = $(this).closest('.modal-overlay');

    if (!currentModal[0]) return;

    currentModal.removeClass('active');
}