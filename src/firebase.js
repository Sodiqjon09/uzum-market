import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJ9aFS6qAnYXqc5TV-eFzirvtXcTvMkLI",
  authDomain: "uzum-market-30e8a.firebaseapp.com",
  projectId: "uzum-market-30e8a",
  storageBucket: "uzum-market-30e8a.firebasestorage.app",
  messagingSenderId: "872457728244",
  appId: "1:872457728244:web:0bd9603c08b20559e66ea1",
  measurementId: "G-1QDMYXQEWD",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
