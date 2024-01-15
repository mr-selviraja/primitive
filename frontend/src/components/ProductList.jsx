import React from 'react';
import ProductListItem from './ProductListItem';

const ProductList = ({ productListTitle, products }) => {
  return (
    <section className='product-list mb-5'>
      <h2 className='product-list__title text-center font-accent text-w-bold mb-5'>
        {productListTitle}
      </h2>

      <ul className='product-list__body'>
        {products.map((product, index) => (
          <li
            key={product.id}
            className={`bg-white p-3 grid-col-4 card-${index + 1}`}
          >
            <ProductListItem product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductList;
