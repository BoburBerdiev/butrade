import { createSlice } from "@reduxjs/toolkit";

const basket = createSlice({
    name: 'basket' ,
    initialState: {
        basket: [],
    },
    reducers: {
        changleBasket:(state , {payload}) => {
            // state.basket.find(product)
            state.basket.push(payload)
            if(state.basket.find(payload.id)) {

            }

            // function product(product , payloudID) {
            //     return product.id === payloudID;
            // }
        }
    }
})



export const {changleBasket} = basket.actions
export default basket.reducer

