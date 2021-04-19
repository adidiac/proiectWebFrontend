import {Navbar,Nav,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons'
import React, { useState } from 'react';
function Navigation()
{
    const [user,setUser]=useState("Adrian");
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
                        ? <Link style={padding} to="/profile">{user}</Link>
                        : <Link style={padding} to="/login">Login</Link>
                        }
                    </Nav.Link>
                    {user?<Button variant="outline-primary" onClick={()=>{setUser(0)}}>Log Out</Button>:<></>}
                </Nav>
            </Navbar.Collapse>
            <Nav.Link href="#" as="span">
                <Link style={padding} to="/shoplist"><Icon.Basket  size={30}/></Link>
            </Nav.Link>
        </Navbar>
    </div>
    );
}

export default Navigation;