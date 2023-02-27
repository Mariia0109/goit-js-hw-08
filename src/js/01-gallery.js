// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';


// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector(".gallery");
const imgCardMake = createImgCard(galleryItems);

function createImgCard(galleryItems) {
return galleryItems.map(({preview, original, description}) => {
    return `<div class="gallery__item">
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    </div>`})
    .join("");
};

    galleryEl.insertAdjacentHTML("afterBegin", imgCardMake);
    galleryEl.addEventListener("click", clickModal);
    
    function clickModal(evt) {
        evt.preventDefault();
        if (!evt.target.dataset.source) {
            return;
        };
        console.log(evt.target);
    };

    
    new SimpleLightbox('.gallery a', {
        captionDelay: 250,
        captionsData: 'alt',
    });