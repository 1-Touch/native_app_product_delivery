import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Cart from '../screens/Cart';

// Components
import Header from '../components/Header';

const Stack = createStackNavigator();

export default function CartStack() {
  return (
    <Stack.Navigator initialRouteName='Cart'>
      <Stack.Screen
        name='Cart'
        component={Cart}
        options={Header}
      />
    </Stack.Navigator>
  );
}
