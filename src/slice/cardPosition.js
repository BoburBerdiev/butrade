import { createSlice } from "@reduxjs/toolkit";

const cardPosition = createSlice({
    name: 'cardPosition' ,
    initialState: {
        isRow: false,
    },
    reducers: {
        changleIsRow: (state,{payload} ) =>{
            state.isRow = payload
        }
    }
})



export const {changleIsRow} = cardPosition.actions
export default cardPosition.reducer