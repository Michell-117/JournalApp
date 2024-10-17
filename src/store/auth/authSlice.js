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
            
        },
        logout: ( state, payload ) => {
            
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        }
    }
})

export const { login, logout, checkingCredentials } = authSlice.actions    