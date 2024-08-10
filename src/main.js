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

const loadMoreBtn = document.querySelector('.load-more-btn');

let page = 1;
let perPage = 15;
let searchQuery = '';

form.addEventListener('submit', async event => {
  event.preventDefault();

  cleanGallery();
  loader.classList.remove('hidden');
  searchQuery = input.value.trim();
  page = 1;
  loadMoreBtn.classList.add('hidden');
  await performSearch();
});

loadMoreBtn.addEventListener('click', async () => {
  page++;
  await performSearch();
});

async function performSearch() {
  loader.classList.add('hidden');
  if (searchQuery === '') {
    showError('Please enter a search query.');

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
        renderImages(data);
        const galleryHeight = document
          .querySelector('.list')
          .getBoundingClientRect().height;

        window.scrollBy({
          top: galleryHeight * 2,
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
    loader.classList.add('hidden');
  } finally {
    input.value = '';
  }
}
