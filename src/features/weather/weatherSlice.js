import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: 28
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
    }
})


export const { increment,decrement} =weatherSlice.actions;

export default weatherSlice.reducer;