import React from 'react';
import caumasee from './images/caumasee.jpg';
import arthursPass from './images/arthurs-pass.jpg';
import bellinzona from './images/bellinzona.jpg';
import england from './images/england.jpg';
import colosseum from './images/colosseum.jpg';
import milfordSound from './images/milford-sound.jpg';
import interlaken from './images/interlaken.jpg';
import paris from './images/paris.jpg';
import sandsurfing from './images/sandsurfing.jpg';
import hookervalley from './images/hookervalley.jpg';
import tonga from './images/tonga.jpg';
import hongkong from './images/hongkong.jpg';
import bungee from './images/bungee.jpg';

export default function Carousel() {
  return (
    <section id="carousel">
      <img alt="caumasee" src={caumasee} />
      <img alt="arthursPass" src={arthursPass} />
      <img alt="england" src={england} />
      <img alt="paris" src={paris} />
      <img alt="sandsurfing" src={sandsurfing} />
      <img alt="hookervalley" src={hookervalley} />
      <img alt="tonga" src={tonga} />
      <img alt="hongkong" src={hongkong} />
    </section>
  );
}
