import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null, // token represent the user's session 
    user: null // user object to store user detail (eg. email)
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => { // set token and user from the action payload
            state.token = action.payload.token,
                state.user = action.payload.user;
        },
        logout: (state) => {
            state.token = null; // clear token and user data
            state.user = null;
            localStorage.removeItem("auth"); // remove auth data info from localStorage (if saved)
        },
        signup: (state, action) => { // save token and user on signup
            state.token = action.payload.token,
                state.user = action.payload.user;
        }
    }
});

export const { login, logout, signup } = authSlice.actions;
export default authSlice.reducer;