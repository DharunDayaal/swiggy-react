import React, { useEffect, useRef, useState } from 'react';
import './mindComponent.css';

const MindComponent = () => {
  const [imageItems, setImageItems] = useState([]);
  const scrollReference = useRef(null);

  useEffect(() => {
    const images = [];
    for (let i = 1; i < 15; i++) {
      const imgSrc = `./src/assets/images/${i}.avif`;
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

  return (
    <div className="mind-container">
      <div className="d-lg-flex flex-lg-row justify-content-lg-between align-items-center">
        <h2>What's on your mind?</h2>
        <div className="btn-group-lg btn-group-sm">
          <button className="prev-btn me-lg-3 me-md-3 me-3" onClick={handlePreviousButton}>
            <img src="./src/assets/icons/backward-arrow.svg" alt="prev-btn" />
          </button>
          <button className="next-btn" onClick={handleNextButton}>
            <img src="./src/assets/icons/forward-arrow.svg" alt="next-btn" />
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
