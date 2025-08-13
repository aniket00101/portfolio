import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBWhiaI-MtQw9VNUsi687hYh_MRXF8NX7U",
  authDomain: "portfolio-26420.firebaseapp.com",
  projectId: "portfolio-26420",
  storageBucket: "portfolio-26420.appspot.com",
  messagingSenderId: "437850496315",
  appId: "1:437850496315:web:6cca2266c35132c61e4376",
  measurementId: "G-3LMD8F153Z"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
