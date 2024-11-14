import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const WeatherMap = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);  // Added loading state
  const [error, setError] = useState(null);      // Added error state


 
  const apiKey = import.meta.env.VITE_WEATHER_API;
  const city = "New Delhi";
  
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        // Fetch weather data for New Delhi
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        
        const data = await response.json();
        setWeather(data);
        setLoading(false);  // Set loading to false once data is fetched
      } catch (error) {
        setError(error.message);
        setLoading(false);  // Set loading to false in case of an error
      }
    };
    
    fetchWeatherData();
  }, [city, apiKey]);

  const position = [28.6139, 77.2090]; // Coordinates for New Delhi

  return (
    <div className="weather-map-container" 
 
    >
      <MapContainer center={position} zoom={10} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          // attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        {weather && (
          <Marker position={position}>
            <Popup>
              <h3>{city} Weather</h3>
              <p>Temperature: {weather.main.temp}°C</p>
              <p>Humidity: {weather.main.humidity}%</p>
              <p>Conditions: {weather.weather[0].description}</p>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default WeatherMap;
