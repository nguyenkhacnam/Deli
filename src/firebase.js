// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAoHo5ETpSjyS9FDse5t_4bpVqhvqlafWs",
    authDomain: "deli-react.firebaseapp.com",
    projectId: "deli-react",
    storageBucket: "deli-react.appspot.com",
    messagingSenderId: "427858832950",
    appId: "1:427858832950:web:c44a2cc7251ac78bc7f297",
    measurementId: "G-QJKETYWXMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
