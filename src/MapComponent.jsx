// src/components/MapComponent.jsx
import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const MapUpdater = ({ latlng }) => {
  const map = useMap();

  useEffect(() => {
    if (latlng) {
      map.setView(latlng, 13);
      L.marker(latlng).addTo(map)
        .bindPopup(`Located at: Latitude ${latlng[0]}, Longitude ${latlng[1]}`)
        .openPopup();
    }
  }, [latlng, map]);

  return null;
};

const MapComponent = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyWorkers, setNearbyWorkers] = useState([]);
  const [latlng, setLatlng] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const locateByGeolocation = () => {
      if (mapRef.current) {
        const map = mapRef.current;
        map.locate({ setView: true, maxZoom: 16 });

        const onLocationFound = (e) => {
          setUserLocation(e.latlng);
          fetchNearbyWorkers(e.latlng.lat, e.latlng.lng);
        };

        const onLocationError = (e) => {
          alert(e.message);
        };

        map.on('locationfound', onLocationFound);
        map.on('locationerror', onLocationError);
      }
    };

    locateByGeolocation();
  }, []);

  const fetchNearbyWorkers = (lat, lng) => {
    const apiKey = 'NcmOCi2VsjCOmOGF4vdpkUSa0FAZzQDvCDHpkJ0YsGL0CSs3UGFEgbFomn3UzWkw';
    const apiUrl = `https://example.com/api/gig-workers?lat=${lat}&lng=${lng}&apiKey=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setNearbyWorkers(data.workers))
      .catch(error => console.error('Error fetching workers:', error));
  };

  const handleLocateByLatLng = () => {
    const latitude = parseFloat(document.getElementById('latitude').value);
    const longitude = parseFloat(document.getElementById('longitude').value);

    if (latitude && longitude) {
      const latlng = [latitude, longitude];
      setLatlng(latlng);
      fetchNearbyWorkers(latitude, longitude);
    } else {
      alert('Please enter valid latitude and longitude values.');
    }
  };

  return (
    <div>
      <h1>Find Local Gig Workers</h1>
      <div>
        <label htmlFor="latitude">Latitude:</label>
        <input type="text" id="latitude" placeholder="Enter latitude" />
        <label htmlFor="longitude">Longitude:</label>
        <input type="text" id="longitude" placeholder="Enter longitude" />
        <button onClick={handleLocateByLatLng}>Locate by Coordinates</button>
      </div>
      <MapContainer
        style={{ height: '500px', width: '100%' }}
        center={userLocation || [51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        whenCreated={(map) => { mapRef.current = map; }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapUpdater latlng={latlng} />
        {userLocation && (
          <Marker position={userLocation}>
            <Popup>You are here!</Popup>
          </Marker>
        )}
        {nearbyWorkers.map(worker => (
          <Marker key={worker.id} position={[worker.lat, worker.lng]}>
            <Popup>
              <b>{worker.name}</b><br />
              {worker.profession}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
