import app from 'firebase/app';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB5ABKgS24n4lxviiF_tgi3az_UwIlBqqw",
  authDomain: "fir-ef958.firebaseapp.com",
  projectId: "fir-ef958",
  storageBucket: "fir-ef958.firebasestorage.app",
  messagingSenderId: "523702414903",
  appId: "1:523702414903:web:05cc86a46d2fc896a799b2"
};

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = firebase.storage();
export const db = app.firestore();
