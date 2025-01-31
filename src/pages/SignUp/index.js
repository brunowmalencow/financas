import React, {useContext} from "react";
import { Platform } from "react-native";

import { AreaInput, Background, Container, Input, SubmitButton, SubmitText } from '../SignIn/styles';

import { AuthContext } from "../../contexts/auth";


export default function SingUp(){

    const { user } = useContext(AuthContext)

    function handleSingUp(){
        alert(user)
    }

    return(
        <Background>
            <Container behavior={Platform.OS == 'ios' ? 'padding' : ''} enable>
                
                <AreaInput >
                <Input placeholder={'Nome'}/>
                </AreaInput>
                
                <AreaInput >
                <Input placeholder={'Email'}/>
                </AreaInput>
                
                <AreaInput >
                <Input placeholder={'Senha'}/>
                </AreaInput>

                <SubmitButton onPress={handleSingUp}>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>

            </Container>
        </Background>
    )
}