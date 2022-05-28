import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const MyProfile = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div class='hero min-h-[70vh]'>
      <div class='card  w-full max-w-sm shadow-2xl bg-base-100'>
        <div class='card-body'>
          <div class='form-control'>
            <label class='label'>
              <span class='label-text'>Name</span>
            </label>
            <input
              type='text'
              disabled
              value={user?.displayName || ''}
              class='input input-bordered'
            />
          </div>
          <div class='form-control'>
            <label class='label'>
              <span class='label-text'>Email</span>
            </label>
            <input
              type='text'
              disabled
              value={user?.email || ''}
              class='input input-bordered'
            />
          </div>
          <div class='form-control'>
            <label class='label'>
              <span class='label-text'>Education</span>
            </label>
            <input
              type='text'
              placeholder='education'
              class='input input-bordered'
            />
          </div>
          <div class='form-control'>
            <label class='label'>
              <span class='label-text'>District</span>
            </label>
            <input
              type='text'
              placeholder='district'
              class='input input-bordered'
            />
          </div>
          <div class='form-control'>
            <label class='label'>
              <span class='label-text'>Phone Number</span>
            </label>
            <input
              type='text'
              placeholder='phone number'
              class='input input-bordered'
            />
          </div>
          <div class='form-control mt-6'>
            <button class='btn btn-primary'>Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
