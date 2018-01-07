import React from 'react';
import profilePic from './images/profile-pic.jpg';
import './App.css';

export default function About() {
  return (
    <div id="about">
      <img src={profilePic} alt="profile-pic" />
      <p>
        After working in the hospitality industry for 4 years, I traveled around
        the world for 3 years, teaching English, working at hostels and B&Bs,
        and performing administrative work in offices. During my experience
        abroad, I came to the realization that I wanted to help people in a
        different context. I have always wondered how the systems we utilized
        worked on the backend, and loved learning and picking up new systems.
        Once I heard about software programming, I started teaching myself how
        to code and have not looked back since. I love being able to challenge
        myself and utilize my brain in a different capacity. I would love to
        incorporate my two passions, tech and hospitality, and help make
        people's lives easier.
      </p>
    </div>
  );
}
