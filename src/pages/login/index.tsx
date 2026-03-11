import React, { useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.card}>
        
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>...</Text>
        </View>

        <View style={styles.tabContainer}>
          <TouchableOpacity 
            style={[styles.tabButton, isLogin && styles.tabButtonActive]}
            onPress={() => setIsLogin(true)}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, isLogin && styles.tabTextActive]}>Login</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.tabButton, !isLogin && styles.tabButtonActive]}
            onPress={() => setIsLogin(false)}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, !isLogin && styles.tabTextActive]}>Cadastro</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>
          {isLogin ? 'Bem vindo ao ...' : 'Crie sua conta'}
        </Text>
        <Text style={styles.subtitle}>
          {isLogin ? 'Faça o Login para Continuar' : 'Cadastre-se para continuar'}
        </Text>

        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.form}>
          {!isLogin && (
            <Input 
              placeholder="Nome completo" 
              autoCapitalize="words"
            />
          )}
          
          <Input 
            placeholder="email@exemplo.com" 
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <Input 
            placeholder="Senha" 
            secureTextEntry
          />

          <Button 
            title={isLogin ? 'Entrar' : 'Criar Conta'} 
            onPress={() => console.log(isLogin ? 'Fazendo Login...' : 'Cadastrando...')}
          />
        </View>

      </View>
    </KeyboardAvoidingView>
  );
}