import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import RestaurantCardComponent from './RestaurantCardComponent';
import './topRestaurantComponent.css';

const RestaurantComponent = () => {
  const [cardData, setCardData] = useState([]);
  const pathToJsonFile = '/cardDetails.json';

  useEffect(() => {
    const fetchRestaurantCardData = async () => {
      try {
        const response = await axios.get(pathToJsonFile);
        setCardData(response.data);
      } catch (e) {
        console.log('Error fetching the Data ', e);
      }
    };
    fetchRestaurantCardData();
  }, []);

  return (
    <>
      <div className="container mt-5 mb-2">
        <div className="row">
          {cardData.map(({ restaurant, discount, rating, price, delivery_time, cuisine, location, image }, index) => (
            <div className="col-md-6 mb-4 col-lg-3" key={index}>
              <RestaurantCardComponent
                restaurant={restaurant}
                discount={discount}
                rating={rating}
                price={price}
                deliveryTime={delivery_time}
                cusine={cuisine}
                location={location}
                image={image}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantComponent;
