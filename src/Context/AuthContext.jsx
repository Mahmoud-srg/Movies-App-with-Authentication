import { createContext, useState } from "react";

export let AuthContext = createContext(null)
export default function AuthContextProvider({children}) {
    const [userData, setUserData] = useState(null)

    function savaUserData() {
        let userDataFromLocal = JSON.parse(localStorage.getItem("userData"));
        setUserData(userDataFromLocal)
        console.log(userData);
    }


    return <AuthContext.Provider value={{userData, setUserData, savaUserData}}>
        {children}
    </AuthContext.Provider>
}
