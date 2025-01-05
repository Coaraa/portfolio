// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbCxQiMlOAvgZBSLLMFArz8XOodrI1o5g",
  authDomain: "portfolio-bd99c.firebaseapp.com",
  projectId: "portfolio-bd99c",
  storageBucket: "portfolio-bd99c.firebasestorage.app",
  messagingSenderId: "935508607542",
  appId: "1:935508607542:web:0653e9ce767b6a91424e97",
  measurementId: "G-25YXGXY56S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

