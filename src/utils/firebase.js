import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhdyaxFCWKyOdjgXpz8rWEmQaRNBbfQ1s",
  authDomain: "outlet-b29df.firebaseapp.com",
  projectId: "outlet-b29df",
  storageBucket: "outlet-b29df.appspot.com",
  messagingSenderId: "1021318260305",
  appId: "1:1021318260305:web:a840634954b4b79c6b7a70",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();

export default app;
