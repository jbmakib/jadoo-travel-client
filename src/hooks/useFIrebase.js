import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const auth = getAuth();

    // states for user
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    // get providers
    const googleProvider = new GoogleAuthProvider();

    // google sign in
    const signInWithGoogle = () => {
        setError("");
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // sign out
    const logOut = () => {
        setError("");
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                // success
            })
            .catch((err) => setError(err))
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return unsubscribed;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        user,
        error,
        setError,
        isLoading,
        setIsLoading,
        signInWithGoogle,
        logOut,
    };
};

export default useFirebase;
