import { Container,Image,Row,Col,Card, Button ,Alert} from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom';
import {Collapse} from 'react-bootstrap'
import {useState} from 'react'
import * as Icon from 'react-bootstrap-icons'
function AdminListEditing({open,listToShow,buttonList,content,additionalButtons})
{
    const dispatch=useDispatch();
    
    return (<>
         <Collapse in={open}>
                    <Container variant={'info'} style={{background:'lightblue',margin:10}} >
                        <Row style={{justifyContent:'center'}}>
                            {listToShow.map((el,idx)=>
                            {
                                return ( 
                                <Card style={{margin:20}}>
                                    <Card.Header>
                                        <Row id={idx}>
                                            <Col>{content.header+': '+el[content.header]}</Col>
                                            {buttonList.map((el,id)=>
                                            {
                                            return <Col>{el}</Col>
                                            })}
                                        </Row>
                                    </Card.Header>
                                    <Card.Body>
                                        {content.body+': '+el[content.body]}
                                    </Card.Body>
                                </Card>);
                            })}
                            { additionalButtons.map((el)=>el) }
                        </Row>
                    </Container>
        </Collapse>
    </>);
}
export default AdminListEditing;