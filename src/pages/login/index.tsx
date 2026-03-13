import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const navigation = useNavigation();

  function handleAuth() {
    
    navigation.navigate('Dashboard' as never); 
  }

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.card}>
        <View style={styles.form}>
          {!isLogin && (
            <Input placeholder="Nome completo" autoCapitalize="words" />
          )}
          
          <Input 
            placeholder="email@exemplo.com" 
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <Input placeholder="Senha" secureTextEntry />

          <Button 
            title={isLogin ? 'Entrar' : 'Criar Conta'} 
            onPress={handleAuth} 
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}