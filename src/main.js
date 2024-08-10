import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import searchImagesByUserQuery from './js/pixabay-api.js';
import {
  renderImages,
  cleanGallery,
  showError,
} from './js/render-functions.js';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const loader = document.querySelector('#loader');

//const list = document.querySelector('#gallery');
const loadMoreBtn = document.querySelector('.load-more-btn');
//loadMoreBtn.addEventListener('click', loadMoreHandler);

let page = 1;
let perPage = 15;
let searchQuery = '';

form.addEventListener('submit', async event => {
  event.preventDefault();
  page = 1;
  searchQuery = input.value.trim();

  cleanGallery();

  loadMoreBtn.classList.add('hidden');
  await performSearch();
});

loadMoreBtn.addEventListener('click', () => {
  page++;
  performSearch();
});

async function performSearch() {
  loader.classList.remove('hidden');

  if (searchQuery === '') {
    showError('Please enter a search query.');
    loader.classList.add('hidden');
    return;
  }

  try {
    const data = await searchImagesByUserQuery(searchQuery, page, perPage);
    if (data.total === 0) {
      showError(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    } else {
      if (page > 1) {
        const galleryHeightB = document
          .querySelector('.list')
          .getBoundingClientRect().height;
        renderImages(data);
        const galleryHeightA = document
          .querySelector('.list')
          .getBoundingClientRect().height;
        console.log(document.querySelector('.list').getBoundingClientRect());
        window.scrollBy({
          top: (galleryHeightA - galleryHeightB) * 0.6,
          behavior: 'smooth',
        });
      } else {
        renderImages(data);
      }
      if (data.hits.length < perPage) {
        loadMoreBtn.classList.add('hidden');
        return iziToast.info({
          position: 'topRight',
          message: "We're sorry, but you've reached the end of search results.",
        });
      } else {
        if (data.totalHits > page * perPage) {
          loadMoreBtn.classList.remove('hidden');
        } else {
          loadMoreBtn.classList.add('hidden');
          return iziToast.info({
            position: 'topRight',
            message:
              "We're sorry, but you've reached the end of search results.",
          });
        }
      }
    }
  } catch (error) {
    showError(error.message);
  } finally {
    loader.classList.add('hidden');
    input.value = '';
  }
}
