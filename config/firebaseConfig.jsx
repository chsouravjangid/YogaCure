import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence, onAuthStateChanged } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Your Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEAACqQjQBO9HyEgcjPcqVFuMI_cMCdco",
  authDomain: "tryfirebase-2fa6d.firebaseapp.com",
  projectId: "tryfirebase-2fa6d",
  storageBucket: "tryfirebase-2fa6d.firebasestorage.app",
  messagingSenderId: "1005523804928",
  appId: "1:1005523804928:web:1baefb9c38cb45657a89e5"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),  // ✅ Correct Persistence
});
const db = getFirestore(app);

export { app, auth, db, onAuthStateChanged };
