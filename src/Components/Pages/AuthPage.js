import {Form,Button,Tabs,Tab, Container,Card} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import * as UserService from '../../Service/usersService'
import {useHistory} from 'react-router-dom';
function LoginComponent()
{
    const setUser=useDispatch();
    const user=useSelector(state=>state.user)
    const history=useHistory();
    return (<><Form  onSubmit={async (e)=>{
      //here will use service for auth
      e.preventDefault();
      UserService.loginUser(e.target[0].value,e.target[1].value,setUser,history);
    }}
    style={{margin:30}}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Container  style={{textAlign:"center"}}>
        <Button  variant="primary" type="submit">
          Submit
        </Button>
        </Container>
      </Form></>);
}
function RegisterComponent()
{
  const setUser=useDispatch();
  const user=useSelector(state=>state.user)
  const history=useHistory();
    return (<><Form style={{margin:30}} onSubmit={async (e)=>{
      //here will use service for auth
      e.preventDefault();
      UserService.registerUser(e.target[0].value,e.target[1].value,e.target[2].value,setUser,history);
      }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Your name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Container  style={{textAlign:"center"}}>
        <Button  variant="primary" type="submit">
          Submit
        </Button>
        </Container>
      </Form></>);
}
function AuthPage()
{
    return (
    <Container>
        <Card style={{margin:20,padding:20}}>
            <Tabs defaultActiveKey="Login" id="uncontrolled-tab-example" >
                <Tab eventKey="Register" title="Register">
                    <RegisterComponent></RegisterComponent>
                </Tab>  
                <Tab eventKey="Login" title="Login">
                    <LoginComponent ></LoginComponent>
                </Tab>
            </Tabs>
        </Card>
    </Container>
        );
}
export default AuthPage;