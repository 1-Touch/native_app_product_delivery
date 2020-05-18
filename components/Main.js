import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

// Routes
import Navigation from '../routes/DrawerNavigation';
import AuthStack from '../routes/AuthStack';

export default function Main() {
  const { isLogged, isGuest } = useSelector((state) => state.auth);
  return (
    <NavigationContainer>
      {isGuest || isLogged ? <Navigation /> : <AuthStack />}
    </NavigationContainer>
  );
}
