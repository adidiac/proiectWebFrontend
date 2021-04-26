import { Container,Image,Row,Col,Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons'
import {useHistory} from 'react-router-dom';
function CalculateTotalPrice(shopList)
{
    let sum=0;
    shopList.map((el)=>{sum+=el.price});
    return sum;
}
function ShopList()
{
    const history=useHistory();
    const productList=useSelector(state=>state.shop);
    const dispatch = useDispatch();
    const user=useSelector(state=>state.user);
    return (
        <Container>
            {
                productList.length>0?<Card>
                <Card.Body>
                    <Col>
                        {productList.map((el,idx)=>
                            <Card>
                                <Link to={"/product/"+el.id}>
                                <Row style={{justifyContent:'center'}}>
                                    <Col style={{marginLeft:50}}><Card.Img style={{width:100,height:100}} src={el.url}></Card.Img></Col>
                                    <Col ><Card.Text style={{textAlign:'center'}}>{"Name of product is: "+el.name}</Card.Text></Col>
                                    <Col><Card.Text style={{textAlign:'center',color:'red'}}>{el.price}</Card.Text></Col>
                                </Row>
                                </Link>
                               <Row style={{justifyContent:"center"}}> <Button style={{margin:10,width:100,height:50}} onClick={()=>{dispatch({type:'DELETE_SHOP',data:{index:idx}})}}><Icon.BagX /></Button></Row>
                            </Card>
                        )}
                        <Row style={{justifyContent:'center',margin:20}}><Card.Text>{"Total Price is: "+CalculateTotalPrice(productList)}</Card.Text></Row>
                        <Row style={{justifyContent:'center',margin:20}}> <Button onClick={()=>
                            {
                                if(user){
                                    dispatch({type:"ADD_COMANDA",data:{id:2323,data:'azi',produse:productList}});
                                    dispatch({type:'EMPTY'});
                                }
                                else{
                                    window.alert('Please login first');
                                    history.push('/login');
                                }
                            }}>Complete the order</Button></Row>
                    </Col>
                </Card.Body>
                </Card>:
                <Card>
                    <Card.Body >
                        <Card.Text  style={{textAlign:'center',padding:40,color:'red'}}>You have no items in the basket</Card.Text>
                    </Card.Body>
                </Card>
            }
        </Container>
    );
}
export default ShopList;