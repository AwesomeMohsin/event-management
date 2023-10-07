// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHsyDRStUExFoUPm8gdfXU3gOSjWn0YVA",
  authDomain: "event-management-9515e.firebaseapp.com",
  projectId: "event-management-9515e",
  storageBucket: "event-management-9515e.appspot.com",
  messagingSenderId: "346188021992",
  appId: "1:346188021992:web:ebe8623d7fbe8fdfc8c95d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

