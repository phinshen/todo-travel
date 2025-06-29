import { configureStore } from "@reduxjs/toolkit";
import tripsReducer from "./features/tripsSlice";
import packingListReducer from "./features/packingListSlice";
import bucketListReducer from "./features/bucketListSlice";
import documentAndBookingListReducer from "./features/documentAndBookingListSlice";
import authReducer from "./features/authSlice";

// -------------------------------------------- load saved trips from localStorage ---------------------------------------------------
const loadFromLocalStorage = () => { //localStorage ONLY store STRINGS, not ARRAY. Therefore, convert is needed
    try { // checks if any saved data in the browser
        const trips = localStorage.getItem("trips");
        const packingList = localStorage.getItem("packingList");
        const bucketList = localStorage.getItem("bucketList");
        const documentAndBookingList = localStorage.getItem("documentAndBookingList")
        const auth = localStorage.getItem("auth");

        return { //if found, convert strings to array
            trips: trips ? JSON.parse(trips) : [],
            packingList: packingList ? JSON.parse(packingList) : [],
            bucketList: bucketList ? JSON.parse(bucketList) : [],
            documentAndBookingList: documentAndBookingList ? JSON.parse(documentAndBookingList) : [],
            auth: auth ? JSON.parse(auth) : { token: null, user: null },
        }

    } catch {
        return { // if error, return empty list
            trips: [],
            packingList: [],
            bucketList: [],
            documentAndBookingList: [],
            auth: { token: null, user: null },
        }
    }
};

// ------------------------------------------ saving trips to localStorage when they change----------------------------------------
const saveFromLocalStorage = (state) => {
    try {
        const tripsData = JSON.stringify(state.trips); // extract the trips part and convert array to strings
        const packingListData = JSON.stringify(state.packingList);
        const bucketListData = JSON.stringify(state.bucketList);
        const documentAndBookingListData = JSON.stringify(state.documentAndBookingList);
        const authData = JSON.stringify(state.auth);

        localStorage.setItem("trips", tripsData); // store it in browser
        localStorage.setItem("packingList", packingListData);
        localStorage.setItem("bucketList", bucketListData);
        localStorage.setItem("documentAndBookingList", documentAndBookingListData);
        localStorage.setItem("auth", authData);
    } catch (error) {
        console.error("Failed to save trips", error);
    }
};

// ------------------------------------------- setting up Redux store---------------------------------------------------
const store = configureStore({
    reducer: {
        trips: tripsReducer, // store all trip data in 'trips' section
        packingList: packingListReducer,
        bucketList: bucketListReducer,
        documentAndBookingList: documentAndBookingListReducer,
        auth: authReducer,
    },
    preloadedState: loadFromLocalStorage() // load from localStorage at the start
});

// -------------------------------------------- Automatically save to localStorage every time the store changes --------------------------------------
store.subscribe(() => {
    saveFromLocalStorage(store.getState()); //get full store and save it
})

export default store;