import React, {useContext, useState} from "react";
import { Platform, ActivityIndicator} from "react-native";

import { AreaInput, Background, Container, Input, SubmitButton, SubmitText } from '../SignIn/styles';

import { AuthContext } from "../../contexts/auth";


export default function SingUp(){

    const { singUp, loadingAuth } = useContext(AuthContext)

    const [nome, setNome] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    function handleSingUp(){
        if(nome === '' || password === '' || email == '') return;
        
        singUp(email, password, nome);
    }

    return(
        <Background>
            <Container behavior={Platform.OS == 'ios' ? 'padding' : ''} enable>
                
                <AreaInput >
                    <Input 
                        placeholder={'Nome'}
                        value={nome}
                        onChangeText={ (text) => {setNome(text)}}
                    />
                </AreaInput>
                
                <AreaInput >
                    <Input 
                        placeholder={'Email'}
                        value={email}
                        onChangeText={ (text) => (setEmail(text)) }
                    />
                </AreaInput>
                
                <AreaInput >
                    <Input 
                        placeholder={'Senha'}
                        value={password}
                        onChangeText={ (text) => {setPassword(text)} }
                        secureTextEntry={true}
                    />
                </AreaInput>

                <SubmitButton onPress={handleSingUp}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color='#FFF'/>
                        ) : (
                            <SubmitText>Cadastrar</SubmitText>
                        )
                    }
                </SubmitButton>

            </Container>
        </Background>
    )
}