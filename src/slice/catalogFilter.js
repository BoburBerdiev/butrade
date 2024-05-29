import { createSlice } from "@reduxjs/toolkit";

const catalogFilter = createSlice({
    name: 'catalogFilter' ,
    initialState: {
        filter: null,
        queryByOrder : 'order_by='
    },
    reducers: {
        changleFiter: (state,{payload} ) =>{
            state.filter = payload
        },
        changleQueryByOrder: (state,{payload} ) =>{
            state.queryByOrder = `order_by=${payload}`
        },
    }
})



export const {changleFiter , changleQueryByOrder} = catalogFilter.actions
export default catalogFilter.reducer