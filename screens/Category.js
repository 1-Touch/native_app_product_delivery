import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesome5 } from '@expo/vector-icons';

// Actions
import {
  getAllCategories,
  viewSubCategory,
} from '../store/actions/categoryActions';

export default function Category(props) {
  const { navigation } = props;

  // Selector
  const { categories, showSubCategory } = useSelector(
    (state) => state.category
  );
  // Dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const productListHandler = (name) => {
    // Logic to Capitalize
    name = name.replace(/\b\w/g, (l) => l.toUpperCase());

    navigation.navigate('Listing', name);
  };

  // Display Subcategories
  const subCategoryHandler = (id, subCategory) => {
    if (id === showSubCategory) {
      return subCategory.map(({ id, name }) => (
        <TouchableOpacity key={id} onPress={() => productListHandler(name)}>
          <View style={styles.subCategoryList}>
            <Text style={{ textTransform: 'capitalize' }}>{name}</Text>
          </View>
        </TouchableOpacity>
      ));
    }
  };

  return (
    <View style={styles.container}>
      {categories.length ? (
        <ScrollView>
          <View style={styles.categoryContainer}>
            {categories.map(({ id, name, subCategory }) => (
              <View key={id}>
                <TouchableOpacity onPress={() => dispatch(viewSubCategory(id))}>
                  <View style={styles.categoryList}>
                    <Text style={{ textTransform: 'capitalize' }}>{name}</Text>
                    {subCategory && (
                      <FontAwesome5 name='plus' size={15} color='black' />
                    )}
                  </View>
                </TouchableOpacity>

                {subCategory && subCategoryHandler(id, subCategory)}
              </View>
            ))}
          </View>
        </ScrollView>
      ) : (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size='large' />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  categoryList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#eee',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 0.4,
    borderBottomColor: 'black',
  },
  subCategoryList: {
    backgroundColor: '#e7e7e7',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderBottomWidth: 0.4,
    borderBottomColor: 'black',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
