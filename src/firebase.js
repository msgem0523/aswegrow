import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDOA9MDxX-x-DtvLFe0BNx8mcLsSZZor-0",
    authDomain: "aswegrow-c2ae2.firebaseapp.com",
    projectId: "aswegrow-c2ae2",
    storageBucket: "aswegrow-c2ae2.appspot.com",
    messagingSenderId: "1063423167004",
    appId: "1:1063423167004:web:3907b41a373adc4bf7edd9",
    measurementId: "G-XD4FWKB3W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };