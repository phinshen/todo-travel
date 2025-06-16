import { createSlice } from "@reduxjs/toolkit";

const bucketListSlice = createSlice({
    name: 'bucketList',
    initialState: [],
    reducers: {
        addBucketList: (state, action) => {
            state.push({
                id: Date.now(), // unique ID for trip
                ...action.payload // includes 'countries', 'fromDate' and 'toDate'
            });
        },
        editBucketList: (state, action) => {
            const { id, countries, targetDate } = action.payload; // destructuring data from payload
            const bucketList = state.find((bucket) => bucket.id === id); // finding the bucketList in state by matching the id

            if (bucketList) { //update value
                bucketList.countries = countries;
                bucketList.targetDate = targetDate;
            }
        },
        deleteBucketList: (state, action) => {
            const selectedBucketListId = action.payload.id; //getting only id from the specific bucketList data
            const newBucketList = state.filter((bucket) => bucket.id !== selectedBucketListId); // create a new array by excluding the unwanted data
            return newBucketList; // replacing old state with flitered array
        }
    }
});

export const { addBucketList, editBucketList, deleteBucketList } = bucketListSlice.actions;
export default bucketListSlice.reducer;