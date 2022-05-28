import React from 'react';
import myImage from '../../assets/images/me.png';

const MyPortfolio = () => {
  return (
    <div>
      <h2 className='text-2xl text-center font-bold text-primary mt-3'>
        My Information
      </h2>
      <div className='min-h-[40vh] flex justify-center items-center'>
        <div class='card w-96 bg-accent shadow-xl'>
          <div class='avatar flex justify-center items-center pt-3'>
            <div class='w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
              <img src={myImage} alt='' />
            </div>
          </div>
          <div class='card-body'>
            <h2 class='text-2xl text-center font-bold'>Anik Das</h2>
            <p>
              Email Address:{' '}
              <span className='font-semibold'>anikjoy.cse@gmail.com</span>
            </p>
            <p>
              Studies at{' '}
              <span className='font-semibold text-primary'>
                Dept. of CSE, Varendra University
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
