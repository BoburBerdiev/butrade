import { createSlice } from "@reduxjs/toolkit";

const queryParamsSlice = createSlice({
  name: 'queryParamsSlice' ,
  initialState: {
    query: null,
    catalogQuery:null
  },
  reducers: {
    changleQuery: (state,{payload} ) =>{
      state.query = `category_slug=${payload}`
    },
    changleCatalogQuery: (state,{payload} ) =>{
      state.catalogQuery = payload
    }
  }
})



export const {changleQuery , changleCatalogQuery} = queryParamsSlice.actions
export default queryParamsSlice.reducer