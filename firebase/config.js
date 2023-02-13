import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHd8BM1xlNXzTSbmCMcNaTXMs1ZcrxAtg",
  authDomain: "social-app-8a0c3.firebaseapp.com",
  projectId: "social-app-8a0c3",
  storageBucket: "social-app-8a0c3.appspot.com",
  messagingSenderId: "362952227601",
  appId: "1:362952227601:web:64a7511bde5acc8bc56ab0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const firestore = getFirestore(app);

export const storage = getStorage(app);
