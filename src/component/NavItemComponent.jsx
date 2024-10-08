import React from 'react'
import "../component/navbarComponent.css"

const NavItemComponent = ({name, svgElement}) => {
  return (
    <>
        <div className="nav-item">
            <div className="listOfNavItems ms-md-0">
                <>{svgElement}</>
                <h5>{name}</h5>
            </div>
        </div>
    </>
  )
}

export default NavItemComponent;