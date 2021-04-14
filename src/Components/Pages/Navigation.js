import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons'
function Navigation()
{
    const user="Adrian";
    const padding = {
        padding: 5
      }
    return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
                        : <Link style={padding} to="/login">login</Link>
                        }
                    </Nav.Link>
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