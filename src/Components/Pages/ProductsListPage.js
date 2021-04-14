import { Row,Container,Col,Carousel,Image, ListGroup,Text, Dropdown,InputGroup,FormControl,Button } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons'
import React, { useState } from 'react';
import Exemplu1 from "../../Assets/pictures/1.jpg";
import Product from '../Product'
function ProductsListPage()
{
    const [filterBy,setFilter]=useState("Filter");
    const [priceInterval,setPriceInterval]=useState("Price Interval");
    const list=[];
    for(let i=0;i<10;i++)
    {
        list.push({url:Exemplu1,price:24,id:20220,name:"Exemplu"});
    }
    return(
        <Container style={{marginTop:20}}>
            <Col>
            <Row>
                <h3>
                    Filter by:
                </h3>
                <div style={{width:20}} />
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {filterBy}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={()=>{setFilter("Price")}}>Price</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{setFilter("Name")}}>Name</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{setFilter("Author")}}>Author</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{setFilter("Popularity")}}>Popularity</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div style={{width:50}} />
                <h3>
                    Set Price Interval:
                </h3>
                <div style={{width:20}} />
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {priceInterval}
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{textAlign:"center"}}>
                        <Dropdown.Item onClick={()=>{setPriceInterval("< 50")}}>{"<50"}</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{setPriceInterval("50-100")}}>{"50-100"}</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{setPriceInterval("100-200")}}>{"100-200"}</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{setPriceInterval("200 >")}}>{"200 >"}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div style={{width:50}} />
                <InputGroup className="mb-3" style={{width:300}}>
                    <FormControl
                    placeholder="Search..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                    <Button variant="outline-secondary"><Icon.Search /></Button>
                    </InputGroup.Append>
                </InputGroup>
            </Row>
            <Row style={{marginTop:20}}>
                {list.map((elem)=><Product name={elem.name} id={elem.id} url={elem.url} price={elem.price}></Product>)}
            </Row>
            </Col>
        </Container>
    );
}
export default ProductsListPage;