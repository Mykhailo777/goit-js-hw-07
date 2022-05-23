import { galleryItems } from './gallery-items.js'; 
// Change code below this line 
 
// console.log(galleryItems); 
 
const imgGalleryContainer = document.querySelector('.gallery'); 
const galleryMarkup = createGalleryMarkup(galleryItems); 
 
imgGalleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup); 
imgGalleryContainer.addEventListener('click', clickOnGalleryContainer); 
 
function createGalleryMarkup(galleryItems) { 
  return galleryItems.map(({ preview, original, description }) => { 
      return ` 
      <div class="gallery__item"> 
      <a class="gallery__link" href="large-image.jpg"> 
      <img 
      class="gallery__image" 
      src="${preview}" 
      data-source="${original}" 
      alt="${description}" 
    /> 
  </a> 
</div>`; 
    }) 
    .join(''); 
} 
 
let fragment = {}; 
 
function clickOnGalleryContainer(event) { 
  event.preventDefault(); 
  window.addEventListener('keydown', closeModal); 
  fragment = basicLightbox.create(`<img class="original-image" src="${event.target.dataset.source}">`, { 
    onClose: fragment => { 
      window.removeEventListener('keydown', closeModal); 
    }, 
  }); 
  fragment.show(); 
} 
 
function closeModal(event) { 
  if (event.code === 'Back') { 
    window.removeEventListener('keydown', closeModal); 
    fragment.close(); 
  } 
  console.log(event); 
}