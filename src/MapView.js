import React, { useEffect, useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from 'leaflet';

function MapView({ address }) {
    const position = [51.505, -0.09]
    const mapRef = useRef(null);
    const mapInstance = useRef(null);
    
    useEffect(() => {
        if (!mapRef.current || !address) return;
    
        if (!mapInstance.current) {
          mapInstance.current = L.map(mapRef.current).setView([2, ], 13);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapInstance.current);
        }
    
        const fetchLocation = async () => {
          try {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&addressdetails=1`);
            if (response.ok) {
              const data = await response.json();
              if (data.length > 0) {
                const { lat, lon } = data[0];
                // updateMap(lat, lon);
              }
            } else {
              console.error('Failed to fetch location coordinates');
            }
          } catch (error) {
            console.error('Error fetching location coordinates:', error);
          }
        };
    
        fetchLocation();
    
        return () => {
          mapInstance.current.remove();
          mapInstance.current = null;
        };
      }, [address]);
    

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  );
}

export default MapView;
