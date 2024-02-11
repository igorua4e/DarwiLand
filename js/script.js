'use strict';
//підключення бургера//

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__body-menu');
const body = document.body;
burger.addEventListener('click', function () {
   burger.classList.toggle('active');
   menu.classList.toggle('active');
   body.classList.toggle('lock');
});


const coock = document.querySelector('.coock');
const okBtn = document.querySelector('.ok');
const closeBtn = document.querySelector('.close-btn');

okBtn.addEventListener('click', function () {
   coock.classList.add('close');
});

closeBtn.addEventListener('click', function () {
   coock.classList.add('close');
});








