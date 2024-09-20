import React, { useEffect, useState } from 'react'
import axios from 'axios';
import TopResturantCard from './TopResturantCard';
import '../component/topRestaurantComponent.css'

const TopRestaurantComponent = () => {

  const [cardData, setCardData] = useState([]);

  const pathToJsonFile = '/cardDetails.json'
  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await axios.get(pathToJsonFile);
        setCardData(response.data )
      }
      catch(e){
        console.log("Error on fetching the Data ", e);
      }
    }
    fetchCardData();
  }, [])
  console.log(cardData)
  
  const buttonIcons = {
    previousButtonIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
    ),
    nextButtonIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
    )
  }

  return (
    <>
      <div className="mind-container">
        <div className="d-lg-flex flex-lg-row justify-content-lg-between align-items-center">
          <h2>What's on your mind?</h2>
          <div className="btn-group-lg btn-group-sm">
            <button className="prev-btn me-lg-3 me-md-3 me-3" >
                {buttonIcons.previousButtonIcon}
            </button>
            <button className="next-btn" >
              {buttonIcons.nextButtonIcon}
            </button>
          </div>
        </div>
        <TopResturantCard restaurant="burgerKing" discount="60%" rating="4.5" price="120" deliveryTime="10-20mins" cusine="burgers, American" location="Kancheepuram" image='/burger-king.avif' />
        <div class="slider-scrollbar">
          <div class="scrollbar-track">
            <div class="scrollbar-thumb"></div>
          </div>
        </div>
        <div class="bottom-line"></div>
      </div>
    </>
  )
}

export default TopRestaurantComponent