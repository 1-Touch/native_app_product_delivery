import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useDispatch } from 'react-redux';

// Theme
import { context } from '../Theme/colorSwatch';

// Components
import FlatButton from '../components/FlatButton';

// Actions
import { guestLogin } from '../store/actions/authActions';

export default function Splash({ navigation }) {
  const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={context.primary} barStyle='light-content' />
      <View style={styles.header}>
        <Animatable.Text
          style={{ color: 'white', fontSize: 56, fontWeight: 'bold' }}
          animation='bounceInRight'
        >
          24x7
        </Animatable.Text>
        <Animatable.Text
          style={{ color: 'white', fontSize: 14 }}
          animation='bounceInLeft'
        >
          Place to get all your Essentials nd Non-Essentials !
        </Animatable.Text>
      </View>
      <Animatable.View style={styles.footer} animation='fadeInUpBig'>
        <Text style={styles.title}>Make your first move!</Text>
        <Text style={styles.caption}>Get connected to the best brands</Text>
        <View style={styles.loginBtnContainer}>
          <View style={styles.loginBtn}>
            <FlatButton
              title='Guest Login'
              onPress={() => dispatch(guestLogin())}
            />
          </View>
          <View style={styles.loginBtn}>
            <FlatButton
              title='Login'
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        </View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: context.primary,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: context.text,
    fontSize: 26,
  },
  caption: {
    color: context.text,
    fontSize: 12,
  },
  footer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  loginBtnContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 50,
    justifyContent: 'space-between',
  },
  loginBtn: {
    width: '40%',
  },
});
