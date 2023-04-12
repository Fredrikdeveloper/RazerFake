import React from 'react'
import '../footer/Footer.css'


const Footer = () => {
  return (
            <footer>           
                   <div className='container'>
                     <div className="footer-menu__first">
                           <ul>
                               <li class="li-trans-color">Shop</li>
                               <li>RazerStores</li>
                               <li>RazerCafe</li>
                               <li>Store Location</li>
                               <li>Purchase Programs</li>
                               <li>Exclusives</li> 
                           </ul> 
                           <ul>
                               <li class="li-trans-color">Explore</li>
                               <li>Technology</li>
                               <li>Chroma RGB</li>
                               <li>Concepts</li>
                               <li>Esports</li>
                               <li>Collabs</li> 
                           </ul>
                           <ul>
                               <li class="li-trans-color">Support</li>
                               <li>Get Help</li>
                               <li>Registration & Warranty</li>
                               <li>RazerStore Support</li>
                               <li>Manage Razer ID</li>
                               <li>Support Videos</li> 
                           </ul>
                           <ul>
                               <li class="li-trans-color">Company</li>
                               <li>About Us</li>
                               <li>Careers</li>
                               <li>Press Room</li>
                               <li>zVentures</li>
                               <li>Contact Us</li> 
                           </ul>
                           <ul>
                                <li><h5>FOR GAMERS. BY GAMERS.™</h5></li>
                                <li className="footer-icons-line">
                                  <img src="https://razer-shop.netlify.app/static/media/facebook.6d206ecad05f831d58c69260d311e89a.svg" alt="pictures" />
                                  <img src="https://razer-shop.netlify.app/static/media/inst.fbfd248812615df77ea3ccdfdca75b54.svg" alt="image"  />
                                  <img src="https://razer-shop.netlify.app/static/media/twitter.991caa5f81fb29441a7956367c45896a.svg" alt="image" />
                                  </li> 
                           </ul>  
                     </div>
                     <div className='footer-line'></div>
                        <div className='footer-last-do-work'>
                           <div>
                             <h5>Copyright © 2022 Razer Inc. All rights reserved.</h5>
                           </div>
                           <div className='d-flex gap-2'>
                              <a class="bad-text">Created by: boburkhatamov</a> 
                              <span>|</span>
                              <a className="bad-text">IT Academy</a>
                           </div>  
                        </div>   
                   </div>                                  
            </footer>
  )             
}

export default Footer