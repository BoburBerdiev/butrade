'use client'

import {configureStore , combineReducers} from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import basketSlice from '@/slice/basket'
import cardPosition from "@/slice/cardPosition";
import queryParams  from "@/slice/queryParams";
import lastProductSlice  from "@/slice/lastProduct";
import catalogFilter from "@/slice/catalogFilter";


const rootReducer =combineReducers({
    basketSlice, cardPosition , queryParams,lastProductSlice , catalogFilter
})

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer=persistReducer(persistConfig,rootReducer)

const store=configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    devTools: process.env.NODE_ENV !== 'production',
})
export const persistor=persistStore(store)
export default store