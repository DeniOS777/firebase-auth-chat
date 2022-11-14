import { configureStore, createSlice } from '@reduxjs/toolkit';
import { googleSignIn, setChat } from './chatOperations';

const chatSlice = createSlice({
  name: 'chat',
  initialState: { user: { isAuth: false }, chat: [] },
  extraReducers: {
    [googleSignIn.fulfilled]: (state, { payload }) => {
      payload.isAuth = true;
      state.user = payload;
    },
    [setChat]: (state, { payload }) => {
      state.chat = [...payload];
    },
  },
});

export const store = configureStore({
  reducer: chatSlice.reducer,
});
