import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import "number-brm"
import {BrowserRouter} from "react-router-dom"

import rootReducer from "./context/reducer"
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux"

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import { PersistGate } from 'redux-persist/integration/react'
import MainLoader from './components/loader/MainLoader';

const App = React.lazy(() => import("./App"))


const persistConfig = {
  key: 'online-search',
  storage,
  blacklist: [],
  whitelist: ["auth", "cart", "heart","seller"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer)
const persister = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<MainLoader/>}>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persister}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
