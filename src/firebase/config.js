import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDZvDwcnUd3_SqwfzMi-H9-zxBfobMznBo",
  authDomain: "neupytech-2b25c.firebaseapp.com",
  databaseURL: "https://neupytech-2b25c.firebaseio.com",
  projectId: "neupytech-2b25c",
  storageBucket: "neupytech-2b25c.appspot.com",
  messagingSenderId: "792734526308",
  appId: "1:792734526308:web:bb3c7edd04a5f3c9726871",
  measurementId: "G-L701VE9836",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
