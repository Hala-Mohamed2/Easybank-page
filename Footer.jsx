import './Footer.css';


const Footer = () => {
  return(
    <section className='footer'>
      <div className='container footer-app'>
        <div className="ap">
          <img src="./images/logo.svg" alt="" />
          <div className="icons">
            <img src="./images/icon-facebook.svg" alt="" />
            <img src="./images/icon-youtube.svg" alt="" />
            <img src="./images/icon-twitter.svg" alt="" />
            <img src="./images/icon-pinterest.svg" alt="" />
            <img src="./images/icon-instagram.svg" alt="" />
          </div>
        </div>
        <div className="up">
          <a href="">About Us</a>
          <a href="">Contact</a>
          <a href=""> Blog</a>
        </div>
        <div className="up">
          <a href="">Careers</a>
          <a href="">Support</a>
          <a href="">Privacy Policy</a>
        </div>
        <div className="ap">
          <button className='btn'>Request Invite</button>
          <p>© Easybank. All Rights Reserved</p>
        </div>
      </div>
    </section>
  )
}



export default Footer;