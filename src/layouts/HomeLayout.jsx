import React from 'react'
import NavbarComponent from '../component/NavbarComponent'
import MindComponent from '../component/MindComponent'
import TopRestaurantComponent from '../component/TopRestaurantComponent'

const HomeLayout = () => {
  return (
    <div>
        <NavbarComponent />
        <MindComponent />
        <TopRestaurantComponent />
    </div>
  )
}

export default HomeLayout