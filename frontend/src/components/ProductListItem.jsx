import React from 'react';
import { Button } from 'react-bootstrap';
import { AiFillThunderbolt } from 'react-icons/ai';
import { IoCart } from 'react-icons/io5';

const ProductListItem = ({ product }) => {
  return (
    <article className='product-list__item bg-light'>
      <img
        className='w-100 mb-3'
        src={product.imgURL}
        alt={`${product.category} product`}
      />

      <h4 className='text-w-bold font-accent text-center'>{product.title}</h4>

      <div className='d-flex justify-content-center gap-4'>
        <p className='text-w-bold'>Rs. {product.price}</p>

        <p className='text-linethrough'>Rs.{product.price}</p>

        <p className='text-primary'>50% off</p>
      </div>
      <Button
        size='lg'
        variant='secondary'
        className='d-flex align-items-center justify-content-center gap-2 w-100 mb-2'
      >
        <IoCart />
        <span>Add to Cart</span>
      </Button>

      <Button
        size='lg'
        variant='text-light'
        className='btn-primary-dark d-flex align-items-center justify-content-center gap-2 w-100'
      >
        <AiFillThunderbolt />
        <span>Buy Now</span>
      </Button>
    </article>
  );
};

export default ProductListItem;
