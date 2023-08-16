import { configureStore } from "@reduxjs/toolkit";
import { RequestHandler } from "@/redux/services/RequestHandler";
import { setupListeners } from '@reduxjs/toolkit/query/react';
import CarDetailsReducer from '../slices/CarSlice';


export const store = configureStore({
    reducer: {
        [RequestHandler.reducerPath]: RequestHandler.reducer,
        carDetails: CarDetailsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(RequestHandler.middleware)
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);