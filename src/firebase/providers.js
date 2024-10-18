import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async()=>{
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult( result )
        // console.log(credentials)

        const user = result.user
        // console.log(user)
        // console.log(user.email,user.displayName)
        const {displayName,email,photoURL,uid} = result.user
        // console.log({displayName,email, photoURL, uid})

        return{
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }

    } catch (error) {
        const errorCode = error.code;
        const errorMessage =error.message;

        return{
            ok: false,
            errorMessage,
            errorCode
        }
    }
}