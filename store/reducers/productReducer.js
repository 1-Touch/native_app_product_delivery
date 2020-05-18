const initialState = {
  products: [],
  likedProducts: [],
  recentlyViewed: [],
  cartProducts: [],
  cartProductsQuantity: [],
  cartTotal: 0,
};

const productReducer = (state = initialState, action) => {
  let product, products, list;
  switch (action.type) {
    case 'PRODUCTS_BY_SUBCATEGORY':
      console.log('product by cat reducer');
      return {
        ...state,
        products: action.payload,
      };
    case 'LIKE_PRODUCT':
      return {
        ...state,
        likedProducts: [action.payload, ...state.likedProducts],
      };
    case 'UNLIKE_PRODUCT':
      return {
        ...state,
        likedProducts: state.likedProducts.filter(
          (product) => product.id != action.payload
        ),
      };
    case 'ADD_TO_CART':
      product = action.payload;
      product.quantity = 1;
      state.cartTotal += parseInt(product.price);
      return {
        ...state,
        cartProducts: [product, ...state.cartProducts],
      };
    case 'REMOVE_FROM_CART':
      product = state.cartProducts.find(
        (product) => product.id == action.payload
      );
      state.cartTotal -= parseInt(product.price);
      return {
        ...state,
        cartProducts: state.cartProducts.filter(
          (product) => product.id != action.payload
        ),
      };
    case 'INCREASE_QUANTITY':
      product = state.cartProducts.find(
        (product) => product.id == action.payload
      );
      product.quantity += 1;
      state.cartTotal += parseInt(product.price);
      products = state.cartProducts.filter(
        (product) => product.id != action.payload
      );
      return {
        ...state,
        cartProducts: [product, ...products],
      };
    case 'DECREASE_QUANTITY':
      product = state.cartProducts.find(
        (product) => product.id == action.payload
      );
      if (product.quantity > 1) {
        product.quantity -= 1;
        state.cartTotal -= parseInt(product.price);
      }
      products = state.cartProducts.filter(
        (product) => product.id != action.payload
      );
      return {
        ...state,
        cartProducts: [product, ...products],
      };
    case 'CLEAR_PRODUCT_LIST':
      return {
        ...state,
        products: [],
      };
    case 'RECENTLY_VIEWED':
      product = action.payload;
      const isPresent = state.recentlyViewed.find(
        (item) => item.id === product.id
      );
      if (isPresent) {
        products = state.recentlyViewed.filter(
          (item) => item.id !== product.id
        );
        list = [product, ...products];
      } else {
        list = [product, ...state.recentlyViewed];
      }
      return {
        ...state,
        recentlyViewed: list,
      };
    default:
      return state;
  }
};

export default productReducer;
