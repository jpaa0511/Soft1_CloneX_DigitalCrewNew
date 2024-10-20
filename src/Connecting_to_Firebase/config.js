import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiLBfIr2_Q9gWCpocCPCpagLO7mTAvV3k",
  authDomain: "clonexdigitalcrew.firebaseapp.com",
  projectId: "clonexdigitalcrew",
  storageBucket: "clonexdigitalcrew.appspot.com",
  messagingSenderId: "274430782915",
  appId: "1:274430782915:web:fb815979187320c3c02176",
  measurementId: "G-QXSVGVS062"
};

// Initialize Firebase
export const FireBaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth(FireBaseApp);