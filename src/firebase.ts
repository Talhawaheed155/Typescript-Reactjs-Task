import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzisioIvRH5YuYHwV7cI8Gvn-2n4tnEJQ",
  authDomain: "pizza-cloud-v1.firebaseapp.com",
  projectId: "pizza-cloud-v1",
  storageBucket: "pizza-cloud-v1.appspot.com",
  messagingSenderId: "944186497995",
  appId: "1:944186497995:web:888ac27a682f8db40b344e",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
