import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'boxicons'
import {createStore} from 'redux'
import { Provider } from 'react-redux';
import reducer from './reducers/rootReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer)

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

