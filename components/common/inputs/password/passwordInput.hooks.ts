import { useState } from "react";

export const usePasswordInput = () => {
    const [needToSecure, setNeedToSecure] = useState<boolean>(true);

    const toggleSecurity = () => setNeedToSecure(state => !state);

    return {
        needToSecure,
        toggleSecurity
    }
};
