import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    user: null
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload.token,
                state.user = action.payload.user;
        },
        logout: (state) => {
            state.token = null;
            state.user = null;
            localStorage.removeItem("auth");
        },
        signup: (state, action) => {
            state.token = action.payload.token,
                state.user = action.payload.user;
        }
    }
});

export const { login, logout, signup } = authSlice.actions;
export default authSlice.reducer;