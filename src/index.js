import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HomePage from './components/HomePage/HomePage';
import ShopPage from './components/ShopPage/shopPage';
import {store} from './components/redux/store/store'
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route index path='/' element={<HomePage/>}/>
        <Route element={<ShopPage/>} path='/Shop'/>
      </Route>
     </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


