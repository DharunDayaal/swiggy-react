import React from 'react'
import './citiesComponent.css'


const CityComponent = ({ cityName }) => {
  return (
    <>
        <div className='cities'>
            <div>{cityName}</div>
        </div>
    </>
  )
}

export default CityComponent