import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

// function for initialize authentication
const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
};

export default initializeAuthentication;
