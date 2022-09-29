import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAx0KN8dJUw3TzD-Bc6rturlkxeLp9PS9g",
  authDomain: "mnba-9bafe.firebaseapp.com",
  databaseURL: "https://mnba-9bafe-default-rtdb.firebaseio.com",
  projectId: "mnba-9bafe",
  storageBucket: "mnba-9bafe.appspot.com",
  messagingSenderId: "813078938672",
  appId: "1:813078938672:web:1a1a6ec5f030c6d13719f5"
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const storage = getStorage(app);