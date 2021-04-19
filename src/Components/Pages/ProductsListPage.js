import { Row,Container,Col,Carousel,Image, ListGroup,Text, Dropdown,InputGroup,FormControl,Button } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons'
import { useSelector, useDispatch } from 'react-redux'
import React, { useState } from 'react';
import Exemplu1 from "../../Assets/pictures/1.jpg";
import Product from '../Product'
function comparePrice(a,b)
{
    if(a.price>b.price)
        return 1;
    if(a.price<b.price)
        return -1;
    return 0;
}
function compareName(a,b)
{
    if(a.name>b.name)
        return 1;
    if(a.name<b.name)
        return -1;
    return 0;
}
function ProductsListPage()
{
    const [filterBy,setFilter]=useState("Filter");
    const [priceInterval,setPriceInterval]=useState("Price Interval");
    const products=useSelector(state=>state.products);
    const [list,setList]=useState(products);
    return(
        <Container style={{marginTop:20}}>
            <Col>
            <Row style={{justifyContent:"space-evenly"}}>
                
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
                        <Dropdown.Item onClick={()=>{setFilter("Price");setList(list.sort(comparePrice))}}>Price</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{setFilter("Name");setList(list.sort(compareName))}}>Name</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{setFilter("Author")}}>Author</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </Row>
                <Row>
                    <h3>
                        Set Price Interval:
                    </h3>
                    <div style={{width:20}} />
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {priceInterval}
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{textAlign:"center"}}>
                            <Dropdown.Item onClick={()=>{setPriceInterval("< 50");setList(products.filter(el=>el.price<50));}}>{"<50"}</Dropdown.Item>
                            <Dropdown.Item onClick={()=>{setPriceInterval("50-100");setList(products.filter(el=>(el.price>50 & el.price<100)));}}>{"50-100"}</Dropdown.Item>
                            <Dropdown.Item onClick={()=>{setPriceInterval("100-200");setList(products.filter(el=>(el.price>100 & el.price<200)));}}>{"100-200"}</Dropdown.Item>
                            <Dropdown.Item onClick={()=>{setPriceInterval("200 >");setList(products.filter(el=>el.price>200));}}>{"200 >"}</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </Row>
               
               
                    <Row>
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
              
            </Row>
            <Row style={{marginTop:20}}>
                {list.map((elem)=><Product name={elem.name} id={elem.id} url={elem.url} price={elem.price}></Product>)}
            </Row>
            </Col>
        </Container>
    );
}
export default ProductsListPage;