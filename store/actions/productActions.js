import { products } from '../../data';

export const productsBySubcategory = (products) => {
  return {
    type: 'PRODUCTS_BY_SUBCATEGORY',
    payload: products,
  };
};

export const getProductsBySubcategory = (scategory) => {
  return (dispatch) => {
    const subcategoryProducts = products.filter(
      (product) => product.category['subcategory'] === scategory
    );
    setTimeout(() => {
      return dispatch(productsBySubcategory(subcategoryProducts));
    }, 3000);
  };
};

export const likeProduct = (product) => {
  return {
    type: 'LIKE_PRODUCT',
    payload: product,
  };
};

export const unlikeProduct = (id) => {
  return {
    type: 'UNLIKE_PRODUCT',
    payload: id,
  };
};

export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product,
  };
};

export const removeFromCart = (id) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: id,
  };
};

export const increaseQuantity = (id) => {
  return {
    type: 'INCREASE_QUANTITY',
    payload: id,
  };
};

export const decreaseQuantity = (id) => {
  return {
    type: 'DECREASE_QUANTITY',
    payload: id,
  };
};

export const clearProductList = () => {
  return {
    type: 'CLEAR_PRODUCT_LIST',
  };
};
