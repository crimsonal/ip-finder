// Map.js

import React, {useEffect, useState} from 'react'
import ReactMapGL, {Marker} from 'react-map-gl/mapbox'
import {RiUserLocationFill} from 'react-icons/ri'

const API_KEY = 'pk.eyJ1IjoiY3JpbXNvbmFsIiwiYSI6ImNtYXJlejJ0YjA5OHIyam9lOGJ0bXQ4emEifQ.vepi74T23dx5Y8sL9ifJTA'

const Map = ({lat, lon}) => {

    // Setting up the initial viewport of the map
    const [viewport, setViewport] = useState({
        latitude: lat,
        longitude: lon,
        zoom: 14,
        bearing: 0,
        pitch: 0,
        width: '100%',
        height: '100%'
    })

    // Viewport re-renders whenever latitude and longitude changes
    useEffect(() => {
        setViewport({...viewport, latitude: lat, longitude: lon})
    }, [lat, lon])

    return (
        <div className="map">
            <ReactMapGL
            mapboxAccessToken={API_KEY}
            {...viewport}
            onViewportChange={(viewport) => setViewport(viewport)}
            key="mapbox"
            mapStyle="mapbox://styles/mapbox/streets-v11">
                <Marker latitude={lat} longitude={lon}>
                    <div className="mark">
                        <RiUserLocationFill size="25px" color="blue" />
                    </div>
                </Marker>
            </ReactMapGL>
        </div>
    )
}

export default Map