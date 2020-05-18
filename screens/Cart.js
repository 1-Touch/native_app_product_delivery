import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

// Components
import FlatButton from '../components/FlatButton';
import ProductList from '../components/ProductList';

export default function Cart(props) {
  const { navigation, route } = props;

  // Selector
  const { cartProducts, cartTotal } = useSelector((state) => state.product);

  return (
    <View style={styles.container}>
      {cartProducts.length ? (
        <>
          <View style={styles.listContainer}>
            <FlatList
              keyExtractor={(item) => item.id.toString()}
              data={cartProducts}
              renderItem={({ item }) => (
                <ProductList
                  navigation={navigation}
                  product={item}
                  inCart={true}
                />
              )}
            />
          </View>
          <View style={styles.cartBtn}>
            <FlatButton title={`Checkout for $${cartTotal}`} />
          </View>
        </>
      ) : (
        <View style={styles.iconContainer}>
          <MaterialIcons name='remove-shopping-cart' size={100} color='grey' />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    flex: 8,
  },
  cartBtn: {
    width: '90%',
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
