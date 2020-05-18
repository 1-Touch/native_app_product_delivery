// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   ImageBackground,
//   TextInput,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
//   Keyboard,
// } from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import { AntDesign } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';
// import { useDispatch } from 'react-redux';
// import { Ionicons } from '@expo/vector-icons';

// // Theme
// import { context } from '../Theme/colorSwatch';

// // Components
// import FlatButton from '../components/FlatButton';

// // Actions
// import { login } from '../store/actions/authActions';

// export default function Login({ navigation }) {
//   const [showGuestLogin, setShowGuestLogin] = useState(true);

//   // Dispatch
//   const dispatch = useDispatch();

//   return (
//     <TouchableWithoutFeedback
//       onPress={() => {
//         setShowGuestLogin(true), Keyboard.dismiss();
//       }}
//     >
//       <ImageBackground
//         source={require('../assets/images/auth_bg.jpg')}
//         style={styles.background}
//       >
//         <View style={styles.upperContainer}>
//           <View style={styles.logoContainer}>
//             <View style={styles.logo}>
//               <Ionicons name='logo-buffer' size={100} color='white' />
//             </View>
//             <Text style={styles.logoText}>WRAPPY</Text>
//           </View>
//         </View>
//         <View style={styles.lowerContainer}>
//           <View style={styles.wrapper}>
//             <View style={styles.formContainer}>
//               <View style={styles.inputContainer}>
//                 <AntDesign name='mail' size={28} color='black' />
//                 <TextInput
//                   placeholder='Email'
//                   autoCapitalize='none'
//                   keyboardType='email-address'
//                   onFocus={() => setShowGuestLogin(false)}
//                   style={styles.input}
//                 />
//               </View>
//               <View style={styles.inputContainer}>
//                 <AntDesign name='lock' size={28} color='black' />
//                 <TextInput
//                   placeholder='Password'
//                   autoCapitalize='none'
//                   secureTextEntry={true}
//                   onFocus={() => setShowGuestLogin(false)}
//                   style={styles.input}
//                 />
//               </View>
//             </View>
//             <View style={styles.loginBtnContainer}>
//               <FlatButton
//                 title='Login'
//                 onPress={() => {
//                   console.log('email = ', email);
//                   console.log('password = ', password);
//                   dispatch(login());
//                 }}
//               />
//             </View>
//             <Text style={styles.orText}>OR</Text>
//             <FlatButton
//               title='Register New Account'
//               onPress={() => navigation.navigate('Register')}
//             />
//           </View>
//           {showGuestLogin && (
//             <TouchableOpacity style={styles.guestLoginContainer}>
//               <Text style={styles.guestLogin}>Guest Login ?</Text>
//             </TouchableOpacity>
//           )}
//         </View>
//       </ImageBackground>
//     </TouchableWithoutFeedback>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//   },
//   upperContainer: {
//     flex: 1,
//   },
//   logoContainer: {
//     alignItems: 'center',
//     position: 'relative',
//     top: 50,
//   },
//   logo: {
//     borderRadius: 1000,
//     width: 120,
//     height: 120,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'rgba(169,169,169,0.6)',
//   },
//   logoText: {
//     fontSize: 24,
//     marginTop: 5,
//     color: '#fff',
//   },
//   lowerContainer: {
//     flex: 2,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   wrapper: {
//     width: '80%',
//   },
//   formContainer: {
//     width: '100%',
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     paddingVertical: 10,
//     justifyContent: 'space-between',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-evenly',
//     paddingHorizontal: 10,
//   },
//   input: {
//     fontSize: 16,
//     width: '80%',
//     paddingVertical: 5,
//     paddingLeft: 5,
//   },
//   loginBtnContainer: {
//     marginVertical: 10,
//   },
//   orText: {
//     fontSize: 20,
//     color: '#fff',
//     alignSelf: 'center',
//     marginVertical: 20,
//   },
//   guestLogin: {
//     color: '#fff',
//     fontSize: 16,
//     alignSelf: 'center',
//   },
//   guestLoginContainer: {
//     position: 'absolute',
//     bottom: 20,
//   },
// });

// export default function Login({ navigation }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [dotPassword, setDotPassword] = useState(true);

//   const dispatch = useDispatch();

//   return (
//     <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//       <View style={styles.screen}>
//         <View style={styles.header}>
//           <Animatable.Text
//             style={{ color: 'white', fontSize: 46, fontWeight: 'bold' }}
//             animation='bounceInRight'
//           >
//             Welcome !
//           </Animatable.Text>
//         </View>
//         <Animatable.View style={styles.footer} animation='fadeInUpBig'>
//           <View>
//             <Text style={styles.title}>Email</Text>
//             <View style={styles.textAreaContainer}>
//               <AntDesign name='user' size={24} color={context.primary} />
//               <TextInput
//                 style={styles.textInput}
//                 placeholder='Enter your email'
//                 autoCapitalize='none'
//                 keyboardType='email-address'
//                 onChangeText={(val) => {
//                   setEmail(val);
//                 }}
//               />
//               <AntDesign
//                 name='checkcircle'
//                 size={24}
//                 color={email.includes('@') ? context.primary : 'grey'}
//               />
//             </View>
//             <Text style={styles.title}>Password</Text>
//             <View style={styles.textAreaContainer}>
//               <AntDesign name='lock' size={24} color={context.primary} />
//               <TextInput
//                 style={styles.textInput}
//                 secureTextEntry={dotPassword}
//                 placeholder='Enter your password'
//                 autoCapitalize='none'
//                 onChangeText={(val) => {
//                   setPassword(val);
//                 }}
//               />
//               <TouchableOpacity
//                 onPress={() => setDotPassword((currentState) => !currentState)}
//               >
//                 {dotPassword ? (
//                   <Feather name='eye-off' size={24} color='black' />
//                 ) : (
//                   <Feather name='eye' size={24} color={context.primary} />
//                 )}
//               </TouchableOpacity>
//             </View>
//             <Text style={styles.caption}>Forgot Password ?</Text>
//           </View>
//           <View style={styles.loginBtn}>
//             <FlatButton
//               title='Login'
//               onPress={() => {
//                 console.log('email = ', email);
//                 console.log('password = ', password);
//                 dispatch(login());
//               }}
//             />
//           </View>
//           <View>
//             <FlatButton
//               outlined
//               title='Register'
//               onPress={() => navigation.navigate('Register')}
//             />
//           </View>
//         </Animatable.View>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// }

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     backgroundColor: context.primary,
//   },
//   header: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   footer: {
//     flex: 2,
//     backgroundColor: 'white',
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     paddingVertical: 20,
//     paddingHorizontal: 30,
//   },
//   title: {
//     fontSize: 16,
//     color: context.text,
//     marginTop: 30,
//   },
//   textAreaContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   caption: {
//     color: context.primary,
//     marginVertical: 10,
//   },
//   textInput: {
//     paddingLeft: 10,
//     fontSize: 16,
//     width: '80%',
//     height: 40,
//     borderBottomWidth: 1,
//   },
//   loginBtn: {
//     marginVertical: 25,
//   },
// });
