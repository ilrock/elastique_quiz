import firebase from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyCmVXlQIk9A3JNKCsKnjh4eDOwgVALUPj8',
  authDomain: 'elastiquiz.firebaseapp.com',
  databaseURL: 'https://elastiquiz.firebaseio.com',
  projectId: 'elastiquiz',
  storageBucket: 'elastiquiz.appspot.com',
  messagingSenderId: '449869151249'
})

export default firebase
