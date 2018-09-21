import firebase from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyD4-FfpXwBUafuhMTUy90-izKBH_T4ALDE',
  authDomain: 'toorno-dev.firebaseapp.com',
  databaseURL: 'https://toorno-dev.firebaseio.com',
  projectId: 'toorno-dev',
  storageBucket: 'toorno-dev.appspot.com',
  messagingSenderId: '678335348584'
})

export default firebase
