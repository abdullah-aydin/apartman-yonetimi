import React, { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";
// loading
import Loading from "../components/Loading";

export const AuthContext = createContext(null);

export const AuthProvider = (props) => {
  const [userState, setUserState] = useState(null);
  const [authPending, setAuthPending] = useState(true);

  const signIn = (username, password) => {
    return auth.signInWithEmailAndPassword(username, password);
  };

  const signUp = (username, password) => {
    return auth.createUserWithEmailAndPassword(username, password);
  };

  const signOut = () => auth.signOut();

  useEffect(() => {
    return auth.onAuthStateChanged((userAuth) => {
      setUserState(userAuth);
      setAuthPending(false);
    });
  }, []);

  if (authPending) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider
      value={{
        signIn: signIn,
        signUp: signUp,
        signOut: signOut,
        userState: userState,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
