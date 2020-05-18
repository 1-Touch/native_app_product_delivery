import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Authentication from '../screens/Auth';
// import Login from '../screens/Login';
// import Register from '../screens/Register';

const Auth = createStackNavigator();

const AuthStack = ({ navigation }) => (
  <Auth.Navigator headerMode='none'>
    <Auth.Screen name='Authentication' component={Authentication} />
    {/* <Auth.Screen name='Login' component={Login} />
    <Auth.Screen name='Register' component={Register} /> */}
  </Auth.Navigator>
);

export default AuthStack;
