import React from 'react';
import bannerImage from '../../assets/images/banner.png';

const Banner = () => {
  return (
    <div
      className='hero min-h-[60vh]'
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>The Car Whisperer</h1>
          <p className='mb-5'>
            Build your dream car using our companies best tools.
          </p>
          <button className='btn btn-primary'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
