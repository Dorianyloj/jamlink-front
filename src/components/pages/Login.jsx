import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, clearError, fetchUserProfile } from "../../store";

import { LoginOrganisms } from "../organisms";

const Login = ({ theme }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("password");

  const authStatus = useSelector((state) => state.auth.status);
  const authError = useSelector((state) => state.auth.errors);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const userStatus = useSelector((state) => state.auth.userStatus);

  useEffect(() => {
    if (isAuthenticated && !user && userStatus === "idle") {
      dispatch(fetchUserProfile());
    }
  }, [isAuthenticated, user, userStatus, dispatch]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      dispatch(loginUser({ username, password }));
    }
  };

  const handleLogout = () => {
    dispatch({ type: 'auth/logout' });
  };

  const handleClearError = () => {
    dispatch(clearError());
  };

  if (isAuthenticated) {
    return (
      <LoginOrganisms.UserProfile
        theme={theme}
        user={user}
        userStatus={userStatus}
        onLogout={handleLogout}
      />
    );
  }

  return (
    <LoginOrganisms.LoginForm
      theme={theme}
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
      authError={authError}
      onClearError={handleClearError}
      onLogin={handleLogin}
      loading={authStatus === "pending"}
    />
  );
};

export default Login;