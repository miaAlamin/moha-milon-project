
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxFTYPRzJ4oF21A2nJdCQM-6TbG-dL00o",
  authDomain: "moha-milon-project-d9549.firebaseapp.com",
  projectId: "moha-milon-project-d9549",
  storageBucket: "moha-milon-project-d9549.firebasestorage.app",
  messagingSenderId: "490578914114",
  appId: "1:490578914114:web:cbdb6dd2e6f873142ff6db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




export const auth = getAuth(app);
