import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Geosuggest from '@ubilabs/react-geosuggest';
import '@ubilabs/react-geosuggest/styles.css';
import { Hourglass } from 'react-loader-spinner'; // Use the named export for a specific loader type

import './location.css';

const Location = () => {
    const navigate = useNavigate();
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [googleMapKey, setGoogleMapKey] = useState('YOUR_GOOGLE_MAPS_API_KEY'); // Replace with your Google Maps API Key

    useEffect(() => {
        // Load the Google Maps JavaScript API
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapKey}`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
            // The Google Maps API has been loaded
        };
        document.head.appendChild(script);

        return () => {
            // Clean up the script when the component unmounts
            document.head.removeChild(script);
        };
    }, [googleMapKey]);

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
            <div className="header">Find driver</div>
            <div className="form">
                <div className="form-label">Enter a location:</div>
                <Geosuggest onSuggestSelect={handleSuggestSelect} placeholder="Start typing..." />
            </div>
            <div className="map-display">
                {isLoading ? (
                    <div className="loader">
                        <Hourglass color="#4285f4" height={100} width={100} />
                    </div>
                ) : (
                    <Map center={[selectedLocation?.lat || 0, selectedLocation?.lng || 0]} zoom={15}>
                        <TileLayer
                            url={`https://maps.google.com/maps/vt?lyrs=m&x={x}&y={y}&z={z}`}
                            attribution='<a href="https://maps.google.com/">Google Maps</a>'
                        />
                        {selectedLocation && (
                            <Marker position={[selectedLocation.lat, selectedLocation.lng]}>
                                <Popup>
                                    <div>
                                        <p>Selected Location</p>
                                        <p>Latitude: {selectedLocation.lat}</p>
                                        <p>Longitude: {selectedLocation.lng}</p>
                                        <button className="link-button" onClick={openRestaurantDetails}>
                                            View Nearby Restaurants
                                        </button>
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
