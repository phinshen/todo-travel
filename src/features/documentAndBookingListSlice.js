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
        },
        editDocumentAndBookingList: (state, action) => {
            const { id, title, bookingNumber } = action.payload;
            const documentAndBookingList = state.find((document) => document.id === id);

            if (documentAndBookingList) {
                documentAndBookingList.title = title;
                documentAndBookingList.bookingNumber = bookingNumber;
            }
        },
        deleteDocumentAndBookingList: (state, action) => {
            const selectedDocumentAndBookingListId = action.payload.id;
            const newDocumentAndBookingList = state.filter((document) => document.id !== selectedDocumentAndBookingListId)
            return newDocumentAndBookingList;
        }
    }
});

export const { addDocumentAndBookingList, editDocumentAndBookingList, deleteDocumentAndBookingList } = documentAndBookingListSlice.actions;
export default documentAndBookingListSlice.reducer;