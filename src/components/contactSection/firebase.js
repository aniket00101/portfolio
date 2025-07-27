import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBWWiaI-rMq0wYNUsiG87hYn_MRXF8NX7U",
  authDomain: "portfolio-26420.firebaseapp.com",
  projectId: "portfolio-26420",
  storageBucket: "portfolio-26420.firebasestorage.app",
  messagingSenderId: "437850469315",
  appId: "1:437850469315:web:6cac2226c35132c61e4376",
  measurementId: "G-3LMD0F153Z"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
