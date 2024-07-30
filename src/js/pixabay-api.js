import axios from 'axios';

export async function searchImagesByUserQuery(searchQuery) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '45094869-2592a7d622688fe6b4ce663f6',
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
}
