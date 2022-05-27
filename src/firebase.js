import { initializeApp } from "firebase/app";
import  {getAuth} from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgA6sxq7DxA59YYo6M8apGU3pMEMPRoHU",
  authDomain: "vb-ecommerce-70158.firebaseapp.com",
  projectId: "vb-ecommerce-70158",
  storageBucket: "vb-ecommerce-70158.appspot.com",
  messagingSenderId: "195636475207",
  appId: "1:195636475207:web:77a0f099ddd68682a8c862"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth();
export const provider = new GoogleAuthProvider();