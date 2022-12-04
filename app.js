/* thumbnails interaction */
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImg = document.querySelector('.main-img');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', e => {
    thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));
    mainImg.attributes.src.value = e.target.attributes.src.value;
    thumbnail.classList.add('active');
  });
});

/* Cart interaction */
const addBtn = document.querySelector('#add-btn');
const cartBtn = document.querySelector('#cart-btn');

addBtn.addEventListener('click', () => {
  cartBtn.classList.add('new-item');
});

/* color interaction */
const colors = document.querySelectorAll('.color');

colors.forEach(color => {
  color.addEventListener('click', e => {
    colors.forEach(color => color.classList.remove('selected-color'));
    e.target.classList.add('selected-color');
  });
});

/* Mobile menu overflow */
const mobileCheck = document.querySelector('#mobile-menu');

mobileCheck.addEventListener('change', () =>
  document.body.classList.toggle('overflow-hidden')
);
