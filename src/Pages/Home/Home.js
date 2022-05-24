import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import FindUs from './FindUs';
import Summary from './Summary';

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <FindUs></FindUs>
      <Summary></Summary>
      <Contact></Contact>
    </div>
  );
};

export default Home;
