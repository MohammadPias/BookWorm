import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile
} from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loadding, setLodding] = useState(true);

    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();

    // Google Sign in
    const handleGoogleSignin = (navigate, destination) => {
        setLodding(true)
        signInWithPopup(auth, GoogleProvider)
            .then((result) => {
                setUser(result.user)
                navigate(destination)
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setLodding(false))
    };
    // Email Password Sign UP
    const handleEmailPassSignup = (name, email, password, navigate, destination) => {
        setLodding(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                setError('');
                navigate(destination);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(result => {

                }).catch((error) => {

                });
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setLodding(false));
    }

    // Email Password Log in
    const handleEmailPassLogin = (email, password, navigate, destination) => {
        setLodding(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user)
                setLodding(false);
                navigate(destination)
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    // Sign out
    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            setError(error.message)
        });
    }

    // On Auth State Change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLodding(true)
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setLodding(false);
            return () => unsubscribe;
        });
    }, [])


    return {
        user,
        loadding,
        error,
        handleGoogleSignin,
        handleSignOut,
        handleEmailPassLogin,
        handleEmailPassSignup
    };
};

export default useFirebase;