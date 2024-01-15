import React from 'react';
import Navigation from './components/Navigation';
import Notification from './components/Notification';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import EditorsPick from './components/EditorsPick';

const App = () => {
  return (
    <>
      <header className='position-sticky top-0'>
        <Notification />
        <Navigation />
      </header>

      <Container className='content'>
        <EditorsPick />
      </Container>

      <Footer />
    </>
  );
};

export default App;
