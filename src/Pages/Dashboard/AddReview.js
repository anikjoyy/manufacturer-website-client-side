import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const AddReview = () => {
  const stars = Array(5).fill(0);

  const colors = {
    orange: '#FFBA5A',
    gray: '#a9a9a9',
  };

  const [currentValue, setCurrentvalue] = useState(0);
  const [user] = useAuthState(auth);
  const { id } = useParams();

  const handleClick = (value) => {
    setCurrentvalue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const feedback = event.target.feedback.value;

    const customerFeedback = {
      email: user.email,
      name: user.displayName,
      rating: currentValue,
      customerFeedback: feedback,
    };

    const url = `http://localhost:5000/review${id}`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(customerFeedback),
    })
      .then((res) => res.json())
      .then((inserted) => {
        if (inserted.insertedId) {
          toast.success('Thank you for your feedback');
          event.target.reset();
        } else {
          toast.error('Failed to add the review');
        }
      });
  };
  return (
    <div className='card lg:mx-40 my-24 bg-base-100 shadow-xl flex justify-center items-center'>
      <div className='card-body'>
        <div className='flex gap-3 mb-5 cursor-pointer'>
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                color={currentValue > index ? colors.orange : colors.gray}
                onClick={() => handleClick(index + 1)}
              />
            );
          })}
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            className='textarea input-lg textarea-bordered'
            name='feedback'
            placeholder="What's your feedback"
          ></textarea>
          <br />
          <button className='btn btn-success w-full mt-4'>Post</button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
