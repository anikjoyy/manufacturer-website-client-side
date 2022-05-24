import React from 'react';

const Summary = () => {
  return (
    <div className='text-center my-5'>
      <h2 className='text-primary font-bold text-3xl pb-2'>Business Summary</h2>
      <div class='stats stats-vertical lg:stats-horizontal shadow'>
        <div class='stat px-2 lg:px-12'>
          <div class='stat-figure text-primary'></div>
          <div class='stat-title'>We Served</div>
          <div class='stat-value text-primary'>100+</div>
          <div class='stat-desc'>Customers</div>
        </div>

        <div class='stat px-2 lg:px-12'>
          <div class='stat-figure text-secondary'></div>
          <div class='stat-title'>Annual revenue</div>
          <div class='stat-value text-secondary'>120M+</div>
          <div class='stat-desc'>21% more than last year</div>
        </div>
        <div class='stat px-2 lg:px-12'>
          <div class='stat-title'>Customer Reviews</div>
          <div class='stat-value text-primary'>33K+</div>
          <div class='stat-desc'>Reviews</div>
        </div>
        <div class='stat px-2 lg:px-12'>
          <div class='stat-figure text-secondary'></div>
          <div class='stat-title'>Our Tools</div>
          <div class='stat-value text-secondary'>50+</div>
          <div class='stat-desc'>tools</div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
