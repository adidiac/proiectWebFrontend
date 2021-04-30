import { Container,Image,Row,Col,Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux'
function ProductPage({url,name,description,price,author,id})
{
    const dispatch=useDispatch();
    return (<Container style={{padding:20}}>
        <Row>
            <Col style={{justifyContent:"center"}}>
                <Image src={url}>
                </Image>
            </Col>
            <Col>
                <Row>{"Name: "+name}</Row>
                <hr></hr>
                <Row>{"Author: " + author}</Row>
                <hr></hr>
                <Row>
                    {"Description: "}
                    <br />
                    {
                        description
                    }
                </Row>
                <hr></hr>
                <Row style={{fontWeight:"bold",color:"red"}}>{"Price: "+price}</Row>
                <hr></hr>
                <Row style={{justifyContent:"center"}}>
                    <Button style={{width:"100%"}} onClick={()=>{dispatch({type:'NEW_SHOP',data:{id:id,url:url,name:name,description:description,price:price,author:author}})}}>Buy</Button>
                </Row>
            </Col>
        </Row>
    </Container>);

}
export default ProductPage;