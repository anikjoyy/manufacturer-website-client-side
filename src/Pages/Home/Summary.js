import React from 'react';

const Summary = () => {
  return (
    <div className='text-center my-5'>
      <h2 className='text-primary font-bold text-3xl pb-2'>Business Summary</h2>
      <div className='stats stats-vertical lg:stats-horizontal shadow'>
        <div className='stat px-2 lg:px-12'>
          <div className='stat-figure text-primary'></div>
          <div className='stat-title'>We Served</div>
          <div className='stat-value text-primary'>100+</div>
          <div className='stat-desc'>Customers</div>
        </div>

        <div className='stat px-2 lg:px-12'>
          <div className='stat-figure text-secondary'></div>
          <div className='stat-title'>Annual revenue</div>
          <div className='stat-value text-secondary'>120M+</div>
          <div className='stat-desc'>21% more than last year</div>
        </div>
        <div className='stat px-2 lg:px-12'>
          <div className='stat-title'>Customer Reviews</div>
          <div className='stat-value text-primary'>33K+</div>
          <div className='stat-desc'>Reviews</div>
        </div>
        <div className='stat px-2 lg:px-12'>
          <div className='stat-figure text-secondary'></div>
          <div className='stat-title'>Our Tools</div>
          <div className='stat-value text-secondary'>50+</div>
          <div className='stat-desc'>tools</div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
