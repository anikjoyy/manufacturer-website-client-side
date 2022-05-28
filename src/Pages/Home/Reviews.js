import React, { useEffect, useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/review')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className='mx-12 my-10'>
      <h4 className='text-2xl text-secondary text-center  my-12'>
        Users Review: {reviews.length}
      </h4>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <div className='card w-96 bg-base-200 shadow-xl'>
          <div className='card-body items-center text-center'>
            <p>{reviews.review}</p>
            <h2>{reviews.ratings}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
