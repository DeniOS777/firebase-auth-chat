// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC3N1ZS1DMol2w6MmFk0psEoJc9bWG6kfU',
  authDomain: 'fir-auth-chat-35eb1.firebaseapp.com',
  databaseURL:
    'https://fir-auth-chat-35eb1-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'fir-auth-chat-35eb1',
  storageBucket: 'fir-auth-chat-35eb1.appspot.com',
  messagingSenderId: '326741035677',
  appId: '1:326741035677:web:24b892c66ad633c3226274',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
