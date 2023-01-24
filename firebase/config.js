// const firebase = require("firebase")
// // Configure Firebase.
// const firebaseConfig = {
//       apiKey: "AIzaSyB0q5_WRYpuVpSHiAC-ZXojR7xs6Zecea8",
//       authDomain: "money-finance-a9569.firebaseapp.com",
//       projectId: "money-finance-a9569",
//       storageBucket: "money-finance-a9569.appspot.com",
//       messagingSenderId: "948813542551",
//       appId: "1:948813542551:web:5aef07c32aa0395ef3e5d2"
//     };

// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

const firebase = require("firebase/app")
const firestore = require("firebase/firestore")

// Configure Firebase.


    const firebaseConfig = {
      apiKey: "AIzaSyB0q5_WRYpuVpSHiAC-ZXojR7xs6Zecea8",
      authDomain: "money-finance-a9569.firebaseapp.com",
      projectId: "money-finance-a9569",
      storageBucket: "money-finance-a9569.appspot.com",
      messagingSenderId: "948813542551",
      appId: "1:948813542551:web:5aef07c32aa0395ef3e5d2"
    };


const app = firebase.initializeApp(firebaseConfig);
const db = firestore.getFirestore(app);

module.exports = db;