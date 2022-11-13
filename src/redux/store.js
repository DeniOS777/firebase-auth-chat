import { configureStore, createSlice } from '@reduxjs/toolkit';
import { googleSignIn, setChat } from './chatOperations';

const chatSlice = createSlice({
  name: 'chat',
  initialState: { user: { isAuth: false }, chat: {} },
  extraReducers: {
    [googleSignIn.fulfilled]: (state, action) => {
      action.payload.isAuth = true;
      state.user = action.payload;
    },
    [setChat]: (state, action) => {
      state.chat = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: chatSlice.reducer,
});
