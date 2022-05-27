import React from 'react';
import PageTitle from '../Shared/PageTitle';
import Banner from './Banner';
import Contact from './Contact';
import FindUs from './FindUs';
import Products from './Products';
import Summary from './Summary';

const Home = () => {
  return (
    <div>
      <PageTitle title='Home'></PageTitle>
      <Banner></Banner>
      <Products></Products>
      <FindUs></FindUs>
      <Summary></Summary>
      <Contact></Contact>
    </div>
  );
};

export default Home;
