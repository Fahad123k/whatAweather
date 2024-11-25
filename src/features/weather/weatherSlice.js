import { createSlice } from '@reduxjs/toolkit'

// const apiKey = import.meta.env.VITE_WEATHER_API;

const initialState = {
  value: 28,
  cityInfo:{
    name:'New Delhi',
   latitude: "28.70405920",
    longitude: "77.10249020",
    stateCode:"DL",
    countryCode:"IN"
  },

  weatherInfo:{}
}

export const weatherSlice=createSlice({
    name:"weather",
    initialState,
    reducers:{
        setCityInfo: (state,action)=>{
            state.cityInfo=action.payload
            // const weatherData= await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${state.cityInfo.latitude}&lon=${state.cityInfo.longitude}&appid=${apiKey}`);
            // console.log(weatherData)
        },
        weatherInfo:(state,actions)=>{
            state.weatherInfo=actions.payload
        }
    }
})


export const {weatherInfo} =weatherSlice.actions;

export default weatherSlice.reducer;