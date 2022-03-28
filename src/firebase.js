import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVZG4EUFXrhC5cQ7mF1aq7ws35NpIufeo",
  authDomain: "dummy-linkedin-f8311.firebaseapp.com",
  projectId: "dummy-linkedin-f8311",
  storageBucket: "dummy-linkedin-f8311.appspot.com",
  messagingSenderId: "641035887732",
  appId: "1:641035887732:web:683214651967839bb29d21",
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
