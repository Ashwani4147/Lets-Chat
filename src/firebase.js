
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCeLdJ455intgJ5UHPf4DOEaqYEHo_VWi4",
  authDomain: "chat-bac61.firebaseapp.com",
  projectId: "chat-bac61",
  storageBucket: "chat-bac61.appspot.com",
  messagingSenderId: "911827858447",
  appId: "1:911827858447:web:b998129f3c4282cefadf7a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();