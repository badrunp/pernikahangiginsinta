// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
 apiKey: "AIzaSyDzlvFFQ6Ht7aXMhG_LYcfv4ZfVAYVfNZY",
 authDomain: "pernikahangiginsinta.firebaseapp.com",
 projectId: "pernikahangiginsinta",
 storageBucket: "pernikahangiginsinta.appspot.com",
 messagingSenderId: "523364447924",
 appId: "1:523364447924:web:0a69ccb24c6cf132b709e1",
 measurementId: "G-VDRFLFE573"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
