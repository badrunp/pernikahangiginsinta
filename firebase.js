// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXoegLhSONNPA1FsZE_pMjaVzMtBMwhuY",
  authDomain: "theweddingmamaneka.firebaseapp.com",
  projectId: "theweddingmamaneka",
  storageBucket: "theweddingmamaneka.appspot.com",
  messagingSenderId: "834858005454",
  appId: "1:834858005454:web:6431ab8ed13a5129aa319f",
  measurementId: "G-9KLWPS4T4B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
