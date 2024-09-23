import React from 'react'
import './citiesComponent.css'
import CityComponent from './CityComponent'

const CitiesComponent = () => {

	const moreIcon = (
		<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
	);

  return (
    <>
      <div className='cities-container'>
				<h2>Best Places to Eat Across Cities</h2>
				<div className="row">
					<div className="col-lg-3 col-md-6 mb-lg-0 mb-sm-2 mb-md-3 mb-sm-3 mb-2">
						<CityComponent cityName='Best Restaurants in Bangalore' />
					</div>
					<div className="col-lg-3 col-md-6 mb-lg-0 mb-sm-2 mb-md-3 mb-sm-3 mb-2">
						<CityComponent cityName='Best Restaurants in Pune' />
					</div>
					<div className="col-lg-3 col-md-6 mb-lg-0 mb-sm-2 mb-md-3 mb-sm-3 mb-2">
						<CityComponent cityName='Best Restaurants in Mumbai' />
					</div>
					<div className="col-lg-3 col-md-6">
						<CityComponent cityName='Best Restaurants in Delhi' />
					</div>
				</div>
				<div className="row">
					<div className="col-lg-3 col-md-6 mb-lg-0 mb-sm-2 mb-md-3 mb-sm-3 mb-2">
						<CityComponent cityName='Best Restaurants in Hyderbad' />
					</div>
					<div className="col-lg-3 col-md-6 mb-lg-0 mb-sm-2 mb-md-3 mb-sm-3 mb-2">
						<CityComponent cityName='Best Restaurants in Kolkata' />
					</div>
					<div className="col-lg-3 col-md-6 mb-lg-0 mb-sm-2 mb-md-3 mb-sm-3 mb-2">
						<CityComponent cityName='Best Restaurants in Chennai' />
					</div>
					<div className="col-lg-3 col-md-6">
						<CityComponent cityName='Best Restaurants in Chandigarh' />
					</div>
				</div>
				<div className="row">
					<div className="col-lg-3 col-md-6 mb-lg-0 mb-sm-2 mb-md-3 mb-sm-3 mb-2">
						<CityComponent cityName='Best Restaurants in Ahmedabad' />
					</div>
					<div className="col-lg-3 col-md-6 mb-lg-0 mb-sm-2 mb-md-3 mb-sm-3 mb-2">
						<CityComponent cityName='Best Restaurants in Jaipur' />
					</div>
					<div className="col-lg-3 col-md-6 mb-lg-0 mb-sm-2 mb-md-3 mb-sm-3 mb-2">
						<CityComponent cityName='Best Restaurants in Nagpur' />
					</div>
					<div className='col-lg-3 col-md-6'>
						<div className='cities'>
							<div className='d-lg-flex justify-content-lg-center align-items-lg-center'>
								{'Show more'}
								{moreIcon}
							</div>
						</div>
					</div>
				</div>
			</div>
    </>
  )
}

export default CitiesComponent