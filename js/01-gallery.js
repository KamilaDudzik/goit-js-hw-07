import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

galleryItems.innerHTML = '';
for (const galleryItem of galleryItems) {

    const newItem = `
    
    <li class="gallery__item"><a class="gallery__link" href="${galleryItem.original}">

    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
      />
      </a>
      </li>`
    
    gallery.innerHTML += newItem;
};

gallery.addEventListener("click", (event) => {
    event.preventDefault();
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" />`)
    instance.show();
    window.addEventListener("keydown", (eventKey) => {
        if (eventKey.key === "Escape") {
            instance.close();
        }
    })
})

console.log(galleryItems);


