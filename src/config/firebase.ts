// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider} from "firebase/auth" 
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXvk8Fz52_caX79BPiRbgrINmYona4r9g",
  authDomain: "react-project-79cbd.firebaseapp.com",
  projectId: "react-project-79cbd",
  storageBucket: "react-project-79cbd.appspot.com",
  messagingSenderId: "979974276211",
  appId: "1:979974276211:web:1e675d8f67eedd409f1606"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)