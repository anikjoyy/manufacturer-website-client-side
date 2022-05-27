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
    <div class='navbar bg-base-300'>
      <div class='navbar-start'>
        <div class='dropdown'>
          <label tabindex='0' class='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabindex='0'
            class='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            {navItem}
          </ul>
        </div>
        <a class='btn btn-ghost normal-case text-xl'>The Car Whisperer</a>
      </div>
      <div class='navbar-center hidden lg:flex'>
        <ul class='menu menu-horizontal p-0'>{navItem}</ul>
      </div>
    </div>
  );
};

export default Navbar;
