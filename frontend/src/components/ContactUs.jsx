import React from 'react';
import { Button, Container } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <section className='contact-us bg-primary'>
      <Container>
        <h2 className='text-center mb-4 font-weight-bold'>
          Want to get notified of the Newest Arrivals?
        </h2>

        <div className='d-flex flex-column flex-sm-row justify-content-center gap-3 gap-sm-5'>
          <Button
            className='align-self-center'
            size='lg'
            variant='secondary'
            rounded='true'
          >
            Sign Up
          </Button>

          <Button
            className='align-self-center'
            size='lg'
            variant='dark'
            rounded='true'
          >
            Learn More
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
