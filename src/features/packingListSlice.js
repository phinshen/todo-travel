import { createSlice } from "@reduxjs/toolkit";

const packingListSlice = createSlice({
    name: 'packingList',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push({
                id: Date.now(),
                item: action.payload,
                packed: false
            });
        },
        togglePacked: (state, action) => {
            const item = state.find(i => i.id === action.payload);
            if (item) {
                item.packed = !item.packed;
            }
        }
    }
})

export const { addItem, togglePacked } = packingListSlice.actions;
export default packingListSlice.reducer;