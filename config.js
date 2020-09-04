import * as firebase from 'firebase'
  require('@firebase/firestore')
  
  var firebaseConfig = {
    apiKey: "AIzaSyCsXCjbPE0ooDtZtXTn_MvCZgFwejUuhEY",
    authDomain: "wily-app-c2b06.firebaseapp.com",
    databaseURL: "https://wily-app-c2b06.firebaseio.com",
    projectId: "wily-app-c2b06",
    storageBucket: "wily-app-c2b06.appspot.com",
    messagingSenderId: "811475639675",
    appId: "1:811475639675:web:91ffe3c3056cd22d7031de"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
    export default firebase.firestore();