import './About.css';

const boxx = [
  {
    img: './images/icon-online.svg',
    title: 'Online Banking',
    desc: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
  },
  {
    img: './images/icon-budgeting.svg',
    title: 'Simple Budgeting',
    desc: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
  },
  {
    img: './images/icon-onboarding.svg',
    title: 'Fast Onboarding',
    desc: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
  },
  {
    img: './images/icon-api.svg',
    title: 'Open API',
    desc: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
  },
]




const About = () => {
  return(
    <section className=' about'>
      <div className="container about-app">
        <h2>Why choose Easybank?</h2>
        <p>We leverage Open Banking to turn your bank account into your financial hub. <br /> Control 
        your finances like never before.</p>
        <div className="boxs">
          {boxx.map((item , index) => (
            <div className="box">
              <img src={item.img} alt="" />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


export default About;