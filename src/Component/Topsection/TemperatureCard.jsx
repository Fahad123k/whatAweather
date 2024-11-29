import React, { useEffect, useState } from "react";
import axios from "axios";
import WeeklyContainer from "../Bottomsection/WeeklyContainer";

// Temperature icons
// import { IoLocationOutline, IoIosRainy } from "react-icons/io";
import { IoLocationSharp } from 'react-icons/io5';
import weather from "../../assets/weather.png";
import { FaCalendarAlt } from "react-icons/fa";
import SearchCity from "./SearchCity";
const API_KEY = import.meta.env.VITE_WEATHER_API;

// useSelector and useDispatch
import { useDispatch, useSelector } from "react-redux";
import { weatherInfo as WeatherSliceFun } from "../../features/weather/weatherSlice";

const TemperatureCard = () => {
  const weatherInfo = useSelector((state) => state.weather.weatherInfo);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [temp, setTemp] = useState("00"); // Default temp value
  const [isKelvin, setIsKelvin] = useState(true); // Track unit

  const dispatch = useDispatch();

  // Convert temp units
  const changeTempUnit = () => {
    if (isKelvin) {
      // Convert to Celsius
      const tempCelsius = Math.round(temp - 273.15);
      setTemp(tempCelsius); // Update temperature in Celsius
      setIsKelvin(false); // Switch to Celsius
      setSelectedOption("Celsius");
    } else {
      // Convert back to Kelvin
      const tempKelvin = Math.round(temp + 273.15);
      setTemp(tempKelvin); // Update temperature in Kelvin
      setIsKelvin(true); // Switch to Kelvin
      setSelectedOption("Kelvin");
    }
  };
  // Fetch weather data
  const fetchWeather = async (CITY_NAME) => {
    setLoading(true);
    setError(null);

    try {
      if (!API_KEY) {
        throw new Error("API key not found");
      }
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`
      );
      dispatch(WeatherSliceFun(response.data));
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("Failed to fetch weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Update temp and other weather info whenever weatherInfo changes
  useEffect(() => {
    if (weatherInfo?.main?.temp) {
      setTemp(weatherInfo.main.temp); // Set temp to the new city's value in Kelvin
      setIsKelvin(true); // Reset to Kelvin
    }
  }, [weatherInfo]);

  // Initial fetch
  useEffect(() => {
    fetchWeather("New Delhi");
  }, []);

  const [selectedOption, setSelectedOption] = useState("Celsius");

  const handleChange = () => {
    setSelectedOption((prev) => (prev === "Celsius" ? "Kelvin" : "Celsius"));
    changeTempUnit();
  };

  // Get weather icon URL
  const weatherIconUrl = weatherInfo?.weather?.[0]?.icon
    ? `https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`
    : null;

  // Get weather description
  const weatherDescription = weatherInfo?.weather?.[0]?.description || "Unknown weather condition";

  // // Convert temp to Celsius or Kelvin dynamically
  // const displayTemp = isKelvin
  //   ? Math.round(temp) // Kelvin
  //   : Math.round(temp - 273.15); // Celsius

  return (
    <div className="temperature-card min-h-[100px] rounded-xl md:col-span-3 sm:col-span-6 sm:row-span-1 flex flex-col text-xl m-1 p-2">
      <SearchCity />
      <div className="temp-content flex flex-col mt-1 ml-2 justify-around">
        <div className="cloud pb-2 flex flex-row items-center justify-between p-2">
          <img className="h-20" src={weather} alt="Weather" />
          <div className="font-semibold text-4xl">
            <h1>
              {Math.round(temp) ?? "00"}
              <span>&#176;</span>
              {isKelvin ? "K" : "C"}
            </h1>
          </div>
        </div>

        {/* Weather Icon and Status */}
        <div className="flex flex-row items-center">
          {weatherIconUrl && (
            <img src={weatherIconUrl} alt={weatherDescription} className="h-12 w-12 mr-3" />
          )}
          <p className="font-semibold">{weatherDescription}</p>
        </div>
      </div>

      <div className="h-[0.1rem] bg-gray-600 w-full m-2"></div>
      <div className="detail-date h-full flex justify-between flex-row p-2">
        <div className="items-end w-full">
          <div className="flex items-center justify-between">
            <div className="city flex items-center">
              <IoLocationSharp className="fill-current" size={20} />
              <span className="ml-2">
                {weatherInfo?.name ?? "Test City"},{" "}
                {weatherInfo?.sys?.country ?? "Test Country"}
              </span>
            </div>
            <div className="flex">
              <button
                onClick={handleChange}
                className="p-2 rounded-lg border border-gray-300 shadow-sm outline-none bg-transparent text-sm"
              >
                {selectedOption}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="detail-date h-full flex justify-between flex-row items-end p-2">
        <div className="items-center w-full">
          <div className="flex items-center">
            <FaCalendarAlt className="fill-current" size={20} />
            <div className="ml-2 flex w-full justify-between items-center">
              <div className="time flex font-bold">
                Monday ,<span> 24 July 2025</span>
              </div>
              <div className="time font-bold text-xl">05:05 PM</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:block md:hidden lg:hidden mt-2">
        <WeeklyContainer />
      </div>
    </div>
  );
};

export default TemperatureCard;
