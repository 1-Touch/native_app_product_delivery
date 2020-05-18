import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import WishList from '../screens/WishList';
import ProductDetails from '../screens/ProductDetails';

// Components
import Header from '../components/Header';

const Stack = createStackNavigator();

export default function WishListStack() {
  return (
    <Stack.Navigator initialRouteName='WishList'>
      <Stack.Screen name='WishList' component={WishList} options={Header} />
      <Stack.Screen
        name='ProductDetails'
        component={ProductDetails}
        options={Header}
      />
    </Stack.Navigator>
  );
}
