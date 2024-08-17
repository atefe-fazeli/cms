import { useContext } from "react";
import { apiContext } from "../../appContextManager/apiContext";

export const useApi= () => {
    const context = useContext(apiContext);
    if (context === undefined)
        throw new Error('apiContext must be within apiContext!')

    return context;
}