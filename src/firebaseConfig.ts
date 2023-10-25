import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyBEWOiYl-sn-jotJyp-R261yZAKiPxSAl0",
    authDomain: "mobile-app-team-1.firebaseapp.com",
    projectId: "mobile-app-team-1",
    storageBucket: "mobile-app-team-1.appspot.com",
    messagingSenderId: "869973966305",
    appId: "1:869973966305:web:bde65a7e79e361fc12a6a0",
    measurementId: "G-E98ZSL9QG9"
  };
firebase.initializeApp(config)

export async function loginUser(username:string, password: string) {
    const email = `${username}@codedamn.com`

    try {
        const res = await firebase.auth().signInWithEmailAndPassword(email, password)
        console.log(res)
        return true
    } catch (error) {
        console.log(error)
        return false
    }

}

export async function registerUser(username: string, password: string) {
    const email = `${username}@codedamn.com`

    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
        return res
    } catch (error) {
        return false
    }
}