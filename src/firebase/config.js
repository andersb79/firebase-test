import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBVeITEbvEFnXNQrl25aDT86eK74xeM8I8",
  authDomain: "fir-react-test-177f1.firebaseapp.com",
  projectId: "fir-react-test-177f1",
  storageBucket: "fir-react-test-177f1.appspot.com",
  messagingSenderId: "656697481366",
  appId: "1:656697481366:web:f0c28853da25a518468ab7",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
