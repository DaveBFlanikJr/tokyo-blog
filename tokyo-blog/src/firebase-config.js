// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn_6dgQoMj_1PeBeMQutlICjv21LIzdBE",
  authDomain: "tokyo-blog-88b93.firebaseapp.com",
  projectId: "tokyo-blog-88b93",
  storageBucket: "tokyo-blog-88b93.appspot.com",
  messagingSenderId: "1093458433473",
  appId: "1:1093458433473:web:bddd3da88d79ad71210b40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
