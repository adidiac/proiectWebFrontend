
import * as Icon from 'react-bootstrap-icons'
import adminPane from '../../Assets/adminpanel.png'
import AdminHome from './AdminHome';

function AdminPanel()
{
    document.body.style.background=`url(${adminPane}) no-repeat center center fixed`;
  
    return (
        <>
        <AdminHome />
   
        </>
    );
}
export default AdminPanel;