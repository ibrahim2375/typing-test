
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// import { getStorage } from "firebase/storage"
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need

const firebaseConfig = {
    apiKey: "AIzaSyCLdDF-S40y5ZfiPZyUZOhSiX3z8_kHgAY",
    authDomain: "mailfromsite-25003.firebaseapp.com",
    projectId: "mailfromsite-25003",
    storageBucket: "mailfromsite-25003.appspot.com",
    messagingSenderId: "694380648533",
    appId: "1:694380648533:web:a0eea4c9682cc0f9ba9cdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
export const db = getFirestore(app);
// export const storage = getStorage(app);
