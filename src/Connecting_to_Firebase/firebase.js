import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3noR7tw3I5ftNZE7MixznKWLpLvdpzR0",
  authDomain: "clonex-digital-crew-new-public.firebaseapp.com",
  databaseURL:
    "https://clonex-digital-crew-new-public-default-rtdb.firebaseio.com",
  projectId: "clonex-digital-crew-new-public",
  storageBucket: "clonex-digital-crew-new-public.appspot.com",
  messagingSenderId: "464757768799",
  appId: "1:464757768799:web:da5b54933e29906f8fd1ea",
  measurementId: "G-RJH260P5VZ",
};

const app = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
