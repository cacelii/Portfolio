import React, { Component } from 'react';
import About from './About';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import prague from './images/prague.jpg';
import arthursPass from './images/arthurs-pass.jpg';
import england from './images/england.jpg';
import snowboarding from './images/snowboarding.jpg';
import sunrise from './images/sunrise.jpg';
import paris from './images/paris.jpg';
import sandsurfing from './images/sandsurfing.jpg';
import whitetemple from './images/whitetemple.jpg';
import elephants from './images/elephants.jpg';
import hongkong from './images/hongkong.jpg';
import christmasinprague from './images/christmasinprague.jpg';
import mountcook from './images/mountcook.jpg';
import lamb from './images/lamb.jpg';
import mtdoom from './images/mtdoom.jpg';
import lakepukaki from './images/lakepukaki.jpg';

export default class PhotoCarousel extends Component {
  render() {
    return (
      <div>
        <About />
        <Carousel
          useKeyboardArrows={true}
          autoPlay={true}
          interval={3000}
          centerMode={true}
          centerSlidePercentage={34}
          emulateTouch={true}
          infiniteLoop={true}
          stopOnHover={false}
        >
          <div>
            <img alt="arthursPass" src={arthursPass} />
            <p className="legend">Arthur's Pass, New Zealand</p>
          </div>
          <div>
            <img alt="england" src={england} />
            <p className="legend">Yorkshire Dales, England</p>
          </div>
          <div>
            <img alt="whitetemple" src={whitetemple} />
            <p className="legend">Chiang Rai, Thailand</p>
          </div>
          <div>
            <img alt="paris" src={paris} />
            <p className="legend">Paris, France</p>
          </div>
          <div>
            <img alt="prague" src={prague} />
            <p className="legend">Prague, Czech Republic</p>
          </div>
          <div>
            <img alt="sandsurfing" src={sandsurfing} />
            <p className="legend">Te Paki Sand Dunes, NZ</p>
          </div>
          <div>
            <img alt="lakepukaki" src={lakepukaki} />
            <p className="legend">Lake Pukaki, NZ (It was really that blue)</p>
          </div>
          <div>
            <img alt="elephants" src={elephants} />
            <p className="legend">Baby elephants playing</p>
          </div>
          <div>
            <img alt="hongkong" src={hongkong} />
            <p className="legend">Hong Kong</p>
          </div>
          <div>
            <img alt="snowboarding" src={snowboarding} />
            <p className="legend">
              Snowboarding for the First Time in New Zealand
            </p>
          </div>
          <div>
            <img alt="sunrise" src={sunrise} />
            <p className="legend">Sunrise in Dunedin, NZ</p>
          </div>
          <div>
            <img alt="mtdoom" src={mtdoom} />
            <p className="legend">
              Mt Ngauruhoe aka Mt Doom, Tongariro Crossing, NZ (Best Day Hike)
            </p>
          </div>
          <div>
            <img alt="christmasinprague" src={christmasinprague} />
            <p className="legend">Christmas in Prague, Czech Republic</p>
          </div>
          <div>
            <img alt="mountcook" src={mountcook} />
            <p className="legend">Mount Cook, NZ</p>
          </div>
          <div>
            <img alt="lamb" src={lamb} />
            <p className="legend">Cute little lamb in NZ</p>
          </div>
        </Carousel>
      </div>
    );
  }
}
