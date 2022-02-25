// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS9TS_L3Gll7mipQGGh75FU5z_6qx3Zpg",
  authDomain: "dietetica-37a7a.firebaseapp.com",
  projectId: "dietetica-37a7a",
  storageBucket: "dietetica-37a7a.appspot.com",
  messagingSenderId: "362253947915",
  appId: "1:362253947915:web:598810320c6f7778a6230e",
  measurementId: "G-5977G9954S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)