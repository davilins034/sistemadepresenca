import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        
        <StatusBar style="dark" translucent backgroundColor="transparent" />

        <Routes /> 
      </NavigationContainer>
    </SafeAreaProvider>
  );
}