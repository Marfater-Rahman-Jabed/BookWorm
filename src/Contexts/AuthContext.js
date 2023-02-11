import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/Firebase.config';


export const AuthContexts = createContext();

const auth = getAuth(app)



const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const LogOut = () => {
        return signOut(auth);
    }

    const updateUser = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        });
        return () => unsubscribe();
    }, [])

    const authinfo = {
        user, createUser, LogIn, LogOut, updateUser
    }
    return (
        <AuthContexts.Provider value={authinfo}>
            {children}
        </AuthContexts.Provider>
    );
};

export default AuthContext;