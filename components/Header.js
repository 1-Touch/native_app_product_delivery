import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

// Theme
import { context } from '../Theme/colorSwatch';

const Header = ({ navigation, route }) => ({
  headerStyle: {
    backgroundColor: context.primary,
  },
  headerTintColor: '#fff',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Entypo name='menu' style={{ marginLeft: 15 }} size={24} color='#fff' />
    </TouchableOpacity>
  ),
  headerRight: () => (
    <View style={{ flexDirection: 'row-reverse' }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Cart');
        }}
      >
        <Feather
          name='shopping-cart'
          style={{ marginRight: 15 }}
          size={20}
          color='#fff'
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Entypo
          name='magnifying-glass'
          style={{ marginRight: 15 }}
          size={20}
          color='#fff'
        />
      </TouchableOpacity>
    </View>
  ),
});

export default Header;
