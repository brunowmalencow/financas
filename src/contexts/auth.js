import React, { createContext, useState } from "react";

import api from "../services/api"
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [user, setUser] = useState(null);
    const[loadingAuth, setLoadingAuth] = useState(false)
    const navigation = useNavigation()

    async function singUp(email, password, nome) {
        setLoadingAuth(true)

        try {
            const response = api.post('/users', {
                name: nome,
                password: password,
                email: email
            })
            setLoadingAuth(false);
        } catch (error) {
            alert("Erro ao cadastrar usuário ", error);
            setLoadingAuth(false);
        }
        navigation.goBack()
    }

    return(
        <AuthContext.Provider value={{user, singUp, loadingAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;