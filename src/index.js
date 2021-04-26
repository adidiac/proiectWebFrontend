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
//here would come the get from backend but we will use the hardcodat for user, products;
for(let i=0;i<10;i++)
{
  store.dispatch({type:'ADD_PRODUCT',data:{id:i,url:Exemplu1,price:i*24,name:"Exemplu",author:'',description:' '}});
}
store.dispatch({type:'LOGIN',
data:{
  name:'Diac Adrian',
  admin:false,
  email:'diacadi@gmail.com',
  comenzi:
  [{id:22,pret:222,data:"19/04/2020",produse:[{id:2,url:Exemplu1,price:23,name:"Carte"}]},{id:233213,pret:222,data:"19/04/2020",produse:[]}
  ]
}});
store.dispatch({type:'NEW_USER',data:{
  name:'Diac Adrian',
  admin:false,
  email:'diacadi@gmail.com',
  comenzi:
  [{id:22,pret:222,data:"19/04/2020",produse:[{id:2,url:Exemplu1,price:23,name:"Carte"}]},{id:233213,pret:222,data:"19/04/2020",produse:[]}
  ]
}})
console.log(store.getState().user.admin);

ReactDOM.render( 
    <React.StrictMode >
       <Router>
        <Provider store={store}>
          {store.getState().user.admin?<></>:<App />}
        </Provider>
      </Router>
    </React.StrictMode> ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();