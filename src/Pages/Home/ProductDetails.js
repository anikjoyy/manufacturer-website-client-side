import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import PageTitle from '../Shared/PageTitle';

const ProductDetails = () => {
  const { id } = useParams();
  const [product] = useProductDetails(id);
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className='flex flex-col w-full lg:flex-row'>
      <PageTitle title='Details'></PageTitle>
      <div className='card lg:card-side bg-base-100 shadow-xl my-5 ms-5'>
        <figure>
          <img style={{ height: '450px' }} src={product.img} alt='Album' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>Name: {product.name}</h2>
          <div className='card-body'>
            <p>Description: {product.shortDescription}</p>
            <p>Minimum Order Quantity: {product.minOrderQuantity}</p>
            <p>Available Quantity: {product.availableQuantity}</p>
            <p>Price: {product.price}$ per unit</p>
            <p>Supplier Name: {product.supplierName}</p>
          </div>
        </div>
      </div>
      <div className='divider lg:divider-horizontal'>OR</div>

      <div className=' mx-auto justify-center items-center mt-3'>
        <h2 className='text-center text-primary font-bold text-3xl mt-2'>
          Place Order
        </h2>
        <form className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
          <input
            type='text'
            name='name'
            disabled
            value={user?.displayName || ''}
            className='input input-bordered w-full max-w-xs'
          />

          <input
            type='email'
            name='email'
            disabled
            value={user?.email || ''}
            className='input input-bordered w-full max-w-xs'
          />

          <input
            type='number'
            name='number'
            placeholder='Quantity'
            className='input input-bordered w-full max-w-xs'
          />

          <input
            type='text'
            name='phone'
            placeholder='Phone Number'
            className='input input-bordered w-full max-w-xs'
          />

          <textarea
            className=' form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded'
            rows='3'
            placeholder='Your Address '
          ></textarea>

          <input
            type='submit'
            value='Purchase'
            className='btn btn-primary w-full max-w-xs'
          />
        </form>
      </div>
    </div>
  );
};

export default ProductDetails;
