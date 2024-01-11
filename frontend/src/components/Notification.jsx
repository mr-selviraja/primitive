import React from 'react';
import { IoCall, IoMail } from 'react-icons/io5';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { Container } from 'react-bootstrap';

const Notification = () => {
  return (
    <section className='d-none d-md-flex bg-primary-dark text-white py-3 text-small'>
      <Container className='d-flex justify-content-between'>
        <span className='d-flex gap-5'>
          <span className='d-flex align-items-center gap-2'>
            <IoCall />
            <span>+00 999 999 99 99</span>
          </span>

          <span className='d-flex align-items-center gap-2'>
            <IoMail />
            <span>primitive.example@email.com</span>
          </span>
        </span>

        <span className='d-flex gap-3 align-items-center'>
          <span>Follow us:</span>
          <FaXTwitter />
          <FiFacebook />
          <FiInstagram />
        </span>
      </Container>
    </section>
  );
};

export default Notification;
