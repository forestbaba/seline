import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'YOUR_KEY_HERE_AIzaSyAOWH',
//   authDomain: 'your-auth-domain-b1234.firebaseapp.com',
//   databaseURL: 'https://your-database-name.firebaseio.com',
//   projectId: 'your-project-id-1234',
//   storageBucket: 'your-project-id-1234.appspot.com',
//   messagingSenderId: '12345-insert-yourse',
//   appId: 'insert yours: 1:1234:web:ee873bd1234c0deb7eba61ce',
// };

var firebaseConfig = {
    apiKey: "AIzaSyBFwf__GYwipNKReyvsauXj5jufPEz2sos",
    authDomain: "seline-b6b8f.firebaseapp.com",
    projectId: "seline-b6b8f",
    storageBucket: "seline-b6b8f.appspot.com",
    messagingSenderId: "90921608227",
    appId: "1:90921608227:web:9ef3a89c4ef18782be7d96",
    measurementId: "G-K063MDZ1JK"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };