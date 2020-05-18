import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Home from '../screens/Home';
import ProductDetails from '../screens/ProductDetails';

// Components
import Header from '../components/Header';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name='Home'
        component={Home}
        options={Header}
      />
      <Stack.Screen
        name='ProductDetails'
        component={ProductDetails}
        options={Header}
      />
    </Stack.Navigator>
  );
}
