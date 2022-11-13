import { AuthPage } from 'pages/AuthPage';
import { ChatPage } from 'pages/ChatPage';
import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

export const Router = () => {
  const authKey = useSelector(state => state.user.isAuth);

  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route
          index
          element={authKey ? <Navigate to="/chat" /> : <Navigate to="/auth" />}
        />
        <Route
          path="auth"
          element={authKey ? <Navigate to="/chat" /> : <AuthPage />}
        />
        <Route
          path="chat"
          element={!authKey ? <Navigate to="/auth" /> : <ChatPage />}
        />
      </Route>
    </Routes>
  );
};
