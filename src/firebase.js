import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6thoG0BtSB9kmjEaOeFwxkbIo6ko3sr0",
  authDomain: "replica-of-linkedin.firebaseapp.com",
  projectId: "replica-of-linkedin",
  storageBucket: "replica-of-linkedin.appspot.com",
  messagingSenderId: "298280056756",
  appId: "1:298280056756:web:4c9cf2ec5ddba1939664e1",
  measurementId: "G-35VKK5L5T0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// to help initialize the app in firebase

const db = firebaseApp.firestore();

const auth = firebase.auth();
//need for authentication

const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();
//for storing the images

export { auth, provider, storage };

export default db;
