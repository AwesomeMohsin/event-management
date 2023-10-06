// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK6DNDwg0Q65vhoZeK6cxk6U7E2-dMt1s",
  authDomain: "user-email-password-auth-cbbe6.firebaseapp.com",
  projectId: "user-email-password-auth-cbbe6",
  storageBucket: "user-email-password-auth-cbbe6.appspot.com",
  messagingSenderId: "535983340732",
  appId: "1:535983340732:web:c0b48d87a7271b53ede4b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

