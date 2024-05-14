// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDvqxt5neflxbc0WtTHQIPOpLcAkWXo6_g',
  authDomain: 'stayfinder-firebase.firebaseapp.com',
  projectId: 'stayfinder-firebase',
  storageBucket: 'stayfinder-firebase.appspot.com',
  messagingSenderId: '158707469777',
  appId: '1:158707469777:web:d6f34583b1afa0ba7964f0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
