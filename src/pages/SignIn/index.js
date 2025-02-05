import React from "react"
import { Platform } from "react-native"
import { Background,
    Container,
    Logo,
    AreaInput,
    Input,
    SubmitButton,
    SubmitText,
    Link,
    LinkText,
} from "./styles"

import { useNavigation } from "@react-navigation/native"

export default function SingIn(){

    const navigation = useNavigation();

    return(
        <Background>
            <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enable>
                <Logo 
                    source={require('../../assets/Logo.png')}
                />

                <AreaInput>
                    <Input placeholder='Seu email...'/>
                </AreaInput>
                
                <AreaInput>
                    <Input placeholder='Sua senha...'/>
                </AreaInput>

                <SubmitButton activeOpacity={0.7}>
                    <SubmitText>Acessar</SubmitText>
                </SubmitButton>

                <Link onPress={() => navigation.navigate('SignUp')}>
                    <LinkText>Criar uma conta</LinkText>
                </Link>

            </Container>
        </Background>
    )
}