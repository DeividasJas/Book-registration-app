import { getAllBooks } from '../services/get';
import { patchBook } from '../services/patch';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Toaster, toast } from 'sonner';
const BOOKS_URL = import.meta.env.VITE_BOOKS_URL;

function BooksReviews() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const [booksData, setBooksData] = useState([]);
  const [status, setStatus] = useState(false);

  const handleReview = async (data) => {
    try {
      const { book: id, name, review } = data;
      const { data: book } = await axios.get(`${BOOKS_URL}/${id}`);
      const allReviews = [...book.reviews, { name: name, review: review }];
      const answer = await patchBook(id, allReviews);
      if (answer === 200) {
        toast.success('Review is posted');
      } else {
        toast.error('Review was not posted')
      }
      // reset();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllBooks();
      setBooksData(data);
    };

    fetchData();
  }, [handleReview]);

  return (
    <>
      <div>
        <Toaster richColors/>
        <form noValidate onSubmit={handleSubmit(handleReview)}>
          <div>
            <input
              id='name'
              type='text'
              placeholder='Name'
              className='input input-bordered w-full max-w-xs'
              {...register('name', { required: 'Name is required' })}
            />
            <div className='error'> {errors.name?.message}</div>
          </div>

          <div>
            <select
              id='book'
              className='select select-bordered w-full max-w-xs'
              r
              {...register('book', {
                required: 'Picking books is required',
              })}
            >
              <option disabled selected></option>
              {booksData.map((book, index) => {
                return (
                  <option key={index} value={book.id}>
                    {book.title}
                  </option>
                );
              })}
            </select>
            <label htmlFor='category' className='text-xs'>
              Category
            </label>
            <div className='error'>{errors.category?.message}</div>
          </div>

          <div>
            <textarea
              className='textarea textarea-error'
              placeholder='Review'
              id='review'
              {...register('review', {
                required: 'Review cannot be empty',
                pattern: { value: /\S/, message: 'Please leave valid review' },
              })}
            ></textarea>
            <div className='error'> {errors.review?.message}</div>
          </div>

          <button className='btn btn-success m-auto mb-4'>Send review</button>
        </form>
      </div>
    </>
  );
}

export default BooksReviews;
