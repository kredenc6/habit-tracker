import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut 
} from 'firebase/auth';

const apiKey = import.meta.env.REACT_APP_API_KEY;
const firebaseConfig = {
  apiKey,
  authDomain: "habit-tracker-4d7b7.firebaseapp.com",
  projectId: "habit-tracker-4d7b7",
  storageBucket: "habit-tracker-4d7b7.firebasestorage.app",
  messagingSenderId: "403424249269",
  appId: "1:403424249269:web:05a0b9a01d951d2e4d85fc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Auth functions
export const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
};

export const logout = () => signOut(auth);
