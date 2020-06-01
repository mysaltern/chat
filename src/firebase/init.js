import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBzBxlOVf5PypitakhFTH3_I8qNaOhxyxw',
  authDomain: 'chat-75847.firebaseapp.com',
  databaseURL: 'https://chat-75847.firebaseio.com',
  projectId: 'chat-75847',
  storageBucket: 'chat-75847.appspot.com',
  messagingSenderId: '568833774652',
  appId: '1:568833774652:web:1c5ab4fb8c4d54098c1f39'
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()
