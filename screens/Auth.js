import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Feather } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

// Components
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';

// Actions
import { guestLogin } from '../store/actions/authActions';

export default function Auth({ navigation }) {
  const [showGuestLogin, setShowGuestLogin] = useState(true);
  const [showLogin, setShowLogin] = useState(true);

  // Dispatch
  const dispatch = useDispatch();

  const guestToggleHandler = () => {
    setShowGuestLogin(false);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setShowGuestLogin(true), Keyboard.dismiss();
      }}
    >
      <ImageBackground
        source={require('../assets/images/auth_bg.jpg')}
        style={styles.background}
      >
        <View style={styles.upperContainer}>
          <View style={styles.logoContainer}>
            <View style={styles.logo}>
              <Ionicons name='logo-buffer' size={100} color='white' />
            </View>
            <Text style={styles.logoText}>WRAPPY</Text>
          </View>
        </View>
        <View style={styles.lowerContainer}>
          <View style={styles.wrapper}>
            <View style={styles.tabContainer}>
              <TouchableOpacity onPress={() => setShowLogin(true)}>
                <Text
                  style={showLogin ? styles.selectedTabText : styles.tabText}
                >
                  Login
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setShowLogin(false)}>
                <Text
                  style={showLogin ? styles.tabText : styles.selectedTabText}
                >
                  Register
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
              {showLogin ? (
                <Login guestToggleHandler={guestToggleHandler} />
              ) : (
                <Register guestToggleHandler={guestToggleHandler} />
              )}
            </View>
          </View>
          {showGuestLogin && (
            <TouchableOpacity
              style={styles.guestLoginContainer}
              onPress={() => dispatch(guestLogin())}
            >
              <Animatable.Text
                animation='pulse'
                iterationCount='infinite'
                style={styles.guestLogin}
              >
                Guest Login ?
              </Animatable.Text>
            </TouchableOpacity>
          )}
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  upperContainer: {
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    // position: 'relative',
    top: 50,
  },
  logo: {
    borderRadius: 1000,
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(169,169,169,0.6)',
  },
  logoText: {
    fontSize: 24,
    marginTop: 5,
    color: '#fff',
  },
  lowerContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomWidth: 2,
    borderColor: '#fff',
    marginBottom: 60,
    paddingBottom: 15,
  },
  tabText: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 20,
  },
  selectedTabText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  wrapper: {
    width: '80%',
    alignItems: 'center',
  },
  guestLogin: {
    color: '#fff',
    fontSize: 16,
    alignSelf: 'center',
  },
  guestLoginContainer: {
    position: 'absolute',
    bottom: 20,
  },
});
