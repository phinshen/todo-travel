import { createSlice } from "@reduxjs/toolkit";

const packingListSlice = createSlice({
    name: 'packingList',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push({
                id: Date.now(), // Generate a unique ID based on current time
                item: action.payload, // Item name passed from the component
                packed: false // New items are initially not packed
            });
        },
        togglePacked: (state, action) => {
            const item = state.find(i => i.id === action.payload); // Find the item by ID
            if (item) { // if item exist
                item.packed = !item.packed; // Toggle the packed status [false(unpacked) => true(packed)]
            }
        },
        deleteItem: (state, action) => {
            const selectedItemId = action.payload;
            return state.filter((item) => item.id !== selectedItemId); // create a new array by excluding the unwanted data
        }
    }
})

export const { addItem, togglePacked, deleteItem } = packingListSlice.actions;
export default packingListSlice.reducer;