import firebase from 'firebase';


  // Initialize Firebase
  firebase.initializeApp( {
    apiKey: "AIzaSyBUYyIovFCfHSbCJa4ilEkEO5QZSrOGIOU",
    authDomain: "crud-react-native-f8653.firebaseapp.com",
    databaseURL: "https://crud-react-native-f8653.firebaseio.com",
    projectId: "crud-react-native-f8653",
    storageBucket: "crud-react-native-f8653.appspot.com",
    messagingSenderId: "799511319154",
    appId: "1:799511319154:web:92d0ab99c88d79298528eb"
  });

  const FIREBASE = firebase;
   export default FIREBASE;