import { createSlice } from "@reduxjs/toolkit";

const documentAndBookingListSlice = createSlice({
    name: 'documentAndBookingList',
    initialState: [],
    reducers: {
        addDocumentAndBookingList: (state, action) => {
            state.push({
                id: Date.now(),
                ...action.payload
            })
        }
    }
});

export const { addDocumentAndBookingList } = documentAndBookingListSlice.actions;
export default documentAndBookingListSlice.reducer;