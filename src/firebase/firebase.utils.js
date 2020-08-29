 import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDpikQ8dynBkcE8CSctGPJCQ_N2Kzd9XG0",
    authDomain: "crwn-db-b928c.firebaseapp.com",
    databaseURL: "https://crwn-db-b928c.firebaseio.com",
    projectId: "crwn-db-b928c",
    storageBucket: "crwn-db-b928c.appspot.com",
    messagingSenderId: "949935321894",
    appId: "1:949935321894:web:8941402e1c8820ceb607e7",
    measurementId: "G-JRZE41SRDG"
  };
 
export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch (error){
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
