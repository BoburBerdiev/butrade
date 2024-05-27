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
import langSlice from '@/slice/lang'
import basketSlice from '@/slice/basket'
import cardPosition from "@/slice/cardPosition";
import queryParams  from "@/slice/queryParams";
import lastProductSlice  from "@/slice/lastProduct";


const rootReducer =combineReducers({
    langSlice,basketSlice, cardPosition , queryParams,lastProductSlice
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