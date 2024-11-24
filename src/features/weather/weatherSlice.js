import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: 28,
  cityInfo:{
    name:'New Delhi',
   latitude: "28.70405920",
    longitude: "77.10249020",
    stateCode:"DL",
    countryCode:"IN"
  }
}

export const weatherSlice=createSlice({
    name:"weather",
    initialState,
    reducers:{

        increment:(state)=>{
            state.value+=1
        },
        decrement:(state)=>{
            state.value-=1
        },

        setCityInfo:(state,action)=>{
            state.cityInfo=action.payload
        },
        
    }
})


export const { increment,decrement,setCityInfo} =weatherSlice.actions;

export default weatherSlice.reducer;