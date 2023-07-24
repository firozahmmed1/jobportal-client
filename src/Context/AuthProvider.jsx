import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { app } from "../Firebase/firebase.confi";


export const authContext = createContext(null);
const auth= getAuth(app)
const AuthProvider = ({children}) => { 
    const [user, setUser] = useState(null);

    const signUp =(email, password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    } 
    const logIn =(email, password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    useEffect(()=>{
         const unscribe =onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return()=>{
            unscribe()
        }
    },[]) 

    const logOut =()=>{
        return signOut(auth)
    }

    const authInfo ={
        user,
        signUp,
        logIn,
        logOut
    }
    
    return (
        
        <authContext.Provider value={authInfo}>
                {children}
        </authContext.Provider>
    );
};

export default AuthProvider;