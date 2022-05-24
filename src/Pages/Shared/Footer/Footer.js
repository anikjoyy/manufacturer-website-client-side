import React from 'react';
import './Footer.css';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <>
      <div className='footer pl-4 '>
        <div>
          <span className='footer-title'>Products</span>
          <a className='link link-hover'>EPP and EPS Car Components</a>
          <a className='link link-hover'>Child's Safety Seats</a>
          <a className='link link-hover'>Car Battery Pack</a>
          <a className='link link-hover'>Transport Packaging</a>
        </div>
        <div>
          <span className='footer-title'>Expertise</span>
          <a className='link link-hover'>Technologies</a>
          <a className='link link-hover'>Innovation</a>
          <a className='link link-hover'>Materials</a>
          <a className='link link-hover'>Quality</a>
        </div>
        <div>
          <span className='footer-title'>Contact</span>
          <a className='link link-hover'>About us</a>
          <a className='link link-hover'>Contact us</a>
          <a className='link link-hover'>Jobs</a>
          <a className='link link-hover'>News</a>
        </div>
        <div>
          <span className='footer-title'>Legal</span>
          <a className='link link-hover'>Terms of use</a>
          <a className='link link-hover'>Privacy policy</a>
          <a className='link link-hover'>Cookie policy</a>
          <a className='link link-hover'>Sitemap</a>
        </div>
      </div>
      <div className='my-10 text-center'>
        <p>Copyright © {year} - All right Reserved by The Car Whisperer</p>
      </div>
    </>
  );
};

export default Footer;
