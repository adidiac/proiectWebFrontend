import './Footer.css'
import {icon} from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import Logo from '../../../Assets/logo.png'
function Footer()
{
    return(
      <div>
        <footer class="footer" >
        <div class="footer-left col-md-4 col-sm-6">
          <p class="about">
            <span> About the company</span> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
            ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
          </p>
          <div class="icons">
            <a href="#"><Icon.Facebook /></a>
            <a href="#"><Icon.Instagram /></a>
            <a href="#"><Icon.Linkedin /></a>
            <a href="#"><Icon.Twitter /></a>
          </div>
        </div>
        <div class="footer-center col-md-4 col-sm-6">
          <div>
            <i class="fa fa-map-marker"></i>
            <p><span> Street name and number</span> City, Country</p>
          </div>
          <div>
            <i class="fa fa-phone"></i>
            <p> (+00) 0000 000 000</p>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p><a href="#"> office@company.com</a></p>
          </div>
        </div>
        <div class="footer-right col-md-4 col-sm-6">
          <span><img style={{width:200,height:200}} src={Logo} /></span>
          <p class="name"> Diac Adrian &copy; 2016</p>
        </div>
      </footer>
      </div>
    );
}

export default Footer;