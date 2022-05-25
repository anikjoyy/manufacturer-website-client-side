import React, { useEffect, useState } from 'react';
import Product from './Product';

const AllProduct = () => {
  const [allProduct, setAllProduct] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/product')
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  }, []);
  return (
    <div className='mx-12 my-10'>
      <h4 className='text-3xl text-secondary text-center font-bold  my-12'>
        All Products
      </h4>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {allProduct.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
