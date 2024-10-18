import { Login } from '@mui/icons-material';
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: 'not-authenticated', // not-authenticated, authenticated, checking
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: ( state, action ) => {
            state.status = 'authenticated'  ;     
            // state.uid = action.;
            // state.email = action.;
            // state.displayName = action.;
            // state.photoURL = action.;
            // state.errorMessage = action.;
        },
        logout: ( state, payload ) => {
            state.status = 'not-authenticated'  ;     
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        }
    }
})

export const { login, logout, checkingCredentials } = authSlice.actions    