import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  const navItem = (
    <>
      <li>
        <NavLink to='/' className='rounded-lg hover:bg-secondary'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/allProduct' className='rounded-lg hover:bg-secondary'>
          Products
        </NavLink>
      </li>
      <li>
        {user ? (
          <button className='btn btn-ghost' onClick={logout}>
            Sign Out
          </button>
        ) : (
          <NavLink to='/login' className='rounded-lg hover:bg-secondary'>
            Login
          </NavLink>
        )}
      </li>
    </>
  );
  return (
    <div className='navbar bg-base-300'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex='0' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex='0'
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            {navItem}
          </ul>
        </div>
        <a className='btn btn-ghost normal-case text-xl'>The Car Whisperer</a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal p-0'>{navItem}</ul>
      </div>
    </div>
  );
};

export default Navbar;
