import React from 'react'
import "./css/sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sidebar = (props) => {


  return (
    <>
    <div className="sidebar-btn">
       
      <button className='travel'>Travel</button>
      
      
      <button className='tech'>Tech</button>
      
      
      <button className='style'>Style</button>
      
      <button className='food'>Food</button>
     
      <button className='car'>Cars</button>
      
    </div>


    <div className="sidebar-tags">

        <h3 className='section-title' >Tags</h3>
        <ol>
            <li><a href="#">#Workspace</a></li>
            <li><a href="#">#Video</a></li>
            <li><a href="#">#Arhitecture</a></li>
            <li><a href="#">#Nature</a></li>
            <li><a href="#">#Aerial</a></li>
            <li><a href="#">#Motivation</a></li>
            <li><a href="#">#Photography</a></li>
            <li><a href="#">#Adventure</a></li>
        </ol>
        
    </div>

    <div className="login">
        <h3 className='section-title' >LOGIN</h3>
        <div className="login-form">
        <label htmlFor="">EMAIL</label>
        <input type="email" name="email" id="" />
        <label htmlFor="">PASSWORD</label>
        <input type="password" name="passward" id="" />
        <button>LOGIN</button>
        </div>
    </div>
    <div className="touch">
        <h3 className='section-title'>STAY IN TOUCH</h3>
        <ol className='online-icon'>
            <li><a href="#"><i className="fa-brands fa-instagram icon-circle"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-facebook icon-circle"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-pinterest icon-circle"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-twitter icon-circle"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-snapchat icon-circle"></i></a></li>
        </ol>
    </div>

<div className="insta-photo">
    <h3 className='section-title'>INSTAGRAM</h3>
    
    <ol className='section-img'>
        <li><img src="./src/images/car.jpg" alt="a" /></li>
        <li><img src="./src/images/food.jpg" alt="b" /></li>
        <li><img src="./src/images/macbook.jpg" alt="c" /></li>
        <li><img src="./src/images/sttyle.jpg" alt="d" /></li>
        <li><img src="./src/images/tech.jpg" alt="e" /></li>
        <li><img src="./src/images/travel.jpg" alt="f" /></li>
    </ol>
</div>



    </>
  )
}

export default Sidebar
