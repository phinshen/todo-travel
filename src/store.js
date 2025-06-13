import { configureStore } from "@reduxjs/toolkit";
import tripsReducer from "./features/tripsSlice";
import packingListReducer from "./features/packingListSlice";

// load saved trips from localStorage 
const loadFromLocalStorage = () => { //localStorage ONLY store STRINGS, not ARRAY. Therefore, convert is needed
    try { // checks if any saved data in the browser
        const trips = localStorage.getItem("trips");
        const packingList = localStorage.getItem("packingList");

        return { //if found, convert strings to array
            trips: trips ? JSON.parse(trips) : [],
            packingList: packingList ? JSON.parse(packingList) : []
        }

    } catch {
        return { // if error, return empty list
            trips: [],
            packingList: []
        }
    }
};

// saving trips to localStorage when they change
const saveFromLocalStorage = (state) => {
    try {
        const tripsData = JSON.stringify(state.trips); // extract the trips part and convert array to strings
        const packingListData = JSON.stringify(state.packingList);

        localStorage.setItem("trips", tripsData); // store it in browser
        localStorage.setItem("packingList", packingListData);
    } catch (error) {
        console.error("Failed to save trips", error);
    }
};

// setting up Redux store
const store = configureStore({
    reducer: {
        trips: tripsReducer, // store all trip data in 'trips' section
        packingList: packingListReducer
    },
    preloadedState: loadFromLocalStorage() // load from localStorage at the start
});

// Automatically save to localStorage every time the store changes
store.subscribe(() => {
    saveFromLocalStorage(store.getState()); //get full store and save it
})

export default store;