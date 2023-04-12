import '../services/Services.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import NavbarTwo from '../../components/navbarTwo/NavbarTwo'
import { HashLink } from 'react-router-hash-link'


const Services = () => {
    return(
        <div id="up">
         <Navbar />
         <div className='place-need-for-ots'></div>
         <NavbarTwo />
             <div className='services-block1'>
                <h2 className='green-text'>RAZER SERVICES</h2>
                <p className='gray-text'>If you have any questions about our products or Razer.com in general, please contact us here.</p>
                <p className='gray-text'>If there is any defect or problem with the products supplied by Razer.com, please contact us by Email! <br />
                   And we will give you the help we can. If there is any defect or error in our product,  <br />
                   we will provide you with a new product free of charge.</p>
                <p className='gray-text'>Send us your email address from the input below and write down the problem!</p>
             </div>
             <div className='services-form'>
                <h2 className='green-text'>CONTACT US</h2>
                  <div className='services-form-menu'>
                    <input type="text" placeholder='Your Name' />
                    <input type="email" placeholder="Your Email" />
                    <input type="text" placeholder="Message" />
                    <button>Send</button>
                  </div>
             </div>
             <div className='services-block2'>
                  <h2 className='title-center'>RAZERCARE</h2>
                  <p className='gray-text'>Protect your Razer gear with RazerCare—includes extended warranty <br />
that covers both mechanical and electrical issues due to normal product usage.</p>
             </div>
             <div className='services-block3'>
                  <h2 className='title-center'>RAZERCARE</h2>
                  <p className='gray-text'>Protect your Razer gear with RazerCare—includes extended warranty <br />
that covers both mechanical and electrical issues due to normal product usage.</p>
             </div>
             <button className='position-btn-all-menu'><HashLink to="#up"><i class="fa-solid fa-up-long"></i></HashLink></button>
             <Footer />
        </div>
    )
} 

export default Services