console.log("I am fire base")

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyADqNGoMurMq-C4xh4h5K9oyDG0jdSPrkw",
    authDomain: "collaborative-notes-app-37c01.firebaseapp.com",
    projectId: "collaborative-notes-app-37c01",
    storageBucket: "collaborative-notes-app-37c01.firebasestorage.app",
    messagingSenderId: "295806680870",
    appId: "1:295806680870:web:c05189fda5792ff8324be7",
    measurementId: "G-ZYM0HLVGW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);