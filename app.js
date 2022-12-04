const addBtn = document.querySelector('#add-btn');
const cartBtn = document.querySelector('#cart-btn');

addBtn.addEventListener('click', () => {
  cartBtn.classList.add('new-item');
});

const thumbnails = document.querySelectorAll('.thumbnail');
const mainImg = document.querySelector('.main-img');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', e => {
    thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));
    mainImg.attributes.src.value = e.target.attributes.src.value;
    thumbnail.classList.add('active');
  });
});
