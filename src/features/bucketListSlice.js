import { createSlice } from "@reduxjs/toolkit";

const bucketListSlice = createSlice({
    name: 'bucketList',
    initialState: [],
    reducers: {
        addBucketList: (state, action) => {
            state.push({
                id: Date.now(),
                ...action.payload
            });
        },
        editBucketList: (state, action) => {
            const { id, countries, targetDate } = action.payload;
            const bucketList = state.find((bucket) => bucket.id === id);

            if (bucketList) {
                bucketList.countries = countries;
                bucketList.targetDate = targetDate;
            }
        },
        deleteBucketList: (state, action) => {
            const selectedBucketListId = action.payload.id;
            const newBucketList = state.filter((bucket) => bucket.id !== selectedBucketListId);
            return newBucketList;
        }
    }
});

export const { addBucketList, editBucketList, deleteBucketList } = bucketListSlice.actions;
export default bucketListSlice.reducer;