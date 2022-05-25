import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
  const { id, name, img, minOrderQuantity, availableQuantity } = product;
  const navigate = useNavigate();

  const navigateToDetails = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <figure className='px-10 pt-10'>
        <img
          src={img}
          alt='Car Parts'
          className='rounded-xl object-cover h-48 w-96'
        />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>{name}</h2>
        <p>Minium Order Quantity: {minOrderQuantity}</p>
        <p>Available Quantity: {availableQuantity}</p>

        <div className='card-actions '>
          <button
            onClick={() => navigateToDetails(id)}
            className='btn btn-primary rounded-xl hover:bg-yellow-200'
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
