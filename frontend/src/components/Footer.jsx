import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='footer bg-black text-gray-dark py-5 px-4'>
      <Container className='d-flex flex-column flex-md-row justify-content-between gap-4 lg:gap-0'>
        <span className='footer__company mb-2'>
          <img
            width={70}
            src='/assets/primitive-logo-primary.svg'
            alt='primitive logo'
          />

          <small className='d-block'>Unearth the Beauty of Antiques</small>
        </span>

        <div className='footer__links d-flex flex-row'>
          <span>
            <h4>Company</h4>
            <ul className='text-small text-w-light'>
              <li>About</li>
              <li>Careers</li>
              <li>Newsroom</li>
            </ul>
          </span>

          <span>
            <h4>Antiques</h4>
            <ul className='text-small text-w-light'>
              <li>Authentic</li>
              <li>Quality</li>
              <li>Values</li>
            </ul>
          </span>

          <span>
            <h4>Social</h4>
            <ul className='text-small text-w-light'>
              <li>X (Twitter)</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </span>

          <span>
            <h4>Legal</h4>
            <ul className='text-small text-w-light'>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
