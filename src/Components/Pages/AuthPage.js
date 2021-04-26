import {Form,Button,Tabs,Tab, Container,Card} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {useHistory} from 'react-router-dom';
function LoginComponent()
{
    const setUser=useDispatch();
    const history=useHistory();
    return (<><Form  onSubmit={(e)=>{
      //here will use service for auth
      e.preventDefault();
      if(e.target[0].value==='admin@admin.com')
      {
        setUser({type:'LOGIN',data:{email:e.target[0].value,name:'Admin',admin:true}});
        history.push('/');
      }
      else
      {
      setUser({type:'LOGIN',data:{email:e.target[0].value,name:'Adrian',admin:false,comenzi:[]}});
      history.push('/profile')
      }
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
    return (<><Form style={{margin:30}}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Retype Password</Form.Label>
          <Form.Control type="password" placeholder="Retype Password" />
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