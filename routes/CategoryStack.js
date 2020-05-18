import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Category from '../screens/Category';
import Listing from '../screens/Listing';
import ProductDetails from '../screens/ProductDetails';

// Components
import Header from '../components/Header';

const Stack = createStackNavigator();

export default function CategoryStack() {
  return (
    <Stack.Navigator initialRouteName='Categories'>
      <Stack.Screen name='Categories' component={Category} options={Header} />
      <Stack.Screen name='Listing' component={Listing} options={Header} />
      <Stack.Screen
        name='ProductDetails'
        component={ProductDetails}
        options={Header}
      />
    </Stack.Navigator>
  );
}
