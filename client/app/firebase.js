import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAw0_n5ZyxSmY7nB9pfvdqXCxuz1kg0OWs",
  authDomain: "kgptwebsite.firebaseapp.com",
  projectId: "kgptwebsite",
  storageBucket: "kgptwebsite.appspot.com",
  messagingSenderId: "659079532296",
  appId: "1:659079532296:web:9f7bdbb4fdeb43d341a6bd",
  measurementId: "G-X78N71BGR1"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const storage = getStorage(app)