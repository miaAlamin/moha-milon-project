import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import { auth } from '/src/Firebase/Firebase.init.js';



export const AuthContext = createContext(null);
      const googleprovider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true);



    
    const name = 'Amar sonar Bangla ami tumai balovashi';

    const createUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, password, email);
       
    };

    const googleLogin = ()=>{
        signInWithPopup(auth, googleprovider)
      
    }
    

    const createUser2 = (email, password) => {
        setLoding(true)

        return signInWithEmailAndPassword(auth, email, password);
    };

    const signOutUser = ()=>{
        signOut(auth)
        setLoding(true)

    }


     useEffect(()=>{

        const unsubscrib =  onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            setLoding(false)


        })

        return ()=>{
            unsubscrib()
        }
    },[])
    
    

    
    const AuthInfo  = {
        name,
        loding,
        createUser,
        createUser2,
        user,
        signOutUser,
        googleLogin
    }

    return (
        <AuthContext.Provider value={AuthInfo}>

            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;