import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import PageTitle from '../Shared/PageTitle';
import { toast } from 'react-toastify';

const ProductDetails = () => {
  const { id } = useParams();
  const [product] = useProductDetails(id);
  const [disable, setDisable] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleOrder = (event) => {
    event.preventDefault();

    const productName = product.name;
    const email = user.email;
    const userName = user.displayName;
    const quantity = event.target.quantity.value;
    const phone = event.target.phone.value;
    const address = event.target.address.value;

    if (
      quantity < product.minOrderQuantity ||
      quantity > product.availableQuantity
    ) {
      setDisable(true);
      toast.error(
        `Minimum order ${product.minOrderQuantity} & Maximum order ${product.availableQuantity}`
      );
      return;
    }

    const price = quantity * product.price;
    const order = {
      productName,
      email,
      userName,
      quantity,
      phone,
      address,
      price,
    };

    fetch('http://localhost:5000/order', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success('Order success. Please check My orders for pay');
          event.target.reset();
        }
      });
  };
  const navigateToOrder = () => {
    navigate('/dashboard');
  };

  return (
    <div className='flex flex-col w-full lg:flex-row bg-base-200'>
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

      <div className='card w-full max-w-sm shadow-xl bg-base-100 mx-auto justify-center items-center my-3'>
        <h2 className='text-center text-primary font-bold text-3xl mt-2'>
          Place Order
        </h2>
        <form
          onSubmit={handleOrder}
          className='grid grid-cols-1 gap-3 justify-items-center mt-2'
        >
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Name</span>
            </label>
            <input
              type='text'
              name='name'
              disabled
              value={user?.displayName || ''}
              className='input input-bordered w-full max-w-xs'
            />
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='email'
              name='email'
              disabled
              value={user?.email || ''}
              className='input input-bordered w-full max-w-xs'
            />
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Quantity</span>
            </label>
            <input
              type='number'
              name='quantity'
              placeholder='Quantity'
              className='input input-bordered w-full max-w-xs'
            />
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Phone Number</span>
            </label>
            <input
              type='text'
              name='phone'
              placeholder='Phone Number'
              className='input input-bordered w-full max-w-xs'
            />
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Your Address</span>
            </label>
            <textarea
              name='address'
              className=' form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded'
              rows='3'
              placeholder='Your Address '
            ></textarea>
          </div>

          <div className='form-control'>
            <button
              disabled={disable}
              className='btn btn-primary w-full max-w-xs mb-2'
            >
              Purchase
            </button>
          </div>
          <div>
            <button
              onClick={navigateToOrder}
              className='btn btn-primary w-full max-w-xs mb-2'
            >
              Your Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDetails;
