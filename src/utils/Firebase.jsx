import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDdfcYsanLyrniB1GFqwsaka40Nqik68o0",
    authDomain: "get-a-karen-1ca81.firebaseapp.com",
    projectId: "get-a-karen-1ca81",
    storageBucket: "get-a-karen-1ca81.appspot.com",
    messagingSenderId: "1043624240828",
    appId: "1:1043624240828:web:0fab41d9a523d486fa12b9",
    measurementId: "G-32FSY87EPQ",
    cookieOptions: {
        sameSite: 'none',
        secure: true
    }
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const gatosCollection = collection(db, "adopted");

getDocs(gatosCollection)
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


export default db;
export { collection, getDocs };