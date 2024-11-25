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
       
        weatherInfo:(state,actions)=>{
            state.weatherInfo=actions.payload
        }
    }
})

// console.log("from store",initialState.weatherInfo)

export const {weatherInfo} =weatherSlice.actions;

export default weatherSlice.reducer;