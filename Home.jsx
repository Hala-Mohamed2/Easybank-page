import './Home.css';


const Home = () => {
  return(
    <section className='container home' >
      <div className='home-up'>
        <h2>Next generation <br /> digital banking</h2>
        <p>Take your financial life online. Your Easybank account will be a one-stop-shop 
        for spending, saving, budgeting, investing, and much more.</p>
        <button className='btn'>Request Invite</button>
      </div>
      <div className='home-down'>
        <img src="./images/image-mockups.png" alt="" />
      </div>
    </section>
  )
}



export default Home;