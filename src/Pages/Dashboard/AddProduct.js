import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorageKey = 'c9892aa85b6e645ea1658cd548d36ce0';

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const product = {
            name: data.name,
            description: data.description,
            img: img,
            minQuantity: data.minQuantity,
            avaQuantity: data.avaQuantity,
            price: data.price,
            supName: data.supName,
          };
          // send to your database
          fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(product),
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
        }
      });
  };

  return (
    <div>
      <h2 className='text-2xl text-center mt-4 text-secondary font-bold'>
        Add a Product
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='card w-full max-w-sm shadow-xl bg-base-200 mx-auto justify-center items-center my-3'
      >
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Product Name</span>
          </label>
          <input
            type='text'
            placeholder='product Name'
            className='input input-bordered w-full max-w-xs'
            {...register('name', {
              required: {
                value: true,
                message: 'Name is Required',
              },
            })}
          />
          <label className='label'>
            {errors.name?.type === 'required' && (
              <span className='label-text-alt text-red-500'>
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Short Description</span>
          </label>
          <input
            type='text'
            placeholder='description'
            className='input input-bordered w-full max-w-xs'
            {...register('description', {
              required: {
                value: true,
                message: 'Description is Required',
              },
            })}
          />
          <label className='label'>
            {errors.description?.type === 'required' && (
              <span className='label-text-alt text-red-500'>
                {errors.description.message}
              </span>
            )}
          </label>
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Product Image</span>
          </label>
          <input
            type='file'
            className='input input-bordered w-full max-w-xs'
            {...register('image', {
              required: {
                value: true,
                message: 'Image is Required',
              },
            })}
          />
          <label className='label'>
            {errors.name?.type === 'required' && (
              <span className='label-text-alt text-red-500'>
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Minimum Quantity</span>
          </label>
          <input
            type='number'
            placeholder='minimum quantity'
            className='input input-bordered w-full max-w-xs'
            {...register('minQuantity', {
              required: {
                value: true,
                message: 'Quantity is Required',
              },
            })}
          />
          <label className='label'>
            {errors.minQuantity?.type === 'required' && (
              <span className='label-text-alt text-red-500'>
                {errors.minQuantity.message}
              </span>
            )}
          </label>
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Available Quantity</span>
          </label>
          <input
            type='number'
            placeholder='available quantity'
            className='input input-bordered w-full max-w-xs'
            {...register('avaQuantity', {
              required: {
                value: true,
                message: 'Quantity is Required',
              },
            })}
          />
          <label className='label'>
            {errors.avaQuantity?.type === 'required' && (
              <span className='label-text-alt text-red-500'>
                {errors.avaQuantity.message}
              </span>
            )}
          </label>
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Price</span>
          </label>
          <input
            type='number'
            placeholder='price'
            className='input input-bordered w-full max-w-xs'
            {...register('price', {
              required: {
                value: true,
                message: 'Price is Required',
              },
            })}
          />
          <label className='label'>
            {errors.price?.type === 'required' && (
              <span className='label-text-alt text-red-500'>
                {errors.price.message}
              </span>
            )}
          </label>
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Supplier Name</span>
          </label>
          <input
            type='text'
            placeholder='supplier Name'
            className='input input-bordered w-full max-w-xs'
            {...register('supName', {
              required: {
                value: true,
                message: 'Supplier Name is Required',
              },
            })}
          />
          <label className='label'>
            {errors.supName?.type === 'required' && (
              <span className='label-text-alt text-red-500'>
                {errors.supName.message}
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

export default AddProduct;
