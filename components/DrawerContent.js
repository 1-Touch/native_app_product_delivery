import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

// Theme
import { context } from '../Theme/colorSwatch';

// Actions
import { logout } from '../store/actions/authActions';

export default function DrawerContent(props) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const dispatch = useDispatch();

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: 'https://randomuser.me/api/portraits/men/64.jpg',
                }}
                size={50}
              />
              <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                <Title style={styles.title}>John Wick</Title>
                <Caption style={styles.caption}>@johnwick</Caption>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  800
                </Paragraph>
                <Caption style={styles.caption}>Wallet</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  7
                </Paragraph>
                <Caption style={styles.caption}>Cart</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <AntDesign name='home' size={size} color={color} />
              )}
              label='Home'
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <AntDesign name='tagso' size={size} color={color} />
              )}
              label='Categories'
              onPress={() => {
                props.navigation.navigate('Categories');
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <AntDesign name='hearto' size={size} color={color} />
              )}
              label='Wish List'
              onPress={() => {
                props.navigation.navigate('WishList');
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <AntDesign name='shoppingcart' size={size} color={color} />
              )}
              label='Your Cart'
              onPress={() => {
                props.navigation.navigate('Cart');
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <AntDesign name='profile' size={size} color={color} />
              )}
              label='Profile'
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <AntDesign name='question' size={size} color={color} />
              )}
              label='About'
              onPress={() => {
                props.navigation.navigate('About');
              }}
            />
          </Drawer.Section>
          <Drawer.Section title='Preferences'>
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}
            >
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents='none'>
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <AntDesign name='logout' size={size} color={color} />
          )}
          label='Sign Out'
          onPress={() => {
            dispatch(logout());
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
    color: context.primary,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
