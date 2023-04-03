import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

galleryItems.innerHTML = '';
for (const galleryItem of galleryItems) {

    const newItem = `<a class="gallery__link" href="${galleryItem.original}">

    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
      />
      </a>`
    
    gallery.innerHTML += newItem;
};

console.log(galleryItems);
