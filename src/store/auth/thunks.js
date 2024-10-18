import { signInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, login } from "./authSlice"

export const checkingAuthentication = (email, password)=>{
    return async( dispatch ) => {
        dispatch( checkingCredentials()) 
    }
}

export const startGoogleSignIn = ()=>{
    
    return async(dispatch)=>{
        dispatch( checkingCredentials() )
        const {ok,status,uid,email,displayName,photoURL,errorMessage} = await signInWithGoogle()
        
        if(!ok){
            console.log(`Error al iniciar sesión: ${errorMessage}`);
        }
        if(ok){
            console.log({
                status,uid,email,displayName,photoURL,errorMessage
            })
        }
    }
}