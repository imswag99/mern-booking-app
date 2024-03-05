import React from 'react'

const PlaceImg = ({place, index=0, className=null}) => {
  if(!place.photos?.length) {
    return '';
  }

  if(!className) {
    className = 'object-cover';
  }

  return (
      <img
        className={className}
        src={"https://mern-booking-app-wl8d.onrender.com/uploads/" + place.photos[index]}
        alt=""
      />
  )
}

export default PlaceImg