import { Container,Image,Row,Col,Card, Button ,Alert,Modal,Form, useAccordionToggle} from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux'
import {useState} from 'react'
import * as Icon from 'react-bootstrap-icons'
function EditProduct({show,setShow,id,name,description,price,author,url})
{
    
    const dispatch=useDispatch();
    const productsLength=useSelector(state=>state.products).length;
    return <>
    <Modal show={show} onHide={()=>setShow(!show)}>
        <Modal.Header closeButton>
          <Modal.Title>New Product info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={(e)=>{
            e.preventDefault();
            dispatch({type:'UPDATE_PRODUCT',data:{id:id,url:e.target[4].value,price:e.target[2].value,name:e.target[0].value,author:e.target[3].value,description:e.target[1]}});
                }}>
            <Form.Group controlId="formName">
                <Form.Control type="text" placeholder={name} />
            </Form.Group>

            <Form.Group controlId="formDescription">
                <Form.Control type="text" placeholder={description}/>
            </Form.Group>

            <Form.Group controlId="formDescription">
                <Form.Control type="text" placeholder={price} />
            </Form.Group>

            <Form.Group controlId="formDescription">
                <Form.Control type="text" placeholder={author} />
            </Form.Group>

            {/* File */}
            <Form.File id="formcheck-api-regular">
            <Form.File.Label>Image for the product</Form.File.Label>
            <Form.File.Label>Old value is {url}</Form.File.Label>
            <Form.File.Input />
            </Form.File>          

            <br></br>
            <Row style={{justifyContent:'center'}}> 
            <Button variant="info" type="submit" onClick={()=>setShow(!show)}>
                Submit
            </Button>
            </Row>
            </Form>

        </Modal.Body>
      </Modal>
    </>
}
export default EditProduct;