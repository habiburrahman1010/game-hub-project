import React, { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const googleProvider = new GoogleAuthProvider();


export const AuthContex = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const googleLogin = () => {
         setLoading(true);
  return signInWithPopup(auth, googleProvider);
};

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        return signOut(auth);
    };

    const updateUser = (updateData) => {
        return updateProfile(auth.currentUser, updateData);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    return (
        <AuthContex.Provider value={{ user, loading, createUser, signIn, logOut, updateUser, googleLogin }}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;
