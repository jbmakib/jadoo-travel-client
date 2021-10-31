import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

// useAuth uses the context of AuthContext
const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;
