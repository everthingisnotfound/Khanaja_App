import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Geosuggest from '@ubilabs/react-geosuggest';
import '@ubilabs/react-geosuggest/style.css';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import './Location.css';

const [isLoading, setIsLoading] = useState(false);

const Location = () => {
    const navigate = useNavigate();
    const [selectedLocation, setSelectedLocation] = useState(null);

    const handleSuggestSelect = (suggest) => {
        if (suggest && suggest.location) {
            setIsLoading(true);
            setSelectedLocation(suggest.location);
            setIsLoading(false);
        }
    };

    const openRestaurantDetails = () => {
        if (selectedLocation) {
            window.open(`/shop?lat=${selectedLocation.lat}&lng=${selectedLocation.lng}`, '_blank');
        } else {
            alert('Please select a location before viewing nearby restaurants.');
        }
    };


    return (
        <div className="container">
            <div className="header">Find a Restaurant</div>
            <div className="form">
                <div className="form-label">Enter a location:</div>
                <Geosuggest
                    onSuggestSelect={handleSuggestSelect}
                    placeholder="Start typing..."
                />
            </div>
            <div className="map-display">
                {isLoading ? (
                    <div className="loader">
                        <Loader type="ThreeDots" color="#4285f4" height={100} width={100} />
                    </div>
                ) : (
                    <Map center={[selectedLocation?.lat || 0, selectedLocation?.lng || 0]} zoom={15}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {selectedLocation && (
                            <Marker position={[selectedLocation.lat, selectedLocation.lng]}>
                                <Popup>
                                    <div>
                                        <p>Selected Location</p>
                                        <p>Latitude: {selectedLocation.lat}</p>
                                        <p>Longitude: {selectedLocation.lng}</p>
                                        <button className="link-button" onClick={openRestaurantDetails}>View Nearby Restaurants</button>
                                    </div>
                                </Popup>
                            </Marker>
                        )}
                    </Map>
                )}
            </div>
        </div>
    );

};

export default Location;
