import React from 'react';
import bannerImage from '../../assets/images/banner.png';

const Banner = () => {
  return (
    <div
      class='hero min-h-[60vh]'
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      <div class='hero-overlay bg-opacity-60'></div>
      <div class='hero-content text-center text-neutral-content'>
        <div class='max-w-md'>
          <h1 class='mb-5 text-5xl font-bold'>The Car Whisperer</h1>
          <p class='mb-5'>
            Build your dream car using our companies best tools.
          </p>
          <button class='btn btn-primary'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
