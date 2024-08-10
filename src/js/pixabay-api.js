import axios from 'axios';
const API_KEY = '45094869-2592a7d622688fe6b4ce663f6';

export default async function searchImagesByUserQuery(
  searchQuery,
  page = 1,
  perPage = 15
) {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: perPage,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : error.message);
  }
}
