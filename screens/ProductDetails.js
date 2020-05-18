import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';

// Theme
import { context } from '../Theme/colorSwatch';

// Components
import FlatButton from '../components/FlatButton';

// Actions
import { addToCart, removeFromCart } from '../store/actions/productActions';

export default function ProductDetails(props) {
  console.log('Product Details', props);
  const { id, name, image, price, discount } = props.route.params;
  const product = { id, name, image, price, discount };

  // Selector
  const { cartProducts } = useSelector((state) => state.product);
  console.log('cartPros', cartProducts);
  // Dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    props.navigation.setOptions({
      title: name,
    });
  }, []);

  const isInCart = (id) => {
    let inCart = false;
    cartProducts.forEach((product) => {
      if (product.id == id) {
        inCart = true;
      }
    });
    return inCart;
  };

  const confirmationHandler = () => {
    Alert.alert(
      `Remove ${name} ?`,
      `Are you sure you want to remove ${name} from cart`, // <- this part is optional, you can pass an empty string
      [{ text: 'Yes Continue', onPress: () => dispatch(removeFromCart(id)) }],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.prodImage} />
      </View>
      <View style={styles.prodDetailsContainer}>
        <ScrollView style={{ marginBottom: 20 }}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.ratingContainer}>
            <Text style={{ backgroundColor: 'yellow', paddingHorizontal: 5 }}>
              4.5 ☆
            </Text>
            <Text>41 reviews | 100 comments</Text>
          </View>
          <Text style={{ fontSize: 20, marginVertical: 10 }}>Description</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus
            et netus et malesuada. Et malesuada fames ac turpis egestas integer
            eget. Sit amet cursus sit amet dictum sit. Sed egestas egestas
            fringilla phasellus faucibus. At volutpat diam ut venenatis. Orci a
            scelerisque purus semper eget duis at. Purus semper eget duis at
            tellus at urna condimentum mattis. Dui faucibus in ornare quam
            viverra orci. Cras adipiscing enim eu turpis egestas. Enim blandit
            volutpat maecenas volutpat blandit aliquam etiam erat. Ullamcorper
            eget nulla facilisi etiam dignissim diam quis enim lobortis. Vitae
            et leo duis ut diam quam nulla porttitor. Sagittis nisl rhoncus
            mattis rhoncus urna neque viverra justo nec.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus
            et netus et malesuada. Et malesuada fames ac turpis egestas integer
            eget. Sit amet cursus sit amet dictum sit. Sed egestas egestas
            fringilla phasellus faucibus. At volutpat diam ut venenatis. Orci a
            scelerisque purus semper eget duis at. Purus semper eget duis at
            tellus at urna condimentum mattis. Dui faucibus in ornare quam
            viverra orci. Cras adipiscing enim eu turpis egestas. Enim blandit
            volutpat maecenas volutpat blandit aliquam etiam erat. Ullamcorper
            eget nulla facilisi etiam dignissim diam quis enim lobortis. Vitae
            et leo duis ut diam quam nulla porttitor. Sagittis nisl rhoncus
            mattis rhoncus urna neque viverra justo nec.
          </Text>
        </ScrollView>
        <View style={styles.btnsContainer}>
          {/* Buy Now */}
          <View style={{ flex: 1, marginRight: 5 }}>
            <FlatButton outlined title='Buy Now' />
          </View>

          {isInCart(product.id) ? (
            // In Cart
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => confirmationHandler()}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <AntDesign name='check' size={34} color={context.primary} />
                <Text style={{ fontSize: 18 }}>In Cart</Text>
              </View>
            </TouchableOpacity>
          ) : (
            // Add to Cart
            <View style={{ flex: 1 }}>
              <FlatButton
                title='Add to Cart'
                onPress={() => dispatch(addToCart(product))}
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  prodImage: {
    width: '100%',
    height: '100%',
  },
  prodDetailsContainer: {
    flex: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'space-between',
  },
  btnsContainer: {
    flexDirection: 'row',
  },
});
