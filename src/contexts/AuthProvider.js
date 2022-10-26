import React, { createContext } from 'react';
import app from "../Firebase/Firebase.Config"
import {getAuth, signInWithPopup} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);






const AuthProvider = ({children}) => {

const user = {name: "enam"}


   

const LoginWithGoogle =(googleProvider)=>{

    return signInWithPopup(auth, googleProvider)
}

const LoginWitGithub =(gitHubProvider)=>{

    return signInWithPopup(auth, gitHubProvider)
}









const authInfo = {
    
    user,
    LoginWitGithub,
    
    
    LoginWithGoogle}

    return (
       <AuthContext.Provider   value={authInfo}> 
       
       {children}
       
       </AuthContext.Provider>
    );
};

export default AuthProvider;