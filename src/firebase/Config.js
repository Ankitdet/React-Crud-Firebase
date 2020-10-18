import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

let firebaseConfig = {
  apiKey: "AIzaSyAyUx3ijQmPBq3qoFBzKBDRbUJ0n3kf-oQ",
  authDomain: "seller-store.firebaseapp.com",
  databaseURL: "https://seller-store.firebaseio.com",
  projectId: "seller-store",
  storageBucket: "seller-store.appspot.com",
  messagingSenderId: "277033873614",
  appId: "1:277033873614:web:64d927eb3184cc4f68a09f"
}

firebase.initializeApp(firebaseConfig)

export const projectDB = firebase.database().ref()
export const projectAuth = firebase.auth()
export const projectStorage = firebase.storage()
export const projectFirestore = firebase.firestore()
export const timestamp = firebase.firestore.FieldValue.serverTimestamp

export const projectAuthGoogle = new firebase.auth.GoogleAuthProvider()
projectAuthGoogle.setCustomParameters({
  promt: "select_account",
})
export const signUpWithEmail = (email, password) =>
  projectAuth.createUserWithEmailAndPassword(email, password)


export const createUserProfileDocument = async (userAuth) => {
  if (userAuth) {
    const userReference = projectFirestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userReference.get()
    if (!snapShot.exists) {
      const { displayName, email, photoURL } = userAuth
      const createdAt = new Date()
      try {
        await userReference.set({
          displayName,
          email,
          photoURL,
          createdAt
        })
      } catch (error) {
        console.log(error)
      }
    }
    return userReference
  }
}

export const signInWithGoogle = () => projectAuth.signInWithPopup(projectAuthGoogle)
export const signInWithEmail = (email, password) => projectAuth.signInWithEmailAndPassword(email, password)
export const signOut = () => projectAuth.signOut()
export const resetEmail = (email) => projectAuth.sendPasswordResetEmail(email);
export const resetPassword = (password) => projectAuth.currentUser.updatePassword(password)
