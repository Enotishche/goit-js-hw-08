
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line


// Change code below this line

console.log(galleryItems);

const imageGallery = document.querySelector(".gallery");

    const galleryList = galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`;
    }).join(" ");
    imageGallery.insertAdjacentHTML("beforeend", galleryList);

    const gallery = new SimpleLightbox(".gallery__item", {
        captionSelector: "img",
        captionsData: "alt",
        captionsPosition: "bottom",
        captionDelay: 250,
    });