"use client";

import React, { useState } from 'react';
import texts from '../data/texts.json';
import photos from '../data/photos.json';

function MainContent() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const slogan = texts.slogan;
  const mainPhotoUrl = `../../images/photos/${photos.mainPhotoUrl}`;

  return (
    <main className="App-main">
      <section className="image-container">
        <img
          src={mainPhotoUrl}
          alt="Main Content"
          className="main-image"
          onLoad={() => setImageLoaded(true)}
        />
        <button className="book-button">Book It</button>
      </section>
      <div className="fullwidth-content-text">
        <h2>
          {slogan.split("").map((char, index) => (
            <span
              key={index}
              className={`letter ${imageLoaded ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>
      </div>
    </main>
  );
}

export default MainContent;