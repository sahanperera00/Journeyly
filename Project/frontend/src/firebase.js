import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBXr_rBI9xMf8oesvTO04kw8bab5p1iAKE",
  authDomain: "journeyly-7f164.firebaseapp.com",
  projectId: "journeyly-7f164",
  storageBucket: "journeyly-7f164.appspot.com",
  messagingSenderId: "503942966112",
  appId: "1:503942966112:web:4e05e59d6c41db2e674c05"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const auth = getAuth(app);

export default auth;