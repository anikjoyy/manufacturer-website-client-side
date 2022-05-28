import React from 'react';
import PageTitle from '../Shared/PageTitle';
import Banner from './Banner';
import Contact from './Contact';
import FindUs from './FindUs';
import Products from './Products';
import Reviews from './Reviews';
import Summary from './Summary';

const Home = () => {
  return (
    <div>
      <PageTitle title='Home'></PageTitle>
      <Banner></Banner>
      <Products></Products>
      <FindUs></FindUs>
      <Summary></Summary>
      <Reviews></Reviews>
      <Contact></Contact>
    </div>
  );
};

export default Home;
