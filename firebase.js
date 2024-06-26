import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { apiKey } from "./key";

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "notes-app-react-b9666.firebaseapp.com",
  projectId: "notes-app-react-b9666",
  storageBucket: "notes-app-react-b9666.appspot.com",
  messagingSenderId: "436810547951",
  appId: "1:436810547951:web:590bd956e205666141911a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")