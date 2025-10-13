// src/utils/firebaseAuth.js
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged // Import onAuthStateChanged for listener
  } from 'firebase/auth';
  import { auth } from './firebase'; // Import the initialized auth instance
  
  const googleProvider = new GoogleAuthProvider();
  
  export const loginWithEmail = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // You can get the JWT token if needed: await userCredential.user.getIdToken();
      return { success: true, user: userCredential.user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };
  
  export const signupWithEmail = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // You can get the JWT token if needed: await userCredential.user.getIdToken();
      return { success: true, user: userCredential.user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };
  
  export const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      // The IdToken can be obtained here if you need to send it to your backend
      // const idToken = await result.user.getIdToken();
      return { success: true, user: result.user };
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData?.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      return { success: false, error: errorMessage, errorCode };
    }
  };
  
  export const firebaseSignOut = async () => {
    try {
      await signOut(auth);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };
  
  // Export the listener for App.js
  export { onAuthStateChanged, auth };