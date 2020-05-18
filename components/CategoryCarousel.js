import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { FontAwesome5 } from '@expo/vector-icons';

// Actions
import { viewSubCategory } from '../store/actions/categoryActions';

// Theme
import { context } from '../Theme/colorSwatch';

export default function CategoryCarousel(props) {
  const [icon, setIcon] = useState('mobile-alt');

  const { category, navigation } = props;
  const { id, name } = category;

  useEffect(() => {
    if (name == 'electronics') setIcon('mobile-alt');
    else if (name === 'clothes') setIcon('tshirt');
    else if (name === 'Baby Products') setIcon('baby-carriage');
    else if (name === 'Fitness') setIcon('dumbbell');
    else if (name === 'Sports') setIcon('football-ball');
    else if (name === 'Groccery') setIcon('carrot');
  }, []);

  // Dispatch
  const dispatch = useDispatch();

  const categoryHandler = () => {
    dispatch(viewSubCategory(id));
    navigation.navigate('Categories');
  };

  return (
    <TouchableOpacity onPress={() => categoryHandler()}>
      <View style={styles.card}>
        <View>
          <FontAwesome5 name={icon} size={18} color={context.primaryLight} />
        </View>
        <View>
          <Text style={styles.subtitle}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 60,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // paddingVertical: 8,
    backgroundColor: 'transparent',
  },
  subtitle: {
    fontSize: 7,
    fontWeight: 'bold',
    color: context.primary,
  },
});
