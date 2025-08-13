import './Header.css';
import { useState } from 'react';

const Header = () => {

  const [show, setShow] = useState(false)



  return(
    <header className='header'>
      <div className="humburger">
        <img src="./images/logo.svg" alt="" />
        <div className="icoo" onClick={()=> setShow(!show)}>
          <img className={`humb ${!show ? "active" : ""}`} src="./images/icon-hamburger.svg" alt="" />
          <img className={`close ${show ? "active" : ""}`} src="./images/icon-close.svg" alt="" />
        </div>
      </div>
      <div className={`links ${show? "active" : ""}`}>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Blog</a>
        <a href="">Careers</a>
      </div>
      <button className='btn'>Request Invite</button>
    </header>
  )
}



export default Header;