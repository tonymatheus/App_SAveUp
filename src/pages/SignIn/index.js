import React from 'react';
import {View, Text} from 'react-native';
import {Background, Container, Logo, AreaInput, Input} from './styles';
export default function SignIn() {
  return (
    <Background>
      <Container>
        <Logo source={require('../../assets/logoApp.png')} />
        <AreaInput>
          <Input 
          placeholder="Email"
          autoCorrect={false}
          autoCaptalize="none"
          />
        </AreaInput>

        <AreaInput>
          <Input 
          placeholder="Senha"
          autoCorrect={false}
          autoCaptalize="none"
          />
        </AreaInput>
      </Container>
    </Background>
  );
}
