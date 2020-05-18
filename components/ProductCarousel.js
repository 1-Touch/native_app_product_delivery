import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function ProductCarousel(props) {
  const { id, name, image, price, discount } = props.product;
  const { navigation } = props;

  // Limit title length
  const limitingLength = 15;
  const title =
    name.slice(0, limitingLength) + (name.length > limitingLength ? '...' : '');

  const handleProductDetail = () => {
    navigation.navigate('ProductDetails', props.product);
  };

  return (
    <>
      <TouchableOpacity onPress={handleProductDetail}>
        <ImageBackground style={styles.imageCard} source={image}>
          {/* discount */}
          <View style={styles.discountBox}>
            <Text style={styles.discountBoxTitle}>{discount} %</Text>
            <Text style={styles.discountBoxSubTitle}>OFF</Text>
          </View>
          {/* description */}
          <View style={styles.productDetailCard}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.rating}>4.5 ☆</Text>
            </View>
            <View style={styles.detailsContainer}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text
                  style={{
                    ...styles.title,
                    fontSize: 12,
                    color: 'rgba(255,255,255,0.8)',
                    textDecorationLine: 'line-through',
                  }}
                >
                  $ {price}
                </Text>
                <Text
                  style={{
                    ...styles.title,
                    fontSize: 14,
                    marginHorizontal: 5,
                  }}
                >
                  $ 80
                </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome5 name='fire' size={14} color='red' />
                <Text style={{...styles.title, fontSize: 8, marginHorizontal: 2}}>Trending</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  imageCard: {
    width: 200,
    height: 160,
    borderRadius: 15,
    marginRight: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  discountBox: {
    backgroundColor: 'black',
    alignItems: 'center',
    alignSelf: 'flex-end',
    width: '13%',
    marginRight: 12,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 7,
  },
  discountBoxTitle: {
    color: '#fff',
    fontSize: 10,
  },
  discountBoxSubTitle: {
    color: '#fff',
    fontSize: 8,
  },
  productDetailCard: {
    position: 'absolute',
    bottom: 5,
    // justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    // backgroundColor: 'rgba(0,0,0,0.1)',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    // marginVertical: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 8,
  },
  rating: {
    backgroundColor: 'yellow',
    paddingHorizontal: 1,
    marginHorizontal: 5,
    fontSize: 8,
    alignSelf: 'auto',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
