import React from 'react'
import "./css/footer.css"
const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="about">
                <h3>About</h3>
                <p>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.</p>
                <a href="#">Read Full Story</a>


        </div> 

        <div className="news-letter">
        <h3  >News Letter</h3>
        <div className="login-form">
        
        <input type="email" name="email" id="" placeholder='Your Name' />
        
        <input type="password" name="passward" id="" placeholder='Email Address' />
        <button>SUBSCRIBE</button>
        </div>
        <div className="touch">
        <ol className='online-icon'>
            <li><a href="#"><i className="fa-brands fa-instagram icon-circle"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-facebook icon-circle"></i></a></li>
           
            <li><a href="#"><i className="fa-brands fa-twitter icon-circle"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-snapchat icon-circle"></i></a></li>
        </ol>
        </div>
        </div>    
        
        <div className="navigation">
            <h3>Navigation</h3>
            <div className="big-links">
                <ol>
              <li><a href="#">Cars</a></li>
              <li><a href="#">Food</a></li>
              <li><a href="#">Style</a></li>
              <li><a href="#">Tech</a></li>
              <li><a href="#">Travel</a></li>
               
               </ol>
            </div>
            <div className="small-links">
                <ol>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Licensing</a></li>
              <li><a href="#">Style Guide</a></li>
                </ol>
            </div>
            <div className="pow">
            <p>Copyright &copy; 2025 reserved || Created  by Faran Baig 
</p>
        </div>
        </div>
        



        </div> 
        
    </>
  )
}

export default Footer
