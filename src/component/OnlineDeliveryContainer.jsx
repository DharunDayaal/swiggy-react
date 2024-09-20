import React from 'react'
import "./onlineDeliveryContainer.css"
import FileterOptionsContainer from './FileterOptionsContainer'
import RestaurantComponent from './RestaurantComponent';

const OnlineDeliveryContainer = () => {
  return (
    <>
      <div className="onlineDelivery-container">
        <h2>
          Restaurants with online food delivery in Chennai
        </h2>
        <div className="row mb-lg-4 mb-4 mb-md-4">
          <FileterOptionsContainer filterOptionName="Filter" svgName="/filter-icon.png"/>
          <FileterOptionsContainer filterOptionName="Sort By" svgName="./src/assets/icons/downArrow.svg"/>
          <FileterOptionsContainer filterOptionName="Fast Delivery" svgName=""/>
          <FileterOptionsContainer filterOptionName="New on Swiggy" svgName=""/>
          <FileterOptionsContainer filterOptionName="Ratings 4.0+" svgName=""/>
          <FileterOptionsContainer filterOptionName="Pure Veg" svgName=""/>
          <FileterOptionsContainer filterOptionName="Offers" svgName=""/>
          <FileterOptionsContainer filterOptionName="Rs. 300-Rs. 600" svgName=""/>
          <FileterOptionsContainer filterOptionName="Less than Rs. 300" svgName=""/>
        </div>
        <RestaurantComponent />
      </div>
    </>
  )
}

export default OnlineDeliveryContainer