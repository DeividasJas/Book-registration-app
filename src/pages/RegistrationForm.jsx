import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import axios from 'axios';
import { books } from '../../json_server/data_json.json';
import { uploadBook } from '../services/post';

function RegistrationForm() {
  const booksCategoryList = [];
  books.forEach((book) => {
    booksCategoryList.push(book.category);
  });
  const filterCategory = [...new Set(booksCategoryList)];

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    uploadBook(data);
  };

  return (
    <>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className='border rounded-md flex flex-col'
      >
        <div className='grid grid-cols-2 gap-5 p-4 mx-2 mt-2 items-start'>
          <div>
            {/* <label htmlFor="title"></label> */}
            <input
              id='title'
              type='text'
              placeholder='Title'
              className='input input-bordered w-full max-w-xs'
              {...register('title', { required: 'title is required' })}
            />
            <div className='error'> {errors.title?.message}</div>
          </div>

          <div>
            <input
              id='author'
              type='text'
              placeholder='Author'
              className='input input-bordered w-full max-w-xs'
              {...register('author', { required: 'Author is required' })}
            />
            <div className='error'>{errors.author?.message}</div>
          </div>

          <div>
            <select
              id='category'
              className='select select-bordered w-full max-w-xs'
              {...register('category', {
                  required: 'Picking category is required',
                })}
            >
              <option disabled selected></option>
              {filterCategory.map((cat, index) => {
                return (
                  <option key={index} value={cat}>
                    {cat}
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
            <input
              id='price'
              type='text'
              placeholder='Price'
              className='input input-bordered w-full max-w-xs self-baseline	'
              {...register('price', {required: 'Setting price is required',pattern: {
                value: /^\d+(\.\d{1,2})?$/,
                message: 'This price is not valid'
              }},)}
            />
            <div className='error'>{errors.price?.message}</div>
          </div>

          <div>
            <input
              id='cover'
              type='text'
              placeholder='Image Source'
              className='input input-bordered w-full max-w-xs'
              {...register('cover', {
                required: 'Image sources is required',
              })}
            />
            <div className='error'>{errors.cover?.message}</div>
          </div>
        </div>
        <button className='btn btn-success m-auto mb-4'>Upload</button>
      </form>
    </>
  );
}

export default RegistrationForm;
