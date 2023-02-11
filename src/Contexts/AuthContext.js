import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../Firebase/Firebase.config';


export const AuthContexts = createContext();

const auth = getAuth(app)



const AuthContext = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authinfo = {
        createUser, LogIn
    }
    return (
        <AuthContexts.Provider value={authinfo}>
            {children}
        </AuthContexts.Provider>
    );
};

export default AuthContext;