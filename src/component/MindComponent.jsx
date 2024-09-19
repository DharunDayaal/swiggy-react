import React, { useEffect, useRef, useState } from 'react';
import './mindComponent.css';

const MindComponent = () => {
  const [imageItems, setImageItems] = useState([]);
  const scrollReference = useRef(null);

  useEffect(() => {
    const images = [];
    for (let i = 1; i < 15; i++) {
      const imgSrc = new URL(`./src/assets/images/${i}.avif`, import.meta.url).href;
      images.push({ imgSrc });
    }
    setImageItems(images);
  }, []);

  const handlePreviousButton = () => {
    const gap = parseInt(window.getComputedStyle(scrollReference.current).gap, 10);
    if (scrollReference.current) {
      scrollReference.current.scrollBy({
        left: -200*3 + gap*2,
        behavior: 'smooth', 
      });
    }
  };

  const handleNextButton = () => {
    const gap = parseInt(window.getComputedStyle(scrollReference.current).gap, 10);
    if (scrollReference.current) {
      scrollReference.current.scrollBy({
        left: 200*3 + gap * 2,
        behavior: 'smooth',
      });
    }
  };

  const prevBtnURL = new URL(`./src/assets/icons/backward-arrow`, import.meta.url).href;
  const nextBtnURL = new URL(`./src/assets/icons/forward-arrow`, import.meta.url).href;

  return (
    <div className="mind-container">
      <div className="d-lg-flex flex-lg-row justify-content-lg-between align-items-center">
        <h2>What's on your mind?</h2>
        <div className="btn-group-lg btn-group-sm">
          <button className="prev-btn me-lg-3 me-md-3 me-3" onClick={handlePreviousButton}>
            <img src={prevBtnURL} alt="prev-btn" />
          </button>
          <button className="next-btn" onClick={handleNextButton}>
            <img src={nextBtnURL} alt="next-btn" />
          </button>
        </div>
      </div>
      <div className="img-list" ref={scrollReference}>
        {imageItems.map(({ imgSrc }, index) => (
          <img
            key={index}
            className="img-item"
            src={imgSrc}
            alt={`${index + 1}-images`}
            tabIndex="-1"
          />
        ))}
      </div>
      <div className="bottom-line"></div>
    </div>
  );
};

export default MindComponent;
