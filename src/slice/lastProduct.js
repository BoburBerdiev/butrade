import { createSlice } from "@reduxjs/toolkit";

const lastProductSlice = createSlice({
  name: 'lastProductSlice' ,
  initialState: {
    lastProductList: []

  },
  reducers: {

    changleLastProductList : (state , {payload}) => {
      const { id } = payload;

      let existingProduct = state.lastProductList?.find(
          (item) => item?.id === id );
      if (!existingProduct) {
        state.lastProductList.push(payload);
        if (state.lastProductList.length > 8) {
          let list =  state.lastProductList.slice(1);
          list.push(payload)
          state.lastProductList = list
        }
      }
    }
  }
})



export const {changleLastProductList} = lastProductSlice.actions
export default lastProductSlice.reducer