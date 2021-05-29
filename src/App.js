import Navigation from './Components/Pages/Navigation'
import Footer from './Components/Pages/Footer/Footer'
import Home from './Components/Pages/Home'
import {useEffect} from 'react'
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
import * as ProductService from './Service/productService'
function searchProduct(products,id)
{
  console.log("Products")
  console.log(id)
  console.log(products)
  let e= products.find(
    el=>(el.id==id||el._id==id)
  );
  console.log(e);
  return e;
}
function App() {

  let matchProduct=useRouteMatch("/product/:id");
  const dispatch = useDispatch()
  const products=useSelector(state=>state.products);
  const user=useSelector(state=>state.user);
  useEffect(() => {
    console.log('effect')
    ProductService.getAllProducts(dispatch)
  }, [])
  return ( 
    <div  >
      {
      user.type=="admin"?<AdminPanel />:  
      <div className="NormalUser">
        <Navigation /> 
        <div className="container content-wrap">
          <Switch>
              <Route path="/product/:id">
                {
                  matchProduct?
                  (searchProduct(products,matchProduct.params.id)?
                  <ProductPage 
                  url={searchProduct(products,matchProduct.params.id).url}
                  id={searchProduct(products,matchProduct.params.id).id}
                  description={searchProduct(products,matchProduct.params.id).description}
                  author={searchProduct(products,matchProduct.params.id).author}
                  price={searchProduct(products,matchProduct.params.id).price}
                  name={searchProduct(products,matchProduct.params.id).name}
                  />:<h3 style={{margin:70,color:'red'}}>Nu mai exista acest produs</h3>):<h3 style={{margin:20,color:'red'}}>Nu mai exista acest produs</h3>
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