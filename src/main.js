import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { searchImagesByUserQuery } from './js/pixabay-api.js';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const list = document.querySelector('#gallery');
const loadMoreBtn = document.querySelector('.load-more-btn');

loadMoreBtn.style.display = 'none';
list.innerHTML = '';
