import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDQWTWaixJg26ElrSh4MiTHCCEEBke_IEo",
  authDomain: "careerbeam-d551b.firebaseapp.com",
  projectId: "careerbeam-d551b",
  storageBucket: "careerbeam-d551b.appspot.com",
  messagingSenderId: "903439028258",
  appId: "1:903439028258:web:76bf68523a5dea4943ba7b",
  measurementId: "G-PXHB2Z883J",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage };
