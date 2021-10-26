import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line
const galleryContainer = document.querySelector('.gallery');

const galleryItemsCollection = galleryItems.map(({preview, original, description}) =>
`<a class="gallery__item" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
).join('');

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsCollection);

const lightbox = new SimpleLightbox('.gallery__item', {captionDelay: 250, captionsData: 'alt', heightRatio: 0.9});

console.log(galleryItems);
