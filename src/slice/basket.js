import { createSlice } from "@reduxjs/toolkit";

const basket = createSlice({
    name: 'basket' ,
    initialState: {
        basket: [],
        allCount: 0,
        allProductItemCount:0
    },
    reducers: {


        changleBasket: (state, { payload }) => {
            const {id} = payload
            const findProduct = state.basket?.find((product) => product?.id === id);
            if (findProduct) {
                findProduct.count += 1;
            } else {
                state.basket.push({ ...payload, count: payload.count || 1 });
            }
            state.allCount = state.basket?.length
            let count = 0
            state.basket.map(product => {
                count += product?.count
            })
            state.allProductItemCount = count
        },
        countMinusProduct(state , {payload}) {
            const findProduct = state.basket?.find((product) => product?.id === payload);
            if (findProduct) {
               findProduct?.count > 1 ?
                findProduct.count -= 1:
                   state.basket= state.basket?.filter(product => product?.id !== findProduct.id)

            }
            state.allCount = state.basket.length
            let count = 0
            state.basket.map(product => {
                count += product.count
            })
            state.allProductItemCount = count

        },
        countPlusProduct(state , {payload}) {
            const findProduct = state.basket.find((product) => product.id === payload);
            if (findProduct) {
                findProduct.count += 1;
            }
            state.allCount = state.basket?.length
            let count = 0
            state.basket.map(product => {
                count += product?.count
            })
            state.allProductItemCount = count

        },
        deleteProduct (state , {payload}) {
            const findProduct = state?.basket?.find(product  => product?.id === payload)
            state.basket= state.basket?.filter(product => product.id !== findProduct?.id)
            state.allCount = state.basket?.length

            let count = 0
            state.basket.map(product => {
                count += product?.count
            })
            state.allProductItemCount = count
        },
        clearOrder: (state) => {
            state.basket= []
            state.allCount= 0
            state.allProductItemCount=0
        }

    }
})



export const {changleBasket ,countMinusProduct ,countPlusProduct  ,deleteProduct , clearOrder } = basket.actions
export default basket.reducer

