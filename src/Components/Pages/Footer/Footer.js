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
            <span> About the company</span> 
            This is a book store as frontend for a web project for school. More exactly for 
            Military Tehnical Academy.You can find me for other projects down here.
            </p>
          <div class="icons">
            <a href="https://www.facebook.com/adi.diac" target="_blank"><Icon.Facebook /></a>
            <a href="https://www.instagram.com/_adrian_diac/" target="_blank"><Icon.Instagram /></a>
            <a href="https://www.linkedin.com/in/adrian-diac-7381531a2/" target="_blank"><Icon.Linkedin /></a>
            <a href="https://github.com/adidiac" target="_blank"><Icon.Github /></a>
          </div>
        </div>
        <div class="footer-center col-md-4 col-sm-6">
          <div>
            <i class="fa fa-map-marker"></i>
          </div>
          <div>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p><a href="#"> diacadi@gmail.com</a></p>
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