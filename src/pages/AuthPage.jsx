import React from 'react';
import { useDispatch } from 'react-redux';
import { googleSignIn } from 'redux/chatOperations';

export const AuthPage = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(googleSignIn())} type="button">
        SignIn by Google
      </button>
    </div>
  );
};
