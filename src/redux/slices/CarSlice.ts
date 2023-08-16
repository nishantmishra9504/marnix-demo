import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: 'Audi',
    allCars: []
}

export const CarDetails = createSlice({
    name: 'carDetails',
    initialState,
    reducers: {
        setAllCarDetails: (state, action) => {
            state.allCars = action.payload
        }
    }
});

export const { setAllCarDetails } = CarDetails.actions;
export default CarDetails.reducer;