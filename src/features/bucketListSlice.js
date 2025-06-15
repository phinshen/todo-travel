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
        }
    }
});

export const { addBucketList } = bucketListSlice.actions;
export default bucketListSlice.reducer;