import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';

// Components
import CategoryCarousel from '../components/CategoryCarousel';
import ProductCarousel from '../components/ProductCarousel';
import Carousel from '../components/Carousel/Carousel';

// Theme
import { context } from '../Theme/colorSwatch';

// Data
import { recentlyViewedProducts, likedProducts, offers } from '../data';

export default function Home({ navigation }) {
  // Selector
  const { categories } = useSelector((state) => state.category);

  return (
    <ScrollView>
      <StatusBar backgroundColor={context.primary} barStyle='light-content' />
      <View style={styles.container}>
        {/* Image Carousel */}
        <Carousel data={offers} />

        {/* Categories */}
        <View style={{ paddingHorizontal: 10 }}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.scrollListContainer}
          >
            {categories.map((category) => (
              <CategoryCarousel
                key={category.id}
                category={category}
                navigation={navigation}
              />
            ))}
          </ScrollView>
        </View>

        {/* Recently Viewed */}
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={styles.title}>Recently Viewed</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.scrollListContainer}
          >
            {recentlyViewedProducts.map((product) => (
              <ProductCarousel
                key={product.id}
                product={product}
                navigation={navigation}
              />
            ))}
          </ScrollView>
        </View>

        {/* Liked Products */}
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={styles.title}>Liked Products</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.scrollListContainer}
          >
            {likedProducts.map((product) => (
              <ProductCarousel
                key={product.id}
                product={product}
                navigation={navigation}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  carousel: {
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
    color: '#595959',
    fontWeight: 'bold',
  },
  scrollListContainer: {
    marginVertical: 5,
  },
});
