import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCLwkeKy_rztiSJ7Y5rxVp-22zClxGooqc",
    authDomain: "my-portfolio-fe5d4.firebaseapp.com",
    projectId: "my-portfolio-fe5d4",
    storageBucket: "my-portfolio-fe5d4.firebasestorage.app",
    messagingSenderId: "1027257210406",
    appId: "1:1027257210406:web:aaa0760f285d027ddf78e7"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };