import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SingIn from "../pages/SignIn";
import SingUp from "../pages/SignUp";

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="SignIn"
                component={SingIn}
                options={{headerShown:false}}
            />
            
            <AuthStack.Screen
                name="SignUp"
                component={SingUp}
                options={{
                    headerStyle:{
                        backgroundColor: '#3b3dbf',
                        borderBottomWidth: 1,
                        borderBottomColor: '#00b94a'
                    },
                    headerTintColor:'#FFF',
                    headerTitle: 'Voltar',
                    headerBackTitleVisible: false
                }
            }
            />
            
        </AuthStack.Navigator>
    )
}