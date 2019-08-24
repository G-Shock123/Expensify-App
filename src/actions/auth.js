import {firebase, googleAuthProvider,facebookAuthProvider} from '../firebase/firebase'

export const logIn=(uid)=>({
    type:'LOGIN',
    uid
})

export const startGoogleLogIn = () =>{
    return ()=>{
        return firebase.auth().signInWithPopup(googleAuthProvider)
    }
}
export const startFacebookLogIn = () => {
    return () => {
        return firebase.auth().signInWithPopup(facebookAuthProvider)
    }
}

export const startLogOut=()=>{
    return ()=>{
        return firebase.auth().signOut()
    }
}
export const logOut = ()=>({
    type: 'LOGOUT'
})