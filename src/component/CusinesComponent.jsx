import React from 'react'
import './citiesComponent.css'
import CityComponent from './CityComponent'

const CusinesComponent = () => {

	const moreIcon = (
		<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
	);

  return (
    <>
      <div className='cities-container cusines-container'>
				<h2>Best Places to Eat Across Cities</h2>
				<div className="row">
					<div className="col-lg-3 col-md-6 mb-lg-0 mb-sm-2 mb-md-3 mb-sm-3 mb-2">
						<CityComponent cityName='Chinese Restaurant Near Me' />
					</div>
					<div className="col-lg-3 col-md-6 mb-lg-0 mb-sm-2 mb-md-3 mb-sm-3 mb-2">
						<CityComponent cityName='SouthIndian Restaurant Near Me' />
					</div>
					<div className="col-lg-3 col-md-6 mb-lg-0 mb-sm-2 mb-md-3 mb-sm-3 mb-2">
						<CityComponent cityName='Indian Restaurant Near Me' />
					</div>
					<div className="col-lg-3 col-md-6">
						<CityComponent cityName='Kerala Restaurant Near Me' />
					</div>
				</div>
				<div className="row">
					<div className="col-lg-3 col-md-6 mb-lg-0 mb-sm-2 mb-md-3 mb-sm-3 mb-2">
						<CityComponent cityName='Korean Restaurant Near Me' />
					</div>
					<div className="col-lg-3 col-md-6 mb-lg-0 mb-sm-2 mb-md-3 mb-sm-3 mb-2">
						<CityComponent cityName='North Indian Restaurant Near Me' />
					</div>
					<div className="col-lg-3 col-md-6 mb-lg-0 mb-sm-2 mb-md-3 mb-sm-3 mb-2">
						<CityComponent cityName='Seafood Restaurant Near Me' />
					</div>
					<div className="col-lg-3 col-md-6">
						<CityComponent cityName='Bengali Restaurant Near Me' />
					</div>
				</div>
				<div className="row">
					<div className="col-lg-3 col-md-6 mb-lg-0 mb-sm-2 mb-md-3 mb-sm-3 mb-2">
						<CityComponent cityName='Punjabi Restaurant Near Me' />
					</div>
					<div className="col-lg-3 col-md-6 mb-lg-0 mb-sm-2 mb-md-3 mb-sm-3 mb-2">
						<CityComponent cityName='Italian Restaurant Near Me' />
					</div>
					<div className="col-lg-3 col-md-6 mb-lg-0 mb-sm-2 mb-md-3 mb-sm-3 mb-2">
						<CityComponent cityName='Andhra Restaurant Near Me' />
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

export default CusinesComponent