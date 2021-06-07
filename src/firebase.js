import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyB32HB1c9aBQ_zCg11XOTvVh1e9oAqFBTA",
  authDomain: "teams-clone-b2069.firebaseapp.com",
  projectId: "teams-clone-b2069",
  storageBucket: "teams-clone-b2069.appspot.com",
  messagingSenderId: "608380864988",
  appId: "1:608380864988:web:e5c622dbd0032085aaa719",
  measurementId: "G-VX1RS3G6D6",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
