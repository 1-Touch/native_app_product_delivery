import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Root Reducer
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
