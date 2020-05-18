import React from 'react';
import { Provider } from 'react-redux';

// Components
import Main from './components/Main';

// Store
import store from './store/store';

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
