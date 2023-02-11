// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSIdXsOvq3ZleIQGjJYvYcEriqW4EFLdg",
    authDomain: "usedbookclient.firebaseapp.com",
    projectId: "usedbookclient",
    storageBucket: "usedbookclient.appspot.com",
    messagingSenderId: "386903442497",
    appId: "1:386903442497:web:4099a33c5fc1c7895032c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;