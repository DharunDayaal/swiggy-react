import React from 'react'
import './citiesComponent.css'

const ExploreComponent = () => {
  return (
    <>
        <div className="cities-container ">
        <h2 className="mb-4 mb-lg-4 mb-md-4 mb-sm-4">Explore Every Restaurants Near Me</h2>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12 mb-4 mb-lg-0 mb-sm-4 mb-md-0">
                    <div className='cities'>
                        <div>
                            Explore Restaurnats Near Me
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <div className='cities'>
                        <div>
                        Explore Top Rated Restaurnats Near Me
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default ExploreComponent