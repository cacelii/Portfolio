import React from 'react';
import caumasee from './images/caumasee.jpg';
import ceskykrumlov from './images/ceskykrumlov.jpg';

export default function Carousel() {
  return (
    <section id="carousel">
      <img alt="caumasee" className="carousel-image" src={caumasee} />
      <img
        alt="ceskykrumlov"
        className="carousel-image hidden"
        src={ceskykrumlov}
      />
    </section>
  );
}
