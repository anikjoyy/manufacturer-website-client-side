import React from 'react';
import NotFoundImage from '../../../assets/images/error.png';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className='error-container mb-4'>
      <img src={NotFoundImage} alt='' />
    </div>
  );
};

export default NotFound;
