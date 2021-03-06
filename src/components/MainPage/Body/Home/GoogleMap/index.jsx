import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const MapContainer = () => {

  const [selected, setSelected] = useState({});
  const [currentPosition, setCurrentPosition] = useState({});


  const defaultCenter = {
    lat: 40.73097610496431, lng: -73.99342474701751
  }

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const currentPosition = {
      lat: latitude,
      lng: longitude
    }
    setCurrentPosition(currentPosition);
  }

  const onMarkerDragEnd = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setCurrentPosition({ lat, lng })
  };

  const mapStyles = () => {
    return {
      marginTop: "-20px",
      height: "70vh",
      width: "100%",
      marginBottom: "10%",
      position: "fixed",
    }
  }


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  })

  return (
    <>
      <LoadScript
        googleMapsApiKey='AIzaSyDt63q5tdWn24WfuIZ8XElCL7L849lpqhs'
      >
        <GoogleMap
          mapContainerStyle={mapStyles()}
          draggable={true}
          zoom={17}
          center={defaultCenter}
        >
          {
            selected.location ?
            <Marker
              position={defaultCenter}
              draggable={false} /> : null
            }
          {
            selected.location ?
            <InfoWindow
              position={selected.location}
              onCloseClick={() => setSelected({})} /> : null
          }
        </GoogleMap>
      </LoadScript>
    </>
  )
}

export default MapContainer;