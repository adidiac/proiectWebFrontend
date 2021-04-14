import {Image,Container,Card} from 'react-bootstrap'
import {Link} from 'react-router-dom';
function Product({name, price, url,id})
{
    const pageDirection="/product/:"+id;
    return (
        <>
            <Link to={pageDirection}>
                <Card style={{ width: '15rem',marginLeft:20,marginBottom:10 }}>
                    <Card.Img src={url}>

                    </Card.Img>
                    <Card.Body style={{textAlign:"center"}}>
                        <Card.Title>
                            {name}
                        </Card.Title>
                        <Card.Text style={{color:"red"}}>
                            {price.toString()}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </>
    );

}
export default Product;