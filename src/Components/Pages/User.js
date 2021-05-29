import { Row,Container,Col,Carousel,Image, ListGroup,Text, Dropdown,InputGroup,FormControl,Button, Card,CardDeck } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons'
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Exemplu1 from "../../Assets/pictures/1.jpg";
import { useSelector, useDispatch } from 'react-redux'
import {
    Switch,
    Route,
    useRouteMatch,
  useParams
  } from "react-router-dom"
function sumProducts(productList)
{
    let sum=0;
    productList.map((el)=>{sum+=el.price});
    return sum;
}
function User()
{
    const user=useSelector(state=>state.user);
    const dispatch=useDispatch();
    let match = useRouteMatch();
    let matchComenzi=useRouteMatch(match.path+"/comenzi/:id");
    let listaComenzi=user.comenzi;
    console.log("Comenzi")
    console.log(listaComenzi)
    return(
        <Row style={{marginTop:50,marginBottom:50}}>
        <Col sm={3}>
        <ListGroup>
            <ListGroup.Item><Link to={match.url}>Adrian</Link></ListGroup.Item>
            <ListGroup.Item><Link to={match.url+"/comenzi"}>Comenzile mele</Link></ListGroup.Item>
        </ListGroup>
        </Col>
        <Col sm={9}>
        <Switch>
            <Route exact path={match.path+"/"}>
            <Card style={{padding:40}} className="text-center l">
                <Card.Body>
                    <Card.Title>{"Nume: "+user.name}</Card.Title>
                    <Card.Text>
                        {"Email: "+user.email}
                    </Card.Text>
                    <Card.Text>
                        {"Total Comezi: "+(listaComenzi?listaComenzi.length:0)}
                    </Card.Text>
                </Card.Body>
            </Card>
            </Route>
            <Route exact  path={match.path+"/comenzi"}>
            <Card style={{padding:10,textAlign:"center"}}>
                <Card.Body>
                    {listaComenzi.map((elem,index)=>{
                        return <Link to={match.url+"/comenzi/"+elem._id} >
                            <Card style={{marginBottom:15}}>
                            <Row style={{justifyContentent:"space-evenly"}}>
                                <Col><Card >{"Id comanda: "+elem._id}</Card></Col>
                                <Col><Card >{"Total produse: "+elem.productList.length} </Card></Col>
                                <Col><Card >{"Pret total: "+elem.totalPrice}  </Card></Col>
                            </Row>
                            </Card>
                        </Link>
                    })}
                </Card.Body>
            </Card>
            </Route>
            <Route path={match.path+"/comenzi/:id"}>
                <Card>
                    {
                        matchComenzi?
                        listaComenzi.find(el=>el._id==matchComenzi.params.id).productList.map((el)=>{
                            return <Link to={"/product/"+el.id}>
                                <Row style={{justifyContentent:"space-evenly"}}>
                                <Col><Card >{"Id produs: "+el.id} </Card></Col>
                                <Col><Card >{"Pret: "+el.price}  </Card></Col>
                            </Row>
                            </Link>})
                            :
                        <></>
                        }
                </Card>
            </Route>
        </Switch>
        </Col>
    </Row>
    );   
}
export default User;