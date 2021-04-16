import { useSelector, useDispatch } from 'react-redux'
import Navigation from './Components/Pages/Navigation'
import Footer from './Components/Pages/Footer/Footer'
import Home from './Components/Pages/Home'
import "./App.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom"
import ProductsListPage from './Components/Pages/ProductsListPage'
import User from './Components/Pages/User'
function App() {
    return ( 
    <div className = "App page-container" >
       <Navigation /> 
       <div className="container content-wrap">
        <Switch>
            <Route path="/products/:id">
            </Route>
            <Route path="/products">
              <ProductsListPage />
            </Route>
            <Route path="/profile">
            <User />
            </Route>
            <Route path="/login">
            </Route>
  
            <Route exact path="/">'
              <Home />
            </Route>
        </Switch>
      </div>
      <Footer />
    </div>
    );
}

export default App;