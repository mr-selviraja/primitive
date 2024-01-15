import React from 'react';

const EditorsPick = () => {
  return (
    <section className='editors-pick mb-5'>
      <h2 className='font-accent text-w-bold text-center'>Editor's Pick</h2>

      <div className='editors-pick__grid'>
        <div
          className='img img-1'
          style={{
            backgroundImage:
              'url("/assets/louis-hansel-OgDrj7Q8EAw-unsplash.jpg")',
          }}
        ></div>

        <div
          className='img img-2'
          style={{
            backgroundImage:
              'url("/assets/Antique Hand-Carved Wooden Music Box.jpg")',
          }}
        ></div>

        <div
          className='img img-3'
          style={{
            backgroundImage:
              'url("/assets/Bronze Sculpture of Mythical Creature.jpg")',
          }}
        ></div>

        <div
          className='img img-4'
          style={{
            backgroundImage:
              'url("/assets/Elegant Victorian Pocket Watch.jpg")',
          }}
        ></div>

        <div
          className='img img-5'
          style={{
            backgroundImage:
              'url("/assets/sudhith-xavier-IUn1O500LMI-unsplash.jpg")',
          }}
        ></div>
      </div>
    </section>
  );
};

export default EditorsPick;
