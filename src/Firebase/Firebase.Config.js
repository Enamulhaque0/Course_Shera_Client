// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp4v8gTnwQJLQ8wOGUF4JJaAPjTK_t1gg",
  authDomain: "course-shera.firebaseapp.com",
  projectId: "course-shera",
  storageBucket: "course-shera.appspot.com",
  messagingSenderId: "57289820265",
  appId: "1:57289820265:web:a999d08ab7dd4947127af8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app