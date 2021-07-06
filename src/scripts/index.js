import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

document.querySelectorAll('.modal-trigger').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.body.classList.add('overflow-hidden');
    document.querySelector('.overlay').classList.remove('hidden');
    document.querySelector('.overlay').classList.add('flex');
  });
});

document.querySelector('.submit-form').addEventListener('submit', (e) => {
  e.preventDefault();
  let form = document.querySelector('.submit-form');
  if (form.checkValidity()) {
    let name = document.querySelector('#name').value;
    let phone = document.querySelector('#phone').value;
    let date = document.querySelector('#date').value;
    let message = document.querySelector('#message').value;

    let data = { name: name, phone: phone, date: date, message: message };

    fetch('/', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    document.querySelector('.form-inner').classList.add('invisible');
    document.querySelector('.form-thanks').classList.remove('hidden');
  }
});

document.querySelectorAll('.close-modal').forEach((el) => {
  el.addEventListener('click', () => {
    document.querySelector('.overlay').classList.replace('flex', 'hidden');
    document.querySelector('.form-inner').classList.remove('invisible');
    document.querySelector('.form-thanks').classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  });
});

import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay } from 'swiper/core';

SwiperCore.use(Autoplay);

const swiper = new Swiper('.swiper-container', {
  speed: 400,
  spaceBetween: 20,
  autoHeight: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  loop: true,
});
