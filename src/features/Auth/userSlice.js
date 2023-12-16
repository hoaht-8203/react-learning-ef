import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';
import StorageKeys from 'components/constants/storage-key';

export const actionRegister = createAsyncThunk('users/register', async (payload) => {
    // call Api to register
    const data = await userApi.register(payload);

    // save data to local storage
    localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

    //return use data
    return data.user;
});

export const actionLogin = createAsyncThunk('users/login', async (payload) => {
    // call Api to register
    const data = await userApi.login(payload);

    // save data to local storage
    localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

    //return use data
    return data.user;
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
        setting: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(actionRegister.fulfilled, (state, action) => {
            state.current = action.payload;
        });
        builder.addCase(actionLogin.fulfilled, (state, action) => {
            state.current = action.payload;
        });
    },
});

const { reducer } = userSlice;
export default reducer; // default export
