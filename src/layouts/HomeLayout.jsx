import React from 'react'
import NavbarComponent from '../component/NavbarComponent'
import MindComponent from '../component/MindComponent'
import TopRestaurantComponent from '../component/TopRestaurantComponent'
import OnlineDeliveryContainer from '../component/OnlineDeliveryContainer'
import CitiesComponent from '../component/CitiesComponent'
import CusinesComponent from '../component/CusinesComponent'
import AppContainer from '../component/AppContainer'
import ExploreComponent from '../component/ExploreComponent'
import FooterComponent from '../component/FooterComponent'

const HomeLayout = () => {
  return (
    <>
      <NavbarComponent />
      <MindComponent />
      <TopRestaurantComponent />
      <OnlineDeliveryContainer />
      <CitiesComponent />
      <CusinesComponent />
      <ExploreComponent /> 
      <AppContainer />
      <FooterComponent />
    </>
  )
}

export default HomeLayout