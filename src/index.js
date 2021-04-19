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
import {
  BrowserRouter as Router,
} from "react-router-dom"

const reducer=combineReducers({
  user:userReducer,
  shop:shopListReducer,
  products:productsReducer
})

const store=createStore(reducer);
//here would come the get from backend but we will use the hardcodat for user, products;
for(let i=0;i<10;i++)
{
  store.dispatch({type:'ADD_PRODUCT',data:{id:i,url:Exemplu1,price:i*24,name:"Exemplu",author:'',description:' '}});
}
store.dispatch({type:'LOGIN',
data:{
  name:'Diac Adrian',
  email:'diacadi@gmail.com',
  comenzi:
  [
    {
    id:22,
    produse: [
      {
        id:2,
        name:"Exemplu",
        price:24
      }
      ]
    }
  ]
}});
console.log(store.getState());

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