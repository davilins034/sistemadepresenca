import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/login'; 
import Dashboard from '../pages/dashboard';

const { Navigator, Screen } = createStackNavigator();

export function Routes() {
  return (
    <Navigator 
      screenOptions={{ 
        headerShown: false, 
        cardStyle: { backgroundColor: '#F0F2F5' } 
      }}
    >
      <Screen name="Login" component={Login} />
      <Screen name="Dashboard" component={Dashboard} />
    </Navigator>
  );
}