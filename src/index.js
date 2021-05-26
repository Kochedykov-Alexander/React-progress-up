import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import App from './components/App';
import {store} from './reducers'
import { Provider } from 'react-redux';


ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);


