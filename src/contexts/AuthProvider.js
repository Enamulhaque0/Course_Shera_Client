import React, { createContext, useEffect } from "react";
import app from "../Firebase/Firebase.Config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useState } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({ children }) => {
  const [user,setUser]= useState()
  const [loading,setLoding] = useState(true)


  const LoginWithGoogle = (googleProvider) => {
    setLoding(true)
    return signInWithPopup(auth, googleProvider);
  };

  const LoginWitGithub = (gitHubProvider) => {
    setLoding(true)
    return signInWithPopup(auth, gitHubProvider);
  };

  const createUser = (email,password)=>{
    setLoding(true)

    return createUserWithEmailAndPassword(auth, email,password)
  }

  const signIn = (email, password) => {
    setLoding(true)
 
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (profile) => {
    setLoding(true)
    return updateProfile(auth.currentUser, profile);
  };
  const logOut = () => {
    
   

    return signOut(auth);
  };

  useEffect(()=>{


const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{

  
  setUser(currentUser)
  setLoding(false)
  
})
return ()=>{
  unsubscribe()

}


  },[])

  const authInfo = {
    setLoding,
    loading,
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
