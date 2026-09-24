// Universal Firebase Client supporting both Vite bundler and vanilla GitHub Pages static hosting
import { initializeApp, getApps, getApp } from "firebase/app";
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  onSnapshot 
} from "firebase/firestore";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  sendSignInLinkToEmail
} from "firebase/auth";
import { 
  getStorage, 
  ref, 
  uploadBytes, 
  getDownloadURL 
} from "firebase/storage";

const firebaseConfig = {
  projectId: "causal-truth-2dx1j",
  appId: "1:230990850653:web:19902d386c03f70ca3fbb4",
  apiKey: "AIzaSyC9iwyjkdx0xD9brLc-a7M5FynCOnPkI6k",
  authDomain: "causal-truth-2dx1j.firebaseapp.com",
  firestoreDatabaseId: "ai-studio-birthdaycountdow-a6c9d805-fc83-46a9-86c5-9bd152bd9882",
  storageBucket: "causal-truth-2dx1j.firebasestorage.app",
  messagingSenderId: "230990850653",
  measurementId: "",
  oAuthClientId: "230990850653-lhlbdle72fmcn5bhd5gi89kuhjopm90m.apps.googleusercontent.com",
  recaptchaSiteKey: ""
};

let app, db, auth, storage;

try {
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  db = firebaseConfig.firestoreDatabaseId 
    ? getFirestore(app, firebaseConfig.firestoreDatabaseId)
    : getFirestore(app);
  auth = getAuth(app);
  storage = getStorage(app);
} catch (err) {
  console.warn("[Firebase Client] Initialized with fallback stubs:", err);
  app = null;
  db = null;
  auth = null;
  storage = null;
}

export { 
  app, 
  db, 
  auth, 
  storage, 
  ref, 
  uploadBytes, 
  getDownloadURL, 
  doc, 
  getDoc, 
  setDoc, 
  onSnapshot, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  sendSignInLinkToEmail,
  firebaseConfig
};
