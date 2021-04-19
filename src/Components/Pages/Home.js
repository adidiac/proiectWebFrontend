import { Row,Container,Col,Carousel,Image, ListGroup } from "react-bootstrap";
import { Divider } from "react-bootstrap";
import homeImage1 from '../../Assets/Wallpaper1.png'
import homeImage2 from '../../Assets/Wallpaper2.png'
import Product from '../Product'
import Exemplu from "../../Assets/pictures/1.jpg";
function Home()
{
    const padding = {
        padding: 5
      };
    const imageDimension={
        height:400,
        width:"max"
    }
    let list=[{url:Exemplu,price:24,id:20220,name:"Exemplu"}];
    for(let i=0;i<10;i++)
    {
        list.push({url:Exemplu,price:24,id:20220,name:"Exemplu"});
    }
    return (
        <Container>
            <Col>
                <Carousel >
                <Carousel.Item>
                <Image  style={{height:300,width:"100%"}} src={homeImage1} fluid></Image>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  >
                    <Image  style={{height:300,width:"100%"}} src={homeImage2} fluid></Image>
                </Carousel.Item>
                </Carousel>
                <hr></hr>
                    <h3>Top products:</h3>
                    <Container style={{marginTop:20,padding:10,overflow: "auto",display: "block",tableLayout:"auto"}}>
                    <ListGroup  horizontal>
                        {list.map((elem)=><ListGroup.Item style={{width:300}}><Product name={elem.name} id={elem.id} url={elem.url} price={elem.price}></Product></ListGroup.Item>)}
                    </ListGroup>
                    </Container>
            </Col>
        </Container>
    );    
}
export default Home;