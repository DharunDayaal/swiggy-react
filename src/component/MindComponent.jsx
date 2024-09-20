import React, { useEffect, useRef, useState } from 'react';
import './mindComponent.css';

const MindComponent = () => {
  const [imageItems, setImageItems] = useState([]);
  const scrollReference = useRef(null);

  const buttonIcons = {
    previousButtonIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
    ),
    nextButtonIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
    )
  }

  useEffect(() => {
    const images = [];
    for (let i = 1; i < 15; i++) {
      const imgSrc = `/${i}.avif`;
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
            {buttonIcons.previousButtonIcon}
          </button>
          <button className="next-btn" onClick={handleNextButton}>
            {buttonIcons.nextButtonIcon}
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
