import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBANK9BoZQkJd5NjBmo3YYbp6oWpJF2Lvw",
  authDomain: "netflix-project-f5b39.firebaseapp.com",
  projectId: "netflix-project-f5b39",
  storageBucket: "netflix-project-f5b39.appspot.com",
  messagingSenderId: "380184988465",
  appId: "1:380184988465:web:48407a7348be6e6fe8fe10",
  measurementId: "G-CRMHGST55J"
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
