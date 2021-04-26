import {Navbar,Nav,Button,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons'
import { useSelector, useDispatch } from 'react-redux'
import React, { useState } from 'react';
function Navigation()
{
    const user=useSelector(state=>state.user);
    const shopList=useSelector(state=>state.shop);
    const dispatch=useDispatch();
    const padding = {
        padding: 5
      }
    return (
    <div>
        <Navbar style={{fontSize:24}} collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#" as="span">
                       <Link style={padding} to="/">Home</Link>
                    </Nav.Link>
                    <Nav.Link href="#" as="span">
                        <Link style={padding} to="/products">Produse</Link>
                    </Nav.Link> 
                    <Nav.Link href="#" as="span">
                        {user
                        ? <Link style={padding} to="/profile">{user.name}</Link>
                        : <Link style={padding} to="/login">Login</Link>
                        }
                    </Nav.Link>
                    {user?<Link to='/login'><Button variant="outline-primary" onClick={()=>{dispatch({type:'LOGOUT'})}}>Log Out</Button></Link>:<></>}
                </Nav>
            </Navbar.Collapse>
            <Nav.Link href="#" as="span">
                <Link style={padding} to="/shoplist">
                <Row style={{position:'relative'}}>
                    <Icon.Basket  size={35}/>
                <h5 style={{top:25,left:20,position:'absolute',color:'white',backgroundColor:'red',borderRadius:'50%',width:25,height:25,textAlign:'center'}}>{shopList.length}</h5>
                </Row>
                </Link>
            </Nav.Link>
        </Navbar>
    </div>
    );
}

export default Navigation;