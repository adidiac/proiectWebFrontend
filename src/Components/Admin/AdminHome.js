import { Container,Image,Row,Col,Card, Button ,Alert} from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom';
import {Collapse} from 'react-bootstrap'
import {useState} from 'react'
import AdminListEditing from './AdminListEditing';
import * as Icon from 'react-bootstrap-icons'
import NewProduct from "./Modals/NewProduct";
function AdminHome()
{
    const dispatch=useDispatch();
    const [openNewProduct,setOpenNewProduct]=useState(false);
    const [openProducts,setOpenProducts]=useState(false);
    const [openUsers,setOpenUsers]=useState(false);
    const [openComenzi,setOpenComenzi]=useState(false);
    const products=useSelector(state=>state.products);
    const users=useSelector(state=>state.users);
    let comenzi=[];
    users.map((el)=>el.comenzi.map((e)=>comenzi.push(e)));
    return (
        <div class="AdminPanel">
        <Container style={{textAlign:'center',marginTop:50}}>
            <h1 style={{color:"whitesmoke"}}> Welcome to Admin Panel</h1>
            <hr style={{border:" 1px solid white",marginTop:40}}></hr>
            <Row style={{justifyContent:'space-evenly'}}>
                <Link style={{ textDecoration: 'none' }} onClick={()=>setOpenUsers(!openUsers)}>
                    <Card bg={'info'} text='white' style={{ width: '18rem' }} className="mb-2">
                    <Card.Body>
                    <Card.Title>Users management</Card.Title>
                    <Card.Text style={{padding:15}}>
                        Here is the link to see the users
                    </Card.Text>
                    </Card.Body>
                    </Card>
                </Link>
                <AdminListEditing listToShow={users} open={openUsers} content={{header:'name',body:'email'}} additionalButtons={[]} buttonList={[
                <Button variant={'outline-info'} size='sm' onClick={(e)=>{
                    dispatch({type:'DELETE_USER',data:{index:e.currentTarget.parentElement.parentElement.id}})
                }}><Icon.X /></Button>,
                ]} />
                <Link style={{ textDecoration: 'none' }} onClick={()=>setOpenComenzi(!openComenzi)}>
                    <Card bg={'info'} text='white' style={{ width: '18rem' }} className="mb-2">
                    <Card.Body>
                    <Card.Title>Comenzi management</Card.Title>
                    <Card.Text style={{padding:15}}>
                        See comands for transportation
                    </Card.Text>
                    </Card.Body>
                    </Card>
                </Link>
                <AdminListEditing listToShow={comenzi} open={openComenzi}  content={{header:'id',body:'pret'}} buttonList={[]}  additionalButtons={[]}/>
                <Link style={{ textDecoration: 'none' }} onClick={()=>setOpenProducts(!openProducts)}>
                    <Card bg={'info'} text='white' style={{ width: '18rem' }} className="mb-2">
                    <Card.Body>
                    <Card.Title>Products management</Card.Title>
                    <Card.Text style={{padding:6}}>
                        Here is the product management where you can delete, add or modify products
                    </Card.Text>
                    </Card.Body>
                    </Card>
                </Link>
        
                <AdminListEditing listToShow={products} open={openProducts} content={{header:'name',body:'price'}} buttonList={[
                <Button variant={'outline-info'} size='sm'><Icon.Pen /></Button>,
                <Button variant={'outline-info'} size='sm' onClick={(e)=>{dispatch({type:'DELETE_PRODUCT',data:{index:e.currentTarget.parentElement.parentElement.id}})}}><Icon.X /></Button>,
                ]}
                additionalButtons={[
                <Button variant='info' onClick={()=>setOpenNewProduct(true)} style={{margin:20,borderRadius:'70%',width:150,height:150}}><Icon.Plus style={{width:100,height:100}} /></Button>]}
                />
                <Button variant="danger" onClick={()=>{dispatch({type:'LOGOUT'}); document.body.style.background=`white`; }}>
                    <Card bg={'danger'} text='white' style={{ width: '18rem' }} className="mb-2">
                    <Card.Body>
                    <Card.Title>Log Out</Card.Title>
                    <Card.Text style={{padding:11}}>
                        Log out as admin
                    </Card.Text>
                    </Card.Body>
                    </Card>
                </Button>
            </Row>
            <NewProduct show={openNewProduct} setShow={setOpenNewProduct}></NewProduct>
        </Container>
        </div>
    );
}
export default AdminHome;