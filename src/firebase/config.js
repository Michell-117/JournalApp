// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChCJ5Yo6ysu5kSqMZVeOO9mIgypb7OLqY",
  authDomain: "journalapp-742ae.firebaseapp.com",
  projectId: "journalapp-742ae",
  storageBucket: "journalapp-742ae.appspot.com",
  messagingSenderId: "171079088847",
  appId: "1:171079088847:web:ce62a7e23f32a266d115ba"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getAuth( FirebaseApp );