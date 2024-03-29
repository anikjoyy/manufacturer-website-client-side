import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import Loading from '../Shared/Loading';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://arcane-sierra-72100.herokuapp.com/product')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className='mx-12 my-10'>
      <h4 className='text-2xl text-secondary text-center  my-12'>
        Available Products
      </h4>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {products.slice(-6).map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
        {isLoading ? <Loading></Loading> : Products}
        <div>
          <Link to='/allProduct'>
            <button className='btn btn-secondary'>See All</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
