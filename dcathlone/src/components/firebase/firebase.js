// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAllgfwKiZq4fpktO4NyfuZANG6weowTM4",
  authDomain: "dcathelone.firebaseapp.com",
  databaseURL: "https://dcathelone-default-rtdb.firebaseio.com",
  projectId: "dcathelone",
  storageBucket: "dcathelone.appspot.com",
  messagingSenderId: "139563185990",
  appId: "1:139563185990:web:6c36462be801604eeed747"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app