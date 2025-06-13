import { createSlice } from "@reduxjs/toolkit";

const tripsSlice = createSlice({
    name: 'trips',
    initialState: [],
    reducers: {
        addTrip: (state, action) => {
            state.push({
                id: Date.now(), // unique ID for trip
                ...action.payload // includes 'countries', 'fromDate' and 'toDate'
            });
        },
        editTrip: (state, action) => {
            const { id, countries, fromDate, toDate } = action.payload; // destructuring data from payload
            const trip = state.find((t) => t.id === id); // finding the trip in state by matching the id

            if (trip) { //update value
                trip.countries = countries;
                trip.fromDate = fromDate;
                trip.toDate = toDate;
            }
        }
    }
});

// exporting action and reducer
export const { addTrip, editTrip } = tripsSlice.actions;
export default tripsSlice.reducer;