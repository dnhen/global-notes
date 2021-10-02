// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgAvSP3oBsLrOelBBIiNKG72EtUe2B7Gg",
  authDomain: "global-notes.firebaseapp.com",
  projectId: "global-notes",
  storageBucket: "global-notes.appspot.com",
  messagingSenderId: "960716700944",
  appId: "1:960716700944:web:a10af48f8c46447dc4f995"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export default getFirestore();