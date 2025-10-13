import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAXFpRlXks0GDpON3leKpTLXlu_to57daI",
  authDomain: "codesentry-8a04c.firebaseapp.com",
  projectId: "codesentry-8a04c",
  storageBucket: "codesentry-8a04c.firebasestorage.app",
  messagingSenderId: "483971436353",
  appId: "1:483971436353:web:0014107484e8c778fa5bc0",
  measurementId: "G-ZDF4SKVR2E"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };