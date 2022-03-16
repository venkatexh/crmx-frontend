import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import rootReducer from "./redux/reducers/rootReducer";
import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";

const store = createStore(rootReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App/>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);