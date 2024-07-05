import axios from 'axios'

const BOOKS_URL = import.meta.env.VITE_BOOKS_URL;

export const getAllBooks = async() => {
    const {status, data} = await axios.get(BOOKS_URL)
    if(status !== 200) throw new Error('Could not get new books')
    return data
}