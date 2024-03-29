import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import PageTitle from '../Shared/PageTitle';
import Product from './Product';

const AllProduct = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://arcane-sierra-72100.herokuapp.com/product')
      .then((res) => res.json())
      .then((data) => {
        setAllProduct(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className='mx-12 my-10'>
      <PageTitle title='Products'></PageTitle>
      <h4 className='text-3xl text-secondary text-center font-bold  my-12'>
        All Products
      </h4>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {allProduct.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
        {loading ? <Loading></Loading> : AllProduct}
      </div>
    </div>
  );
};

export default AllProduct;
