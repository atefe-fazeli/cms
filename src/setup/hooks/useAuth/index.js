import { useContext } from "react";
import { AuthContext } from "../../appContextManager/authContext";

export const useAuth= () => {
    const context = useContext(AuthContext);
    if (context === undefined)
        throw new Error('AuthContext must be within apiContext!')

    return context;
}