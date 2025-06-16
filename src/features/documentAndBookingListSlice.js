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
            const { id, title, bookingNumber } = action.payload; // destructuring data from payload
            const documentAndBookingList = state.find((document) => document.id === id); // finding the documentList in state by matching the id

            if (documentAndBookingList) { //update value
                documentAndBookingList.title = title;
                documentAndBookingList.bookingNumber = bookingNumber;
            }
        },
        deleteDocumentAndBookingList: (state, action) => {
            const selectedDocumentAndBookingListId = action.payload.id; // getting only id from the specific document data
            const newDocumentAndBookingList = state.filter((document) => document.id !== selectedDocumentAndBookingListId) // create a new array by excluding the unwanted data
            return newDocumentAndBookingList; // replacing old state with flitered array
        }
    }
});

export const { addDocumentAndBookingList, editDocumentAndBookingList, deleteDocumentAndBookingList } = documentAndBookingListSlice.actions;
export default documentAndBookingListSlice.reducer;