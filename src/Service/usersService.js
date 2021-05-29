import axios from 'axios'
const headers = token => {
    token = `bearer ${token}`
    const config = {
        headers: { Authorization: token },
      }
    return config
}
  
async function loginUser(email,password,setUser,history)
{
    try {
        await axios.post('http://localhost:3001/usersapi/login',{email:email,password:password}).then(res=>{
            if(res.status==200){
                console.log(res.data)
                setUser({type:'LOGIN',data:res.data});
                if(res.data.type=="normal")
                    history.push('/profile')
                else
                    history.push('/');
            }
        })
    } catch (error) {
        alert("Credentiale incorecte")
    }
   
}
async function registerUser(name,email,password,setUser,history)
{
    try {
        await axios.post('http://localhost:3001/usersapi/register',{name:name,email:email,password:password}).then(res=>{
            if(res.status==200){
                console.log(res.data)
                setUser({type:'LOGIN',data:res.data});
                history.push('/profile')
            }
        })
    } catch (error) {
        setUser(0);
        alert("Exista acest user")
    }
}

async function getAllUsers(adminuser,dispatch)
{
    try {
        await axios.post('http://localhost:3001/usersapi/all',{},headers(adminuser.token)).then(res=>{
            if(res.status==200){
                console.log(res.data)
                res.data.map(el=>{
                    console.log(el)
                    dispatch({type:'NEW_USER',data:el})
                })
            }
        })
    } catch (error) {
        alert("Imi pare rau nu esti admin")
    }
}

async function deleteUser(id,adminuser)
{
    try {
        await axios.delete('http://localhost:3001/usersapi/'+id,headers(adminuser.token)).then(res=>{
            if(res.status==200){
                console.log(res.data)
            }
        })
    } catch (error) {
        alert("Imi pare rau nu esti admin")
        console.log(error)
    }
}


async function createOrder(order,user,dispatch)
{
    try {
        await axios.post('http://localhost:3001/usersapi/order',{order:order},headers(user.token)).then(res=>{
            if(res.status==200){
                console.log(res)
                dispatch({type:"ADD_COMANDA",data:{_id:res.data.id,productList:res.data.comanda.productList,totalPrice:res.data.comanda.totalPrice}});
                dispatch({type:'EMPTY'});
            }
        })
    } catch (error) {
        
    }
}

export {loginUser,getAllUsers,deleteUser,registerUser,createOrder};