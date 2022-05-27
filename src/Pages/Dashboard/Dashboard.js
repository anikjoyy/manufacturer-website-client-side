import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle';

const Dashboard = () => {
  return (
    <div class='drawer drawer-mobile'>
      <PageTitle title='Dashboard'></PageTitle>
      <input id='dashboard-sidebar' type='checkbox' class='drawer-toggle' />
      <div class='drawer-content'>
        <h2 className=' text-center text-2xl font-bold text-primary'>
          Welcome to your Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div class='drawer-side'>
        <label for='dashboard-sidebar' class='drawer-overlay'></label>
        <ul class='menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content'>
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to='/dashboard'>My Orders</Link>
          </li>
          <li>
            <Link to='/dashboard/profile'>My Profile</Link>
          </li>
          <li>
            <Link to='/dashboard/review'>My Review</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
