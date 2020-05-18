// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   StatusBar,
//   ImageBackground,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
//   Keyboard,
// } from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import { AntDesign } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';

// // Theme
// import { context } from '../Theme/colorSwatch';

// // Components
// import FlatButton from '../components/FlatButton';

// export default function Register({ navigation }) {
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
//                   style={styles.input}
//                 />
//               </View>
//               <View style={styles.inputContainer}>
//                 <AntDesign name='lock' size={28} color='black' />
//                 <TextInput
//                   placeholder='Password'
//                   autoCapitalize='none'
//                   secureTextEntry={true}
//                   style={styles.input}
//                 />
//               </View>
//               <View style={styles.inputContainer}>
//                 <AntDesign name='lock' size={28} color='black' />
//                 <TextInput
//                   placeholder='Confirm Password'
//                   autoCapitalize='none'
//                   secureTextEntry={true}
//                   style={styles.input}
//                 />
//               </View>
//             </View>
//             <View style={styles.loginBtnContainer}>
//               <FlatButton
//                 title='Create Account'
//               />
//             </View>
//             <Text style={styles.orText}>OR</Text>
//             <TouchableOpacity>
//               <Text style={styles.backToLogin}>Back to Login ?</Text>
//             </TouchableOpacity>
//           </View>
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
//   backToLogin: {
//     color: '#fff',
//     fontSize: 16,
//     alignSelf: 'center',
//   },
// });

// export default function Register({ navigation }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [dotPassword, setDotPassword] = useState(true);

//   return (
//     <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//       <View style={styles.screen}>
//         <View style={styles.header}>
//           <Animatable.Text
//             style={{ color: 'white', fontSize: 46, fontWeight: 'bold' }}
//             animation='bounceInRight'
//           >
//             New Account !
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
//             <Text style={styles.title}>Confirm Password</Text>
//             <View style={styles.textAreaContainer}>
//               <AntDesign name='lock' size={24} color={context.primary} />
//               <TextInput
//                 style={styles.textInput}
//                 secureTextEntry={dotPassword}
//                 placeholder='Confirm password'
//                 autoCapitalize='none'
//                 onChangeText={(val) => {
//                   setConfirmPassword(val);
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
//           </View>
//           <View style={styles.registerBtn}>
//             <FlatButton
//               title='Register'
//               onPress={() => {
//                 console.log('email = ', email);
//                 console.log('password = ', password);
//                 console.log('confirm password = ', confirmPassword);
//               }}
//             />
//           </View>
//           <View>
//             <FlatButton
//               outlined
//               title='Back to Login'
//               onPress={() => navigation.pop()}
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
//     marginTop: 20,
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
//   registerBtn: {
//     marginVertical: 25,
//   },
// });
