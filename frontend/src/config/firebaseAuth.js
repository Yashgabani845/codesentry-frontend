import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from "firebase/auth";
import { auth } from "./firebase";

const googleProvider = new GoogleAuthProvider();
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

// ================= Email Signup
export const signupWithEmail = async (name, email, password, role="candidate") => {
  try {
  
    const res = await fetch(`${BACKEND_URL}/api/auth/email-signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, role })
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Signup failed");

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    return { success: true, user: data.user };

  } catch (error) {
    return { success: false, error: error.message };
  }
};

// ================= Email Login
export const loginWithEmail = async (email, password) => {
  try {
    console.log("while login" , email , password)
    const res = await fetch(`${BACKEND_URL}/api/auth/email-login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Login failed");

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    return { success: true, user: data.user };

  } catch (error) {
    return { success: false, error: error.message };
  }
};

// ================= Google Login/Signup
export const signInWithGoogle = async (role="candidate") => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const idToken = await result.user.getIdToken();

    const res = await fetch(`${BACKEND_URL}/api/auth/firebase-login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken, role })
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Google login failed");

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    return { success: true, user: data.user };

  } catch (error) {
    return { success: false, error: error.message };
  }
};

// ================= Sign Out
export const firebaseSignOut = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export { onAuthStateChanged, auth };
