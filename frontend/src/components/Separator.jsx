import React from 'react';

const Separator = () => {
  return (
    <section
      className='separator d-flex justify-content-center gap-3'
      style={{ height: '.5rem' }}
    >
      <span
        rounded='true'
        className='bg-white d-block'
        style={{ height: '.5rem', width: '3rem' }}
      ></span>
      <span
        rounded='true'
        className='bg-white d-block'
        style={{ height: '.5rem', width: '3rem' }}
      ></span>
      <span
        rounded='true'
        className='bg-white d-block'
        style={{ height: '.5rem', width: '3rem' }}
      ></span>
    </section>
  );
};

export default Separator;
