import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

// Components
import FlatButton from '../FlatButton';

export default function Register(props) {
  return (
    <>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <AntDesign name='mail' size={28} color='black' />
          <TextInput
            placeholder='Email'
            autoCapitalize='none'
            keyboardType='email-address'
            onFocus={() => props.guestToggleHandler()}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <AntDesign name='lock' size={28} color='black' />
          <TextInput
            placeholder='Password'
            autoCapitalize='none'
            secureTextEntry={true}
            onFocus={() => props.guestToggleHandler()}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <AntDesign name='lock' size={28} color='black' />
          <TextInput
            placeholder='Confirm Password'
            autoCapitalize='none'
            secureTextEntry={true}
            onFocus={() => props.guestToggleHandler()}
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.loginBtnContainer}>
        <FlatButton
          title='Register'
          onPress={() => {
            console.log('email = ', email);
            console.log('password = ', password);
            // dispatch(login());
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
  },
  input: {
    fontSize: 16,
    width: '80%',
    paddingVertical: 5,
    paddingLeft: 5,
  },
  loginBtnContainer: {
    width: 280,
    marginVertical: 10,
  },
});
