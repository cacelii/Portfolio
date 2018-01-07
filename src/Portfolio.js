import React from 'react';
import globalKitchen from './images/global-kitchen.png';
import HungerMatch from './images/HungerMatch.png';
import CageMatch from './images/CageMatch.png';
import BlogPost from './images/BlogPost.png';

export default function Portfolio() {
  return (
    <div>
      <ul className="portfolio">
        <li>
          <h3>Global Kitchen</h3>
          <p className="description">
            A restaurant simulator game designed to introduce players to
            different recipes from around the world they otherwise may never get
            to experience. Built with Pixi.js and Redux.
          </p>
          <img
            className="portfolio-image"
            src={globalKitchen}
            alt="global-kitchen"
          />
          <button>
            <a href="http://global-kitchen.herokuapp.com/" target="_blank">
              Demo
            </a>
          </button>
        </li>
        <li>
          <h3>HungerMatch</h3>
          <p className="description">
            A mobile and web app where you can choose buzz words (flavors) and
            it will match you with 1-3 restaurants near you. Built with React
            Native, React-Redux, and Yelp's API.
          </p>
          <img
            className="portfolio-image"
            src={HungerMatch}
            alt="HungerMatch"
          />
          <button>
            <a
              href="https://www.youtube.com/watch?v=1maNAy3WxgI"
              target="_blank"
            >
              Demo
            </a>
          </button>
        </li>
        <li>
          <h3>Cage Match</h3>
          <p className="description">
            An e-commerce site selling past Nic Cage roles as if they were to
            reoccur in the future. Built with React-Redux, Oauth, Express,
            Sequelize, Mocha, Chai, and Sass.
          </p>
          <img className="portfolio-image" src={CageMatch} alt="cage-match" />
          <button>
            <a href="http://cage-match.herokuapp.com/" target="_blank">
              Demo
            </a>
          </button>
        </li>
        <li>
          <h3>React Native vs. Plain Old React</h3>
          <p className="description">
            Explains the basic differences of React Native compared to regular
            React, utilizing examples from my Stackathon project, HungerMatch.
          </p>
          <img className="portfolio-image" src={BlogPost} alt="blog-post" />
          <button>
            <a
              href="https://medium.com/@ceciliafchang/react-native-vs-plain-old-react-bb0f27677cfd"
              target="_blank"
            >
              Read
            </a>
          </button>
        </li>
      </ul>
    </div>
  );
}
