import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDInMds6KPm4pUhU-C1pMvXpAwxc7PGdiU",
  authDomain: "chat-react-62c38.firebaseapp.com",
  projectId: "chat-react-62c38",
  storageBucket: "chat-react-62c38.appspot.com",
  messagingSenderId: "133784404589",
  appId: "1:133784404589:web:02367c470721838a08b564",
  measurementId: "G-Z5TJ2PN8CL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const db = getFirestore();
// Create a root reference
export const storage = getStorage();
const analytics = getAnalytics(app);
