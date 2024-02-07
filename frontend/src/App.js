import React from 'react';
import Navigation from './components/Navigation';
import Notification from './components/Notification';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import EditorsPick from './components/EditorsPick';
import ProductList from './components/ProductList';
import products from './data';
import Separator from './components/Separator';
import ContactUs from './components/ContactUs';

const App = () => {
  return (
    <>
      <header className='position-sticky top-0'>
        <Notification />
        <Navigation />
      </header>

      <Separator />

      <Container className='content'>
        <EditorsPick />

        <Separator />

        <ProductList products={products} productListTitle={'Furniture'} />

        <Separator />

        <ProductList products={products} productListTitle={'Collectables'} />

        <Separator />

        <ProductList products={products} productListTitle={'Art & Decor'} />

        <Separator />

        <ProductList products={products} productListTitle={'Jewellery'} />

        <Separator />

        <ProductList products={products} productListTitle={'Clothing'} />

        <Separator />

        <ProductList products={products} productListTitle={'Books'} />
      </Container>

      <Separator />

      <ContactUs />

      <Footer />
    </>
  );
};

export default App;
