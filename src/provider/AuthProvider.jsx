import React, { Children, createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(loading, user);
  console.log(user);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut = () => {
     return signOut(auth)
      .then(() => {
        alert("Sign-out successful.")
      })
      .catch((error) => {
        alert(error.code);
      });
  };

  useEffect(() => {
    const unsubscride = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscride();
    };
  }, []);
  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const AuthData = {
    user,
    setUser,
    createUser,
    logOut,
    logIn,
    loading,
    setLoading,
    updateUser,
  };
  return (
    <div>
      <AuthContext value={AuthData}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
