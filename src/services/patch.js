import axios from 'axios';

const BOOKS_URL = import.meta.env.VITE_BOOKS_URL;

export const patchBook = async (id, reviews) => {
  const response = await axios.patch(`${BOOKS_URL}/${id}`, {reviews});
  if(response.status !== 200) throw new Error('Could not send patch request')
  return response.status
};
