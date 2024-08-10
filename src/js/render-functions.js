import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function renderImages(data) {
  const galleryList = document.querySelector('.list');
  const lightbox = new SimpleLightbox('.card a', {
    inlineStyles: false,
    captionsData: 'alt',
    captionDelay: 250,
    disableScroll: true,
  });

  const markup = data.hits
    .map(
      hit => `
    <li class="card">
      <a class="card-link" href="${hit.largeImageURL}">
        <img class="card-image" src="${hit.webformatURL}" alt="${hit.tags}" />
      </a>
      <div class="info-text">
        <ul class="card-list">
          <li class="card-list-li">
            <h3>likes</h3>
            <p>${hit.likes}</p>
          </li>
          <li class="card-list-li">
            <h3>views</h3>
            <p>${hit.views}</p>
          </li>
          <li class="card-list-li">
            <h3>comments</h3>
            <p>${hit.comments}</p>
          </li>
          <li class="card-list-li">
            <h3>downloads</h3>
            <p>${hit.downloads}</p>
          </li>
        </ul>
      </div>
    </li>
  `
    )
    .join('');
  galleryList.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function showError(error) {
  iziToast.error({
    title: '❌',
    messageColor: 'white',
    backgroundColor: '#E25757',
    position: 'topRight',
    message: `${error}`,
  });
}

export function cleanGallery() {
  const list = document.querySelector('.list');
  list.innerHTML = '';
}
