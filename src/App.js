import Navigation from './Components/Pages/Navigation'
import Footer from './Components/Pages/Footer/Footer'
import Home from './Components/Pages/Home'
import { useSelector, useDispatch } from 'react-redux'
import "./App.css"
import {
    BrowserRouter as Router,
    Switch,
    useRouteMatch,
    Route,
  } from "react-router-dom"
import ProductsListPage from './Components/Pages/ProductsListPage'
import User from './Components/Pages/User'
import AuthPage from './Components/Pages/AuthPage'
import ProductPage from './Components/Pages/ProductPage'
import ShopList from './Components/Pages/ShopList'
import AdminPanel from './Components/Admin/AdminPanel'
function searchProduct(products,id)
{
  let e= products.find(
    el=>el.id==id
  );
  console.log(e);
  return e;
}
function App() {

  let matchProduct=useRouteMatch("/product/:id");
  const products=useSelector(state=>state.products);
  const user=useSelector(state=>state.user);
  return ( 
    <div  >
      {
      user.admin?<AdminPanel />:  
      <div className="NormalUser">
        <Navigation /> 
        <div className="container content-wrap">
          <Switch>
              <Route path="/product/:id">
                {
                  matchProduct?
                  <ProductPage 
                  url={searchProduct(products,matchProduct.params.id).url}
                  id={searchProduct(products,matchProduct.params.id).id}
                  description={searchProduct(products,matchProduct.params.id).description}
                  author={searchProduct(products,matchProduct.params.id).author}
                  price={searchProduct(products,matchProduct.params.id).price}
                  name={searchProduct(products,matchProduct.params.id).name}
                  />:<></>
                }
              </Route>
              <Route path="/products">
                <ProductsListPage />
              </Route>
              <Route path="/profile">
              <User />
              </Route>
              <Route path="/login">
                <AuthPage />
              </Route>
              <Route exact path="/">'
                <Home />
              </Route>
              <Route path="/shoplist">'
                <ShopList />
              </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    }
    </div>
    );
}

export default App;