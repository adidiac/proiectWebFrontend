import axios from 'axios'
const headers = token => {
    token = `bearer ${token}`
    const config = {
        headers: { Authorization: token },
      }
    return config
}
const headersWithImage=token=>
{
    token = `bearer ${token}`
    const config = {
        headers: { Authorization: token , 'Content-Type': 'multipart/form-data'},
      }
    return config
}
async function getAllProducts(dispatch)
{
    axios.get('http://localhost:3001/productsapi/').then(res=>{
        res.data.map((elem)=>{
            console.log(elem.url)
            dispatch({type:'ADD_PRODUCT',data:
            {
                id:elem.id,
                url:elem.url,
                price:elem.price,
                name:elem.name,
                author:elem.author,
                description:elem.description
            }});
        })
        
    })
}

async function createProduct(product,adminuser,dispatch)
{
    let formData=new FormData();
    formData.append('productImage',product.url);
    formData.append('price',product.price);
    formData.append('author',product.author);
    formData.append('description',product.description);
    formData.append('name',product.name);
    console.log(formData)
    console.log(product)
    try {
        await axios.post('http://localhost:3001/productsapi/add',formData,headersWithImage(adminuser.token)).then(res=>{
            if(res.status==200){
                dispatch({type:'ADD_PRODUCT',data:{id:res.data.id,url:res.data.url,price:res.data.price,name:res.data.name,author:res.data.author,description:res.data.description}});
                console.log(res.data)
            }
        })
    } catch (error) {
        alert("Imi pare rau nu esti admin")
        console.log(error)
    }
}

async function deleteProduct(id,adminuser)
{
    console.log("Product id")
    console.log(id)
    try {
        await axios.delete('http://localhost:3001/productsapi/'+id,headers(adminuser.token)).then(res=>{
            if(res.status==200){
                console.log(res.data)
            }
        })
    } catch (error) {
        alert("Imi pare rau nu esti admin")
        console.log(error)
    }
}

export {getAllProducts,createProduct,deleteProduct};