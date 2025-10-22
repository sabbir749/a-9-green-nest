// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRZ87sq-5zI0lYWeCTlTf-DBDYeDFNJ8s",
  authDomain: "a-9-greennest.firebaseapp.com",
  projectId: "a-9-greennest",
  storageBucket: "a-9-greennest.firebasestorage.app",
  messagingSenderId: "819871971995",
  appId: "1:819871971995:web:efe2523aef4f372e1e643e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);