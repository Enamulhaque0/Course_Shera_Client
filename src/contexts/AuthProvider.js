import React, { createContext } from "react";
import app from "../Firebase/Firebase.Config";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const user = { name: "enam" };

  const LoginWithGoogle = (googleProvider) => {
    return signInWithPopup(auth, googleProvider);
  };

  const LoginWitGithub = (gitHubProvider) => {
    return signInWithPopup(auth, gitHubProvider);
  };

  const createUser = (email,password)=>{

    return createUserWithEmailAndPassword(auth, email,password)
  }

  const signIn = (email, password) => {
 
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const authInfo = {
    user,
    signIn,
    LoginWitGithub,
    createUser,
    LoginWithGoogle,
    updateUserProfile
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
