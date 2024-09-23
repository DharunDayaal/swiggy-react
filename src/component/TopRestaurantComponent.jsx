import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import TopResturantCard from './TopResturantCard';
import ReactLoading from 'react-loading';
import '../component/topRestaurantComponent.css';

const TopRestaurantComponent = () => {
  const [cardData, setCardData] = useState([]);
  const pathToJsonFile = '/cardDetails.json';
  const [scrollThumbWidth, setScrollThumbWidth] = useState(0);
  const [scrollThumbPosition, setScrollThumbPosition] = useState(0);
  const [loading, setLoading] = useState(false);
  const restaurantScrollIndex = useRef(null);
  const scrollbarThumbRef = useRef(null);
  const buttonIcons = {
    previousButtonIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000">
        <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
      </svg>
    ),
    nextButtonIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000">
        <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
      </svg>
    ),
  };

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await axios.get(pathToJsonFile);
        setCardData(response.data);
        setLoading(true);
        updateScrollThumb();
      } catch (e) {
        console.log('Error fetching the Data ', e);
      }
    };
    fetchCardData();

    const updateScrollThumb = () => {
      if (restaurantScrollIndex.current && scrollbarThumbRef.current) {
        const scrollableWidth = restaurantScrollIndex.current.scrollWidth;
        const visibleWidth = restaurantScrollIndex.current.clientWidth;
        const scrollThumbWidth = (visibleWidth / scrollableWidth) * 100;
        setScrollThumbWidth(scrollThumbWidth);
      }
    };

    updateScrollThumb();
    
    return () => {
      window.removeEventListener('resize', updateScrollThumb);
    };
  }, []);

  const handleRestaurantPreviousButton = () => {
    const gap = parseInt(window.getComputedStyle(restaurantScrollIndex.current).gap, 10);
    if (restaurantScrollIndex.current) {
      restaurantScrollIndex.current.scrollBy({
        left: -(200 * 3 + gap * 2),
        behavior: 'smooth',
      });
      updateThumbPosition();
    }
  };

  const handleRestaurantNextButton = () => {
    const gap = parseInt(window.getComputedStyle(restaurantScrollIndex.current).gap, 10);
    if (restaurantScrollIndex.current) {
      restaurantScrollIndex.current.scrollBy({
        left: 200 * 3 + gap * 2,
        behavior: 'smooth',
      });
      updateThumbPosition();
    }
  };

  const updateThumbPosition = () => {
    const scrollableWidth = restaurantScrollIndex.current.scrollWidth - restaurantScrollIndex.current.clientWidth;
    const scrollLeft = restaurantScrollIndex.current.scrollLeft;
    const thumbPosition = (scrollLeft / scrollableWidth) * 100;
    setScrollThumbPosition(thumbPosition);
  };

  return (
    <>
      <div className="top-container">
        <div className="d-lg-flex d-md-flex flex-lg-row flex-md-row justify-content-lg-between justify-content-md-between align-items-lg-center align-items-md-center ">
          <h2>Top restaurant chains in Chennai</h2>
          <div className="btn-group-lg btn-group-sm">
            <button className="prev-btn me-lg-3 me-md-3 me-3" onClick={handleRestaurantPreviousButton}>
              {buttonIcons.previousButtonIcon}
            </button>
            <button className="next-btn" onClick={handleRestaurantNextButton}>
              {buttonIcons.nextButtonIcon}
            </button>
          </div>
        </div>
        <div className="card-slider">
          <div className="img-list mt-5 mb-2" ref={restaurantScrollIndex}>
            {loading ? cardData.map(({ restaurant, discount, rating, price, delivery_time, cuisine, location, image }, index) => (
              <TopResturantCard
                key={index}
                restaurant={restaurant}
                discount={discount}
                rating={rating}
                price={price}
                deliveryTime={delivery_time}
                cusine={cuisine}
                location={location}
                image={image}
              />
            )) : (<div className='loading-animation'><ReactLoading type='balls' color='#6366F1' width='100px' height='100px' /></div>) }
          </div>
        </div>
      
        <div className="slider-scrollbar">
          <div className="scrollbar-track">
            <div
              className="scrollbar-thumb"
              ref={scrollbarThumbRef}
              style={{
                left: `${scrollThumbPosition}%`,
                scrollBehavior: "smooth",
              }}
            ></div>
          </div>
        </div>
        <div className="bottom-line"></div>
      </div>
    </>
  );
};

export default TopRestaurantComponent;

