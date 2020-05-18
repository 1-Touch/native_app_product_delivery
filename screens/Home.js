import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

// Components
import CategoryCarousel from '../components/CategoryCarousel';
import ProductCarousel from '../components/ProductCarousel';
import Carousel from '../components/Carousel/Carousel';

// Theme
import { context } from '../Theme/colorSwatch';

// Actions
import { getAllCategories } from '../store/actions/categoryActions';

// Data
import { recentlyViewedProducts, offers, topDeals } from '../data';

export default function Home({ navigation }) {
  // Selectors
  const { categories } = useSelector((state) => state.category);
  const { likedProducts, recentlyViewed } = useSelector(
    (state) => state.product
  );

  // Dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

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
        {recentlyViewed.length > 0 && (
          <View style={{ paddingHorizontal: 10 }}>
            <Text style={styles.title}>Recently Viewed</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.scrollListContainer}
            >
              {recentlyViewed.map((product) => (
                <ProductCarousel
                  key={product.id}
                  product={product}
                  navigation={navigation}
                />
              ))}
            </ScrollView>
          </View>
        )}

        {/* Liked Products */}
        {likedProducts.length > 0 && (
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
        )}

        {/* Top Deals */}
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={styles.title}>Top Deals</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.scrollListContainer}
          >
            {topDeals.map((product) => (
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
