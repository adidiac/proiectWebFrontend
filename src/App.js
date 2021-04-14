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
function App() {
    return ( 
    <div className = "App page-container" >
       <Navigation /> 
       <div className="container content-wrap">
        <Switch>
            <Route path="/products/:id">
            </Route>
            <Route path="/products">
            </Route>
            <Route path="/profile">
            </Route>
            <Route path="/login">
            </Route>
            <Route path="/">'
              <Home />
            </Route>
        </Switch>
      </div>
      <Footer />
    </div>
    );
}

export default App;