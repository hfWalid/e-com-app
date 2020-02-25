import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAyKFdz2MstXGAzi3cGDZosSABhOXp08LI",
    authDomain: "e-com-app-d530c.firebaseapp.com",
    databaseURL: "https://e-com-app-d530c.firebaseio.com",
    projectId: "e-com-app-d530c",
    storageBucket: "e-com-app-d530c.appspot.com",
    messagingSenderId: "251562814216",
    appId: "1:251562814216:web:001fb1124fe65878435abd",
    measurementId: "G-3GW80HE4VJ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;