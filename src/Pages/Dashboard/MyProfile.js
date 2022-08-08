import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const MyProfile = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className='hero min-h-[70vh]'>
      <div className='card w-full max-w-sm shadow-2xl bg-base-100'>
        <h2 className='text-2xl text-center mt-4 text-secondary font-bold'>
          My Profile
        </h2>
        <div className='card-body'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Name</span>
            </label>
            <input
              type='text'
              disabled
              value={user?.displayName || ''}
              className='input input-bordered'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='text'
              disabled
              value={user?.email || ''}
              className='input input-bordered'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Education</span>
            </label>
            <input
              type='text'
              placeholder='education'
              className='input input-bordered'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>District</span>
            </label>
            <input
              type='text'
              placeholder='district'
              className='input input-bordered'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Phone Number</span>
            </label>
            <input
              type='text'
              placeholder='phone number'
              className='input input-bordered'
            />
          </div>
          <div className='form-control mt-6'>
            <button className='btn btn-primary'>Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
