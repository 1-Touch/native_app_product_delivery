import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Routes
import homeStack from './HomeStack';
import categoryStack from './CategoryStack';
import wishListStack from './WishListStack';
import cartStack from './CartStack';

// Screens
import About from '../screens/About';
import Profile from '../screens/Profile';

// Components
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName='Home'
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name='Home' component={homeStack} />
      <Drawer.Screen name='Categories' component={categoryStack} />
      <Drawer.Screen name='WishList' component={wishListStack} />
      <Drawer.Screen name='Cart' component={cartStack} />
      <Drawer.Screen name='Profile' component={Profile} />
      <Drawer.Screen name='About' component={About} />
    </Drawer.Navigator>
  );
}
