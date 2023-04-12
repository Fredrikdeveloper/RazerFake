import React from 'react'
import '../pc/PC.css'
import frontImg from './PcImages/bg-front-img.jpg'
import { HashLink } from 'react-router-hash-link'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import NavbarTwo from '../../components/navbarTwo/NavbarTwo'
import NavbarThree from '../../components/navbarThree/NavbarThree'

const PC = () => {
  return (
    <div>
      <Navbar />
      <div className='place-need-very'>

      </div>
      <div className='dont-nedd-item'>
      <NavbarThree />
      </div>
      <div className='selector-ned'>
        <select>
          <option>Laptops</option>
          <option> Monitors</option>
          <option>Mice</option>
          <option>Mats</option>
          <option>Keyboards</option>
          <option>Headsets</option>
          <option>Streaming</option>
          <option> Productivity</option>
          <option>Chairs</option>
          <option> Software</option>
        </select>
      </div>

      <NavbarTwo />
        <div id="up" className='PC-Block'>
            <h2 className='green-text'>LAPTOPS & DESKTOPS</h2>
            <p className='gray-text'>Razer systems are crafted to provide the ultimate performance for gaming and work. Enjoy desktop power made <br />
mobile with our gaming and productivity laptops, or go all-out for your build as you assemble the most powerful <br />
aRGB Chroma powered battlestation.</p>
        </div>
        <div className='Product-cards container'>
            <div className='Product-card'>
                <div className="Product-card-img">
                <img src="https://razer-shop.netlify.app/static/media/headsets.d2f263a5a80ee76474d1.jpg" alt="image" />
                </div>
                  <div className='card-body'>
                       <h3>HEADSETS</h3>
                       <p>Tuned for gaming, lifestyle, or a perfect mix of both and <br /> also...</p>
                       <HashLink className='link-color' to="/store#headsets">
              Learn More {">"}
            </HashLink>
                  </div>
            </div>
            <div className='Product-card'>
                <div className="Product-card-img">
                <img src="https://razer-shop.netlify.app/static/media/mice.223b44fb7b761d2a1d5d.jpg" alt="image" />
                </div>
                  <div className='card-body'>
                       <h3>MICE</h3>
                       <p>Tuned for gaming, lifestyle, or a perfect mix of both and <br /> also...</p>
                       <HashLink className='link-color' to="/store#mice">
              Learn More {">"}
            </HashLink>
                  </div>
            </div>
            <div className='Product-card'>
                <div className="Product-card-img">
                <img src="https://razer-shop.netlify.app/static/media/razer-laptop.266a9b3e987e70828b90.jpg" alt="image" />
                </div>
                  <div className='card-body'>
                       <h3>LAPTOPS</h3>
                       <p>Tuned for gaming, lifestyle, or a perfect mix of both and <br /> also...</p>
                       <HashLink className='link-color' to="/store#laptop">
              Learn More {">"}
            </HashLink>
                  </div>
            </div>
            <div className='Product-card'>
                <div className="Product-card-img">
                <img src="https://razer-shop.netlify.app/static/media/component.9a380b87ea0b6fddcf15.jpg" alt="image" />
                </div>
                  <div className='card-body'>
                       <h3>DESKTOPS & COMPONENTS</h3>
                       <p>Tuned for gaming, lifestyle, or a perfect mix of both and <br /> also...</p>
                       <HashLink className='link-color' to="/store#laptop">gear
              Learn More {">"}
            </HashLink>
                  </div>
            </div>
            <div className='Product-card'>
                <div className="Product-card-img">
                <img src="https://razer-shop.netlify.app/static/media/accessorie.a477f46279aea2f2c4e8.jpg" alt="image" />
                </div>
                  <div className='card-body'>
                       <h3>ACCESSORIES</h3>
                       <p>Tuned for gaming, lifestyle, or a perfect mix of both and <br /> also...</p>
                       <HashLink className='link-color' to="/store#gear">
              Learn More {">"}
            </HashLink>
                  </div>
            </div>
            <div className='Product-card'>
                <div className="Product-card-img">
                <img src="https://razer-shop.netlify.app/static/media/chair-pc.91ee4bdce2011bfcc4f6.jpg" alt="image" />
                </div>
                  <div className='card-body'>
                       <h3>CHAIRS</h3>
                       <p>Tuned for gaming, lifestyle, or a perfect mix of both and <br /> also...</p>
                       <HashLink className='link-color' to="/store#chair">
              Learn More {">"}
            </HashLink>
                  </div>
            </div>
        </div>
        <div className='PC-Block'>
            <h2 className='green-text'>PERIPHERALS</h2>
            <p className='gray-text'>The most powerful rigs mean nothing without the high-performance gear to match. Understand what it means to <br />
wield the unfair advantage as you experience industry-leading levels of precision, control, and immersion.</p>


        </div>
        <div className='reklame-Images'>
            <div className=' container rek-body'>
               <div className='rek-block'>
                   <h2 className='rek-block-white-text'>MICE</h2>
                   <div className='pos-center'>
<HashLink className='link-color ' to="/store#mice">
              Learn More {">"}
            </HashLink>
</div>
                </div>
                <div className='rek-block2'>
                   <h2 className='rek-block-white-text'>MOUSE MATS</h2>
                   <div className='pos-center'>
<HashLink className='link-color ' to="/store#gear">
              Learn More {">"}
            </HashLink>
</div>
                </div>
                <div className='rek-block3'>
                   <h2 className='rek-block-white-text'>KEYBOARDS</h2>
                   <div className='pos-center'>
<HashLink className='link-color ' to="/store#keyboard">
              Learn More {">"}
            </HashLink>
</div>
                </div>
                <div className='rek-block4'>
                   <h2 className='rek-block-white-text'>AUDIO</h2>
                   <div className='pos-center'>
<HashLink className='link-color ' to="/store#mice">
              Learn More {">"}
            </HashLink>
</div>
                </div>
         
        </div>
    </div>

    <div className='reklame-block2'>
       <h2>COMPLETE YOUR SETUP</h2>
       <p className='gray-text'>A Color For Every Style</p>
       <div className='Link-position'>
       <HashLink className='link-color' to="/store#headsets">
              Learn More {">"}
            </HashLink>
       </div>
   </div>
    <div className='PC-Block'>
            <h2 className='green-text'>STREAMING</h2>
            <p className='gray-text'>Whether you’re finding your footing, raking in the views, or somewhere in between, we’ve got gear catered to the full <br />
spectrum of streamers, so you’ll always have the quality and clarity you need to keep your audience engaged <br />
and entertained.</p>

        </div>
        <div className='Product-cards container'>
            <div className='Product-card'>
                <div className="Product-card-img">
                <img src="https://razer-shop.netlify.app/static/media/webcamera.637c6e0d8bb6cef7c5f8.jpg" alt="image" />
                </div>
                  <div className='card-body'>
                       <h3 className='rek-block-text'>WEBCAMS</h3>
                       <p>Tuned for gaming, lifestyle, or a perfect mix of both and <br /> also...</p>
                       <HashLink className='link-color' to="/store#strim">
              Learn More {">"}
            </HashLink>
                  </div>
            </div>
            <div  className='Product-card'>
                <div className="Product-card-img">
                <img src="https://razer-shop.netlify.app/static/media/microphone.ad19d988eb54040f7ca2.jpg" alt="image" />
                </div>
                  <div className='card-body'>
                       <h3 className='rek-block-text'>MICROPHONES</h3>
                       <p>Tuned for gaming, lifestyle, or a perfect mix of both and <br /> also...</p>
                       <HashLink className='link-color' to="/store#strim">
              Learn More {">"}
            </HashLink>
                  </div>
            </div>
            <div className='Product-card'>
                <div className="Product-card-img">
                    <HashLink to="/store#strim">
                <img src="https://razer-shop.netlify.app/static/media/card.5f6ab544aeb601c970da.jpg" alt="image" />
                </HashLink>
                </div>
                  <div className='card-body'>
                       <h3 className='rek-block-text'>CAPTURE CARD & OTHERS</h3>
                       <p>Tuned for gaming, lifestyle, or a perfect mix of both and <br /> also...</p>
                       <HashLink className='link-color' to="/store#strim">
              Learn More {">"}
            </HashLink>
                  </div>
            </div> 
</div>
<div className='PC-Block'>
            <h2 className='green-text'>SOFTWARE</h2>
            <p className='gray-text'>Whether you’re finding your footing, raking in the views, or somewhere in between, we’ve got gear catered to the full <br />
spectrum of streamers, so you’ll always have the quality and clarity you need to keep your audience engaged <br />
and entertained.</p>
        </div>
        <div className='Product-cards container'>
            <div className='Product-card'>
                <div className="Product-card-img">
                <img src="https://razer-shop.netlify.app/static/media/synapse.f5009789a81bfa425bc8.jpg" alt="image" />
                </div>
                  <div className='card-body'>
                       <h3 className='rek-block-text'>HEADSETS</h3>
                       <p>Tuned for gaming, lifestyle, or a perfect mix of both and <br /> also...</p>
                       <HashLink className='link-color' to="/">
              Learn More {">"}
            </HashLink>

                  </div>
            </div>
            <div className='Product-card'>
                <div className="Product-card-img">
                <img src="https://razer-shop.netlify.app/static/media/chroma.a84eb75c6008927dfaf4.jpg" alt="image" />
                </div>
                  <div className='card-body'>
                       <h3 className='rek-block-text'>HEADSETS</h3>
                       <p>Tuned for gaming, lifestyle, or a perfect mix of both and <br /> also...</p>
                       <HashLink className='link-color' to="/">
              Learn More {">"}
            </HashLink>
                  </div>
            </div>
            <div className='Product-card'>
                <div className="Product-card-img">
                <img src="https://razer-shop.netlify.app/static/media/cortex.5e010f244e708aa5a2fe.jpg" alt="image" />
                </div>
                  <div className='card-body'>
                       <h3 className='rek-block-text'>HEADSETS</h3>
                       <p>Tuned for gaming, lifestyle, or a perfect mix of both and <br /> also...</p>
                       <HashLink className='link-color' to="/">
              Learn More {">"}
            </HashLink>
                  </div>
            </div>
            <div className='Product-card'>
                <div className="Product-card-img">
                <img src="https://razer-shop.netlify.app/static/media/thx.0e93e91a57a9b681c9d8.jpg" alt="image" />
                </div>
                  <div className='card-body'>
                       <h3 className='rek-block-text'>HEADSETS</h3>
                       <p>Tuned for gaming, lifestyle, or a perfect mix of both and <br /> also...</p>
                       <HashLink className='link-color' to="/">
              Learn More {">"}
            </HashLink>
                  </div>
            </div>
            <div className='Product-card'>
                <div className="Product-card-img">
                <img src="https://razer-shop.netlify.app/static/media/headphone.1c02cfeb182aa6153673.jpg" alt="image" />
                </div>
                  <div className='card-body'>
                       <h3 className='rek-block-text'>HEADSETS</h3>
                       <p>Tuned for gaming, lifestyle, or a perfect mix of both and <br /> also...</p>
                       <HashLink className='link-color' to="/">
              Learn More {">"}
            </HashLink>
                  </div>
            </div>
            <div className='Product-card'>
                <div className="Product-card-img">
                <img src="https://razer-shop.netlify.app/static/media/stream-heard.9072036da12a60c0fb8e.jpg" alt="image" />
                </div>
                  <div className='card-body'>
                       <h3 className='rek-block-text'>HEADSETS</h3>
                       <p>Tuned for gaming, lifestyle, or a perfect mix of both and <br /> also...</p>
                       <HashLink className='link-color' to="/">
              Learn More {">"}
            </HashLink>
                  </div>
            </div>
        </div>



        <div className='Pc-bg__img'>
           <div className='container d-flex justify-content-end align-items-center'>
            <div className='Pc-bg-text'>
            <h2>PLAYTIME. ANYTIME</h2>
                <p>Play the latest games with graphics that rival reality. <br />
DirectX 12 enables breathtaking, immersive graphics at <br />
high frame rates*.</p>
                <img src={frontImg} alt="images"  />
                <h6>*DirectX 12 Ultimate available with supported games, graphics chips, and requires the <br />
latest Windows 11 update with updated hardware drivers.</h6>

            </div>
           </div>
        </div>
        <button className='position-btn-all-menu'><HashLink to="#up"><i class="fa-solid fa-up-long"></i></HashLink></button>


    




    <Footer />
    </div>
  )
}

export default PC