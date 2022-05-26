import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';

const ProductDetails = () => {
  const { id } = useParams();
  const [product] = useProductDetails(id);

  return (
    <div class='flex flex-col w-full lg:flex-row'>
      <div class='card lg:card-side bg-base-100 shadow-xl my-5 ms-5'>
        <figure>
          <img style={{ height: '450px' }} src={product.img} alt='Album' />
        </figure>
        <div class='card-body'>
          <h2 class='card-title'>Name: {product.name}</h2>
          <div className='card-body'>
            <p>Description: {product.shortDescription}</p>
            <p>Minimum Order Quantity: {product.minOrderQuantity}</p>
            <p>Available Quantity: {product.availableQuantity}</p>
            <p>Price: {product.price}$ per unit</p>
            <p>Supplier Name: {product.supplierName}</p>
          </div>
        </div>
      </div>
      <div class='divider lg:divider-horizontal'>OR</div>
      <div class='grid flex-grow h-32 card bg-base-300 rounded-box place-items-center'>
        content
      </div>
    </div>
  );
};

export default ProductDetails;
