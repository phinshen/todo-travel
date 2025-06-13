import { configureStore } from "@reduxjs/toolkit";
import tripsReducer from "./features/tripsSlice";

// load saved trips from localStorage 
const loadFromLocalStorage = () => { //localStorage ONLY store STRINGS, not ARRAY. Therefore, convert is needed
    try {
        const data = localStorage.getItem("trips"); // checks if any saved trips in the browser
        return data ? JSON.parse(data) : []; //if found, convert strings to array
    } catch {
        return []; // if error, return empty list
    }
};

// saving trips to localStorage when they change
const saveFromLocalStorage = (state) => {
    try {
        const data = JSON.stringify(state.trips); // extract the trips part and convert array to strings
        localStorage.setItem("trips", data); // store it in browser
    } catch (error) {
        console.error("Failed to save trips", error);
    }
};

// setting up Redux store
const store = configureStore({
    reducer: {
        trips: tripsReducer // store all trip data in 'trips' section
    },
    preloadedState: {
        trips: loadFromLocalStorage() // load from localStorage at the start
    }
});

// Automatically save to localStorage every time the store changes
store.subscribe(() => {
    saveFromLocalStorage(store.getState()); //get full store and save it
})

export default store;