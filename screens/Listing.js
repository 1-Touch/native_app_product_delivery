import React, { useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

// Components
import ProductList from '../components/ProductList';

// Actions
import {
  getProductsBySubcategory,
  clearProductList,
} from '../store/actions/productActions';

export default function Listing(props) {
  const { navigation, route } = props;

  // Selectors
  const { products } = useSelector((state) => state.product);

  // Dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setOptions({
      title: route.params,
    });
    dispatch(getProductsBySubcategory(route.params.toLowerCase()));

    // Unmount
    return () => {
      dispatch(clearProductList());
    };
  }, []);

  return (
    <View style={styles.container}>
      {products.length ? (
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={products}
          renderItem={({ item }) => (
            <ProductList navigation={navigation} product={item} />
          )}
        />
      ) : (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size='large' />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', flex: 1 },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
