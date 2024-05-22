import { createSlice } from "@reduxjs/toolkit";

const cardPosition = createSlice({
    name: 'cardPosition' ,
    initialState: {
        isRow: true,
    },
    reducers: {
        changleIsRow: (state,{payload} ) =>{
            state.isRow = payload
        }
    }
})



export const {changleIsRow} = cardPosition.actions
export default cardPosition.reducer