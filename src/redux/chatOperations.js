import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, db } from 'services/firebaseConfig';
import { ref, onValue, set } from 'firebase/database';

const provider = new GoogleAuthProvider();

export const googleSignIn = createAsyncThunk(
  'chat/signin',
  async (_, thunkAPI) => {
    try {
      const response = await signInWithPopup(auth, provider);
      console.log('response', response);
      return {
        name: response.user.displayName,
        email: response.user.email,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setChat = createAction('chat/setChat');

export const getChat = createAsyncThunk('chat/getchat', async (_, thunkAPI) => {
  try {
    const starCountRef = ref(db, 'chat/');
    onValue(starCountRef, snapshot => {
      const data = snapshot.val();
      thunkAPI.dispatch(setChat(data));
      console.log(data);
    });
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const sendMessage = createAsyncThunk(
  'chat/sendmessage',
  async (arg, thunkAPI) => {
    console.log(arg);
    try {
      const postId = Number(Math.random().toFixed(3)) * 1000;
      const user = thunkAPI.getState().user;
      const data = await set(ref(db, `chat/${postId}`), {
        username: user.name,
        email: user.email,
        message: arg,
      });
      console.log(data);
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
