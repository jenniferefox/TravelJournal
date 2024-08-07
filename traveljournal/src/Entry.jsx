import React from "react"
import pin from "./assets/marker.svg"


export default function Entry(props) {
  return (
    <div className="entry">
      <div className='entry-location-details'>
        <img src={pin} className="entry-pin"/>
        <a href={`${props.maps_url}`}>{props.location}</a>
        <div className="entry-timerange">{props.timerange}</div>
      </div>
      <h1 className="entry-title">{props.title}</h1>
      <img src={`${props.photo}`} className="entry-image"/>
      <p className="entry-description">{props.details}</p>
    </div>

  )

}
