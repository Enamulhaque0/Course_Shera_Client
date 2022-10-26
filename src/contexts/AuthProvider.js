import React, { createContext, useEffect } from "react";
import app from "../Firebase/Firebase.Config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useState } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({ children }) => {
  const [user,setUser]= useState()
  console.log(user)


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
  const logOut = () => {
   

    return signOut(auth);
  };

  useEffect(()=>{


const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{

  setUser(currentUser)
})
return ()=>{
  unsubscribe()

}


  },[])

  const authInfo = {
    user,
    signIn,
    LoginWitGithub,
    createUser,
    LoginWithGoogle,
    updateUserProfile,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
