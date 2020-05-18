import React from 'react';
import { StyleSheet, View, Text, Image, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import {
  likeProduct,
  unlikeProduct,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from '../store/actions/productActions';

export default function ProductList(props) {
  const { navigation, product, inCart } = props;
  // const { name, image, price, discount } = product;

  // Selectors
  const { likedProducts } = useSelector((state) => state.product);

  //Dispatch
  const dispatch = useDispatch();

  const handleProductDetail = () => {
    navigation.navigate('ProductDetails', props.product);
  };

  // Check if product is liked
  const isLiked = (id) => {
    let liked = false;
    likedProducts.forEach((product) => {
      if (product.id == id) {
        liked = true;
      }
    });
    return liked;
  };

  // If product count reaches zero so remove from cart
  const confirmationHandler = (id, name) => {
    Alert.alert(
      `Remove ${name} ?`,
      `Are you sure you want to remove ${name} from cart`, // <- this part is optional, you can pass an empty string
      [{ text: 'Yes Continue', onPress: () => dispatch(removeFromCart(id)) }],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      {product && (
        <View style={styles.productList}>
          <View style={{ flex: 7 }}>
            <TouchableOpacity onPress={handleProductDetail}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={product.image} style={styles.productImage} />

                {/* Details Container */}
                <View style={styles.productDetailsContainer}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.title}>{product.name}</Text>
                    <View style={styles.ratingContainer}>
                      <Text style={styles.rating}>4.5 ☆</Text>
                      <Text style={styles.discount}>
                        {product.discount} % OFF
                      </Text>
                    </View>
                    <Text style={styles.price}>$ {product.price}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          {/* Icon Container */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 10,
            }}
          >
            {/* Like Icon */}
            {isLiked(product.id) ? (
              <TouchableOpacity
                onPress={() => dispatch(unlikeProduct(product.id))}
              >
                <AntDesign name='heart' size={20} color='red' />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => dispatch(likeProduct(product))}>
                <AntDesign name='hearto' size={20} color='red' />
              </TouchableOpacity>
            )}

            {/* Cart Amount Icons */}
            {inCart && (
              <View
                style={{
                  marginHorizontal: 5,
                }}
              >
                <TouchableOpacity
                  onPress={() => dispatch(increaseQuantity(product.id))}
                >
                  <AntDesign name='arrowup' size={20} color='grey' />
                </TouchableOpacity>
                <View style={{ alignItems: 'center', marginVertical: 5 }}>
                  <Text style={{ fontSize: 16 }}>{product.quantity}</Text>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    product.quantity == 1
                      ? confirmationHandler(product.id, product.name)
                      : dispatch(decreaseQuantity(product.id))
                  }
                >
                  <AntDesign name='arrowdown' size={20} color='grey' />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  productList: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  productImage: {
    width: 90,
    height: 100,
    borderRadius: 10,
  },
  productDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  rating: {
    backgroundColor: 'yellow',
    paddingHorizontal: 2,
    fontSize: 10,
  },
  discount: {
    backgroundColor: 'black',
    paddingHorizontal: 5,
    color: 'white',
    marginHorizontal: 8,
    fontSize: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginTop: 10,
  },
});
