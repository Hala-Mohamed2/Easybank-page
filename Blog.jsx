import './Blog.css';


const items = [
  {
    img: './images/image-currency.jpg',
    spm: 'By Claire Robinson',
    title: 'Receive money in any currency with no fees',
    desc: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …',
  },
  {
    img: './images/image-restaurant.jpg',
    spm: 'By Wilson Hutton',
    title: 'Treat yourself without worrying about money',
    desc: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
  },
  {
    img: './images/image-plane.jpg',
    spm: 'By Wilson Hutton',
    title: 'Take your Easybank card wherever you go',
    desc: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
  },
  {
    img: './images/image-confetti.jpg',
    spm: 'By Claire Robinson',
    title: 'Our invite-only Beta accounts are now live!',
    desc: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
  },
]


const Blog = () => {
  return(
    <section className='blog'>
      <div className='container blog-top'>
        <h3>Latest Articles</h3>
        <div className="row">
          {items.map((item , index) => (
            <div className="col">
              <img src={item.img} alt="" />
              <div className="co">
                <span>{item.spm}</span>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



export default Blog;