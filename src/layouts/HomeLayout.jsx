import React from 'react'
import NavbarComponent from '../component/NavbarComponent'
import MindComponent from '../component/MindComponent'
import TopRestaurantComponent from '../component/TopRestaurantComponent'
import OnlineDeliveryContainer from '../component/OnlineDeliveryContainer'
import CitiesComponent from '../component/CitiesComponent'

const HomeLayout = () => {
  return (
    <>
        <NavbarComponent />
        <MindComponent />
        <TopRestaurantComponent />
        <OnlineDeliveryContainer />
        <CitiesComponent />
    </>
  )
}

export default HomeLayout