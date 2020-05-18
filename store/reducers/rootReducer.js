import { combineReducers } from 'redux';

// Reducers
import authReducer from './authReducer';
import productReducer from './productReducer';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  category: categoryReducer,
})

export default rootReducer;