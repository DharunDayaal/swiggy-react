import React from 'react'
import './citiesComponent.css'
import CityComponent from './CityComponent'

const CitiesComponent = () => {
  return (
    <>
      <div className='cities-container'>
				<h2>Best Places to Eat Across Cities</h2>
				<div className="row">
					<div className="col-lg-3">
						<CityComponent cityName='Best Restaurants in Bangalore' />
					</div>
					<div className="col-lg-3">
						<CityComponent cityName='Best Restaurants in Pune' />
					</div>
					<div className="col-lg-3">
						<CityComponent cityName='Best Restaurants in Mumbai' />
					</div>
					<div className="col-lg-3">
						<CityComponent cityName='Best Restaurants in Delhi' />
					</div>
				</div>
				<div className="row">
					<div className="col-lg-3 ">
						<CityComponent cityName='Best Restaurants in Bangalore' />
					</div>
					<div className="col-lg-3">
						<CityComponent cityName='Best Restaurants in Pune' />
					</div>
					<div className="col-lg-3">
						<CityComponent cityName='Best Restaurants in Mumbai' />
					</div>
					<div className="col-lg-3">
						<CityComponent cityName='Best Restaurants in Delhi' />
					</div>
				</div>
				<div className="row">
					<div className="col-lg-3 ">
						<CityComponent cityName='Best Restaurants in Bangalore' />
					</div>
					<div className="col-lg-3">
						<CityComponent cityName='Best Restaurants in Pune' />
					</div>
					<div className="col-lg-3">
						<CityComponent cityName='Best Restaurants in Mumbai' />
					</div>
					<div className="col-lg-3">
						<CityComponent cityName='Best Restaurants in Delhi' />
					</div>
				</div>
			</div>
    </>
  )
}

export default CitiesComponent