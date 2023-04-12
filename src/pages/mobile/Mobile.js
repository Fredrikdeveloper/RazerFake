import '../mobile/Mobile.css'
import { HashLink } from "react-router-hash-link";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import NavbarTwo from '../../components/navbarTwo/NavbarTwo';
const Mobile = () => {
    return(
        <div>
          <Navbar />
          <div className='place-need-for-ots'></div>
          <NavbarTwo />
              <div id="up" className='PC-Block'>
            <h2 className='green-text'>ENGINEERED FOR THE GAME, DESIGNED FOR LIFE</h2>
            <p className='gray-text'>This is freedom of play, redefined. Our mobile gaming and lifestyle audio products are crafted to seamlessly integrate <br />
gaming into every aspect of your life.</p>
        </div>
        <div className='reklame-block-mobile'>
       <h2>RAZER EDGE</h2>
       <p className='gray-text'>The Ultimate Android Gaming Handheld</p>
       <div className='Link-position'>
       <HashLink className='link-color' to="/store#mobilies">
              Learn More {">"}
            </HashLink>
       </div>
   </div>

   <div className='Product-cards container'>
            <div className='Product-card'>
                <div className="Product-card-img">
                <img src="https://razer-shop.netlify.app/static/media/iphone.13ece4ea997fd66f9fd2.jpg" alt="image" />
                </div>
                  <div className='card-body'>
                       <h3 className='rek-block-text'>WEBCAMS</h3>
                       <p>Tuned for gaming, lifestyle, or a perfect mix of both and <br /> also...</p>
                       <HashLink className='link-color' to="/store#mobilies">
              Learn More {">"}
            </HashLink>
                  </div>
            </div>
            <div className='Product-card'>
                <div className="Product-card-img">
                <img src="https://razer-shop.netlify.app/static/media/android.d268e8bce7dcefe7f19b.jpg" alt="image" />
                </div>
                  <div className='card-body'>
                       <h3 className='rek-block-text'>MICROPHONES</h3>
                       <p>Tuned for gaming, lifestyle, or a perfect mix of both and <br /> also...</p>
                       <HashLink className='link-color' to="/store#mobilies">
              Learn More {">"}
            </HashLink>
                  </div>
            </div>
            <div className='Product-card'>
                <div className="Product-card-img">
                <img src="https://razer-shop.netlify.app/static/media/kishi.a3af1219ca17ee677674.jpg" alt="image" />
                </div>
                  <div className='card-body'>
                       <h3 className='rek-block-text'>CAPTURE CARD & OTHERS</h3>
                       <p>Tuned for gaming, lifestyle, or a perfect mix of both and <br /> also...</p>
                       <HashLink className='link-color' to="/store#mobilies">
              Learn More {">"}
            </HashLink>
                  </div>
            </div>
</div>
<div className='reklame-block-mobile2'>
       <h2>GO THE EXTRA MILE</h2>
       <p className='gray-text'>When you’re filling those few minutes in line at the coffee shop or commuting to <br /> work with a quick game or listening to that banger on repeat, Razer has the accessory that lets fellow gamers know they’re among their own.</p>
       <div className='Link-position'>
       <HashLink className='link-color' to="/store#mobilies">
              Learn More {">"}
            </HashLink>
       </div>
   </div>
   <div className='Product-cards container'>
            <div className='Product-card'>
                <div className="Product-card-img">
                <img src="https://razer-shop.netlify.app/static/media/iphone.13ece4ea997fd66f9fd2.jpg" alt="image" />
                </div>
                  <div className='card-body'>
                       <h3 className='rek-block-text'>WEBCAMS</h3>
                       <p>Tuned for gaming, lifestyle, or a perfect mix of both and <br /> also...</p>
                       <HashLink className='link-color' to="/store#mobilies">
              Learn More {">"}
            </HashLink>
                  </div>
            </div>
            <div className='Product-card'>
                <div className="Product-card-img">
                <img src="https://razer-shop.netlify.app/static/media/android.d268e8bce7dcefe7f19b.jpg" alt="image" />
                </div>
                  <div className='card-body'>
                       <h3 className='rek-block-text'>MICROPHONES</h3>
                       <p>Tuned for gaming, lifestyle, or a perfect mix of both and <br /> also...</p>
                       <HashLink className='link-color' to="/store#mobilies">
              Learn More {">"}
            </HashLink>
                  </div>
            </div>
            <div className='Product-card'>
                <div className="Product-card-img">
                <img src="https://razer-shop.netlify.app/static/media/kishi.a3af1219ca17ee677674.jpg" alt="image" />
                </div>
                  <div className='card-body'>
                       <h3 className='rek-block-text'>CAPTURE CARD & OTHERS</h3>
                       <p>Tuned for gaming, lifestyle, or a perfect mix of both and <br /> also...</p>
                       <HashLink className='link-color' to="/store#mobilies">
              Learn More {">"}
            </HashLink>
                  </div>
            </div>
</div>
<button className='position-btn-all-menu'><HashLink to="#up"><i class="fa-solid fa-up-long"></i></HashLink></button>
         <Footer />
        </div>
    )
}
export default Mobile