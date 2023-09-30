import React, { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase.init";

export const AuthContect = createContext();

const UserProvider = ({ children }) => {

  const auth = getAuth(app);
  const [user,setUser]=useState(null)

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
        setUser(user)
      } else {
        // User is signed out
        // ...
      }
    });
  })

  const createUserWithEmail=(email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const googleAuth=(provider)=>{
    return signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      setUser(user)
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }
  
  const SignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      setUser('')
    }).catch((error) => {
      // An error happened.
    });
  }

  const authInfo = { googleAuth,user,SignOut,createUserWithEmail };
  return (
    <AuthContect.Provider value={authInfo}>{children}</AuthContect.Provider>
  );
};

export default UserProvider;
