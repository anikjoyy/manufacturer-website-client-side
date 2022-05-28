import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import PageTitle from '../Shared/PageTitle';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className='drawer drawer-mobile'>
      <PageTitle title='Dashboard'></PageTitle>
      <input id='dashboard-sidebar' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        <h2 className=' text-center text-2xl font-bold text-primary'>
          Welcome to your Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div className='drawer-side'>
        <label htmlFor='dashboard-sidebar' className='drawer-overlay'></label>
        <ul className='menu p-4 overflow-y-auto w-48 bg-base-200 text-base-content'>
          {/* <!-- Sidebar content here --> */}
          {!admin && (
            <li>
              <Link to='/dashboard'>My Orders</Link>
            </li>
          )}
          <li>
            <Link to='/dashboard/profile'>My Profile</Link>
          </li>
          {!admin && (
            <li>
              <Link to='/dashboard/review'>My Review</Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to='/dashboard/allOrders'>Manage All Orders</Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to='/dashboard/addProduct'>Add a Product</Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to='/dashboard/manageProduct'>Manage Products</Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to='/dashboard/users'>All Users</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
