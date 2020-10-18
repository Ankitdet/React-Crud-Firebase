import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

// 特別注意，在react.js中雖然可以直接使用env內的環境變數，但是每個環境變數都要前綴REACT_APP才能用
let firebaseConfig = {
  apiKey: "AIzaSyAyUx3ijQmPBq3qoFBzKBDRbUJ0n3kf-oQ",
  authDomain: "seller-store.firebaseapp.com",
  databaseURL: "https://seller-store.firebaseio.com",
  projectId: "seller-store",
  storageBucket: "seller-store.appspot.com",
  messagingSenderId: "277033873614",
  appId: "1:277033873614:web:64d927eb3184cc4f68a09f"
}
// 初始化 Firebase
firebase.initializeApp(firebaseConfig)

export const projectDB = firebase.database().ref()
export const projectAuth = firebase.auth()
export const projectStorage = firebase.storage()
export const projectFirestore = firebase.firestore()
export const timestamp = firebase.firestore.FieldValue.serverTimestamp

// 使用google註冊
export const projectAuthGoogle = new firebase.auth.GoogleAuthProvider()
projectAuthGoogle.setCustomParameters({
  promt: "select_account",
})
// 使用email跟password註冊
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

// 用google登入
export const signInWithGoogle = () => projectAuth.signInWithPopup(projectAuthGoogle)
// 使用email跟password登入
export const signInWithEmail = (email, password) => projectAuth.signInWithEmailAndPassword(email, password)
export const signOut = () => projectAuth.signOut()
// 重設email跟pasword
export const resetEmail = (email) => projectAuth.sendPasswordResetEmail(email);
export const resetPassword = (password) => projectAuth.currentUser.updatePassword(password)
