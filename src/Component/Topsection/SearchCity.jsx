import React, { useState, useMemo } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import axios from 'axios';
import { City } from 'country-state-city';
import { useDispatch } from 'react-redux';
import { weatherInfo } from '../../features/weather/weatherSlice';

const API_KEY = import.meta.env.VITE_WEATHER_API;

const SearchCity = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const indiaCountryCode = 'IN';
  const cities = City.getCitiesOfCountry(indiaCountryCode) || []; // Fallback to empty array

  const dispatch = useDispatch();

  // Fetch weather data for the selected city
  const fetchWeather = async (CITY_NAME) => {
    setLoading(true);
    setError(null); // Reset error state
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&appid=${API_KEY}`
      );
      dispatch(weatherInfo(response.data));
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('Failed to fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Memoized filtered cities based on the search term
  const filteredCities = useMemo(() => {
    return searchTerm
      ? cities.filter((city) =>
          city.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : cities;
  }, [searchTerm, cities]);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleCitySelect = (cityInfo) => {
    setSearchTerm(cityInfo.name);
    fetchWeather(cityInfo.name);
    setIsDropdownOpen(false);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setIsDropdownOpen(false);
  };

  return (
    <div className="search relative z-40">
      {/* Search Input */}
      <div
        className="flex items-center bg-gray-50 border-2 border-blue-100 rounded-xl mt-2 mr-2 cursor-pointer"
        role="combobox"
        aria-expanded={isDropdownOpen}
      >
        <input
          type="text"
          name="input-city"
          id="input-city"
          placeholder="Search City..."
          className="w-full focus:outline-none text-sm p-2 rounded bg-gray-50"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onClick={() => !isDropdownOpen && toggleDropdown()} // Open dropdown if not already open
        />
        {searchTerm && (
          <button
            className="text-gray-600 p-1"
            onClick={clearSearch}
            aria-label="Clear search"
          >
            &#10005;
          </button>
        )}
        {isDropdownOpen ? (
          <RiArrowDropUpLine className="m-1 text-gray-600" size={30} />
        ) : (
          <RiArrowDropDownLine className="m-1 text-gray-600" size={30} />
        )}
      </div>

      {/* Dropdown List */}
      {isDropdownOpen && (
        <div
          className="absolute bg-white shadow-lg rounded mt-1 overflow-y-scroll max-h-36 w-full"
          role="listbox"
        >
          {filteredCities.length > 0 ? (
            filteredCities.map((city, index) => (
              <div
                key={index}
                className="p-2 text-sm font-semibold border-b last:border-b-0 cursor-pointer hover:bg-blue-100"
                onClick={() => handleCitySelect(city)}
                role="option"
              >
                {city.name}
              </div>
            ))
          ) : (
            <div className="text-center text-sm text-gray-500 p-2">
              No cities found
            </div>
          )}
        </div>
      )}

      {/* Loading and Error States */}
      {loading && (
        <div className="text-sm text-blue-500 mt-2">Fetching weather data...</div>
      )}
      {error && (
        <div className="text-sm text-red-500 mt-2">{error}</div>
      )}
    </div>
  );
};

export default SearchCity;
