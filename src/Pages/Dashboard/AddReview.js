import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const review = {
      review: data.review,
      ratings: data.ratings,
    };
    const url = 'http://localhost:5000/review';
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((inserted) => {
        if (inserted.insertedId) {
          toast.success('Product added successfully');
          reset();
        } else {
          toast.error('Failed to add the product');
        }
      });
  };
  return (
    <div>
      <h2 className='text-2xl text-center mt-4 text-secondary font-bold'>
        Give your Review
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='card w-full max-w-sm shadow-xl bg-base-200 mx-auto justify-center items-center my-3'
      >
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Review</span>
          </label>
          <input
            type='text'
            placeholder='review'
            className='input input-bordered w-full max-w-xs'
            {...register('review', {
              required: {
                value: true,
                message: 'Review is Required',
              },
            })}
          />
          <label className='label'>
            {errors.review?.type === 'required' && (
              <span className='label-text-alt text-red-500'>
                {errors.review.message}
              </span>
            )}
          </label>
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Ratings</span>
          </label>
          <input
            type='number'
            placeholder='your ratings'
            className='input input-bordered w-full max-w-xs'
            {...register('ratings', {
              required: {
                value: true,
                maxLength: 5,
                message: 'Review is Required and cant be greater than 5',
              },
            })}
          />
          <label className='label'>
            {errors.ratings?.type === 'required' && (
              <span className='label-text-alt text-red-500'>
                {errors.ratings.message}
              </span>
            )}
          </label>
        </div>

        <input
          className='btn btn-primary w-full max-w-xs text-white mb-2'
          type='submit'
          value='Add'
        />
      </form>
    </div>
  );
};

export default AddReview;
