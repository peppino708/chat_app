import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpYfCTtx5McxAeahpvx3JQCcRx9GFHNAk",
  authDomain: "chat-app-f1c1f.firebaseapp.com",
  databaseURL: "https://chat-app-f1c1f-default-rtdb.firebaseio.com",
  projectId: "chat-app-f1c1f",
  storageBucket: "chat-app-f1c1f.appspot.com",
  messagingSenderId: "417826060862",
  appId: "1:417826060862:web:830d72a48e59a063826f6f",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init servieces
const projectFirestore = firebase.firestore();

export { projectFirestore };
