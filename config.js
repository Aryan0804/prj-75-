import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBT-f6iV9lmoLJUHiS-BT-nKRjLWyhEfH0",
  authDomain: "prj-71.firebaseapp.com",
  projectId: "prj-71",
  storageBucket: "prj-71.appspot.com",
  messagingSenderId: "572129673524",
  appId: "1:572129673524:web:3d347444d7f8999e6e6561"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
