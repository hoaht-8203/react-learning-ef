import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';

const actionRegister = createAsyncThunk('users/register', async (payload) => {
    // call Api to register
    const data = await userApi.register(payload);

    // save data to local storage
    localStorage.setItem('access_token', data.jwt);
    localStorage.setItem('user', JSON.stringify(data.user));

    //return use data
    return data.user;
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: {},
        setting: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(actionRegister.fulfilled, (state, action) => {
            state.current = action.payload;
        });
    },
});

const { reducer } = userSlice;
export { actionRegister };
export default reducer; // default export
