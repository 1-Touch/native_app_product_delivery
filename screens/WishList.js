import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

// Components
import ProductList from '../components/ProductList';

export default function WishList(props) {
  const { navigation, route } = props;

  // Selectors
  const { likedProducts } = useSelector((state) => state.product);

  return (
    <View style={styles.container}>
      {likedProducts.length ? (
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={likedProducts}
          renderItem={({ item }) => (
            <ProductList navigation={navigation} product={item} />
          )}
        />
      ) : (
        <View style={styles.iconContainer}>
          <FontAwesome5 name='heart-broken' size={100} color='grey' />
          <Text style={styles.title}>WHY ?</Text>
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
    paddingBottom: 80,
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
  },
});
