import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCoqXI6nengV6XMhn0toQuUoTOXyPJ4g4",
  authDomain: "ecommercecoder-9cdb2.firebaseapp.com",
  projectId: "ecommercecoder-9cdb2",
  storageBucket: "ecommercecoder-9cdb2.appspot.com",
  messagingSenderId: "83912770213",
  appId: "1:83912770213:web:4744da5bf99c2c8fdd034c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);