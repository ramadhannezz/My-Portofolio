import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLwkeKy_rztiSJ7Y5rxVp-22zClxGooqc",
  authDomain: "my-portfolio-fe5d4.firebaseapp.com",
  projectId: "my-portfolio-fe5d4",
  storageBucket: "my-portfolio-fe5d4.firebasestorage.app",
  messagingSenderId: "1027257210406",
  appId: "1:1027257210406:web:aaa0760f285d027ddf78e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };