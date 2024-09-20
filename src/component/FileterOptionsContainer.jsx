import React from 'react'
import "./onlineDeliveryContainer.css"

const FileterOptionsContainer = ({ filterOptionName, svgName }) => {
  return (
    <div className="filter-container">{filterOptionName} <img src={svgName} /></div>
  )
}

export default FileterOptionsContainer