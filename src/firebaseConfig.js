import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAkisyochO_6ZNwnSpuBgXe_ommZesRQUY",
    authDomain: "disney-clone-bec9c.firebaseapp.com",
    projectId: "disney-clone-bec9c",
    storageBucket: "disney-clone-bec9c.appspot.com",
    messagingSenderId: "988413972072",
    appId: "1:988413972072:web:02a6c39142bdf28ce175dd"
};
    const app = initializeApp(firebaseConfig)
 
    const auth=getAuth()
    const provider = new GoogleAuthProvider();
   
export {auth,provider}
