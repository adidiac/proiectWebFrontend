import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Exemplu1 from "./Assets/pictures/1.jpg";
import {Provider} from 'react-redux';
import {createStore,combineReducers} from 'redux';
import {shopListReducer} from './Reducers/shopListReducer';
import {userReducer} from './Reducers/userReducer';
import {productsReducer} from './Reducers/productsReducer';
import {usersReducer} from './Reducers/usersReducer'

import {
  BrowserRouter as Router,
} from "react-router-dom"
import './index.css';


const reducer=combineReducers({
  user:userReducer,
  shop:shopListReducer,
  products:productsReducer,
  users:usersReducer
})

const store=createStore(reducer);

store.subscribe((e)=>{
  console.log(e);
})
ReactDOM.render( 
    <React.StrictMode >
       <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </React.StrictMode> ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();