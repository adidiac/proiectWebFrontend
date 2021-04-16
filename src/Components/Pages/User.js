import { Row,Container,Col,Carousel,Image, ListGroup,Text, Dropdown,InputGroup,FormControl,Button, Card,CardDeck } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons'
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
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
    let match = useRouteMatch();
    let listaComenzi=[{id:22,pret:222,data:"19/04/2020",produse:[]},{id:22,pret:222,data:"19/04/2020",produse:[]}];

    return(
        <Row style={{marginTop:50,marginBottom:50}}>
        <Col sm={3}>
        <ListGroup>
            <ListGroup.Item><Link to={match.url}>Adrian</Link></ListGroup.Item>
            <ListGroup.Item><Link to={match.url+"/comenzi"}>Comenzile mele</Link></ListGroup.Item>
            <ListGroup.Item><Link to={match.url+"/setari"}>Setari</Link></ListGroup.Item>
        </ListGroup>
        </Col>
        <Col sm={9}>
        <Switch>
            <Route exact path={match.path+"/"}>
            <Card style={{padding:40}} className="text-center l">
                <Card.Body>
                    <Card.Title>{"Nume: Diac Adrian"}</Card.Title>
                    <Card.Text>
                        {"Email: diacadi@gmail.com"}
                    </Card.Text>
                    <Card.Text>
                        {"Total Comezi: 0"}
                    </Card.Text>
                </Card.Body>
            </Card>
            </Route>
            <Route exact  path={match.path+"/comenzi"}>
            <Card style={{padding:10,textAlign:"center"}}>
                <Card.Body>
                    {listaComenzi.map((elem,index)=>{
                        return <Link to={match.url+"/comenzi/:"+elem.id} >
                            <Card style={{marginBottom:15}}>
                            <Row style={{justifyContentent:"space-evenly"}}>
                                <Col><Card >{"Id comanda: "+elem.id}</Card></Col>
                                <Col><Card >{"Total produse: "+elem.produse.length} </Card></Col>
                                <Col><Card >{"Pret total: "+sumProducts(elem.produse)}  </Card></Col>
                            </Row>
                            </Card>
                        </Link>
                    })}
                </Card.Body>
            </Card>
            </Route>
            <Route path={match.path+"/comenzi/:id"}>
                <Card>
                    {listaComenzi.find(el=>el.id===match.params).produse.map((elem=>
                        {

                        }))}
                </Card>
            </Route>
            <Route path={match.path+"/setari"}>
            <Card style={{padding:40,textAlign:"center"}}>
                <Card.Body>
                    <Card.Text>
                        {"Setari"}
                    </Card.Text>
                </Card.Body>
            </Card>
            </Route>
        </Switch>
        </Col>
    </Row>
    );   
}
export default User;