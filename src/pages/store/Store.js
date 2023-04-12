import '../store/Store.css'
import React from 'react'
import Mise from '../../components/allProducts/MiseProducts/Mise'
import Keyboard from '../../components/allProducts/KeyboardProducts/Keyboard';
import HeadSets from '../../components/allProducts/headsets/HeadSets';
import Strim from '../../components/allProducts/strim/Strim'
import Chairs from '../../components/allProducts/chairs/Chairs';
import Laptop from '../../components/allProducts/laptops/Laptop';
import GameConsol from '../../components/allProducts/console/GameConsol';
import Mobilies from '../../components/allProducts/mobilies/Mobilies';
import Gear from '../../components/allProducts/Gear/Gear';
import { HashLink } from 'react-router-hash-link';
// import Loading from '../../components/loading/Loading';
import Slider from "react-slick";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import NavbarTwo from '../../components/navbarTwo/NavbarTwo';

const Store = () => {

  // if ( (<Mise /> || <Keyboard /> || <HeadSets /> ||  <Strim /> ||  <Chairs /> ||  <Laptop /> ||  <GameConsol />  ||  <Mobilies /> ||  <Gear /> )) {
  //   return <Loading /> 
  // } else {
  //   return <h1 className='text-primary'>Eror</h1>
  // }
  



   
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='store-all-bg'>
    <Navbar />
    <div className='place-need-for-ots'>

    </div>
<div id="up" className='Store-bg '>
   
       <NavbarTwo />
      <div className='salom d-flex pr-img-all justify-content-center gap-5 py-3'>
          <HashLink to="#laptop">
            <img src="https://razer-shop.netlify.app/static/media/Laptop.d5c74f1ada69752ebf4a.png" alt="image" />
            <h4>Laptops</h4>
          </HashLink>
          <HashLink to="#mice">
            <img src="https://razer-shop.netlify.app/static/media/Mice.4dc6e8d4c1c2e7c1a850.png" alt='image' />
            <h4>Mice</h4>
          </HashLink>
          <HashLink to="#keyboard">
            <img src="https://razer-shop.netlify.app/static/media/Keyboards.cc6728540732d34de418.png" alt="image" />
            <h4>Keyboards</h4>
          </HashLink>
          <HashLink to="#headsets">
          <img src="https://razer-shop.netlify.app/static/media/Headsets.055c7381a2db316c6b06.png" alt="image" />
          <h4>Headsets</h4>
          </HashLink>
          <HashLink to="#strim">
          <img src="https://razer-shop.netlify.app/static/media/stream.eac9b2d0384dfb7ddb48.png" alt="image" />
          <h4>Streaming</h4>
          </HashLink>
          <HashLink to="#chair">
          <img src="https://razer-shop.netlify.app/static/media/Chairs.4374138c3b8091b28574.png" alt="image" />
          <h4>Chairs</h4>
          </HashLink>
          <HashLink to="#gameconsole">
          <img src="https://razer-shop.netlify.app/static/media/console.222c8f89eb05c3c6d219.png" alt="image" />
          <h4>Console</h4>
          </HashLink>
          <HashLink to="#mobilies">
          <img src="https://razer-shop.netlify.app/static/media/c-mobile.02115c644944a6e01634.png" alt="image" />
          <h4>Mobile</h4>
          </HashLink>
          <HashLink to="#gear">
          <img src="https://razer-shop.netlify.app/static/media/Gear.3497e9ce0031c997e830.png" alt="image" />
          <h4>Gear</h4>
          </HashLink>
      </div>
    
      <div className='basket-icon-menu-text container pt-5'>
           <h1>THE LATEST AND GREATEST GAMING GEAR</h1>
           <div className='basket-icon-menu-icon'>
             <img src="https://razer-shop.netlify.app/static/media/findIcon.8b5b4a738a1b8aaeeced87c52281304e.svg" alt="asd" />
             <a href='#'>Find a RazerStore <br />
near you {">"}</a>
           </div>
      </div>
      <div className='container '>
      <div className="Keyboard-Group">
        <h2 className='store-pr-name'>MICE BY RAZER</h2>
        <Mise />
      </div>
      <div className="Keyboard-Group">
      <h2 className='store-pr-name'>KEYBOARDS BY RAZER</h2>
        <Keyboard />
      </div>
      <div className="Keyboard-Group">
      <h2 className='store-pr-name'>HEADSETS BY RAZER</h2>
        <HeadSets />
      </div>
      <div className="Keyboard-Group">
      <h2 className='store-pr-name'>STREAMING DEVICES BY RAZER</h2>
        <Strim />
      </div>
      <div className="Keyboard-Group">
      <h2 className='store-pr-name'>CHAIRS BY RAZER</h2>
        <Chairs />
      </div>
      <div className="Keyboard-Group">
      <h2 className='store-pr-name'>LAPTOPS BY RAZER</h2>
        <Laptop />
      </div>
      <div className="Keyboard-Group">
      <h2 className='store-pr-name'>CONSOLE BY RAZER</h2>
        <GameConsol />
      </div>
      <div  className="Keyboard-Group">
      <h2 className='store-pr-name'>MOBILES BY RAZER</h2>
        <Mobilies />
      </div>
      <div className="Keyboard-Group">
      <h2 className='store-pr-name'>GEAR BY RAZER</h2>
        <Gear />
      </div>
      </div>
      <div className='store-last'>
        <h2 className='text-center green-text'>WHY BUY FROM RAZER.COM</h2>
        <div className='store-last-icons'>
            <div className='store-card'>
              <div className='store-card-img'>
                 <img src="https://razer-shop.netlify.app/static/media/flash.a0ef4774860aa3526f26ed16cb9404cd.svg" alt="image" />
              </div>
              <h3>Get First Dibs</h3>
              <p>Razer.com is the only place where <br /> you can buy our most anticipated  <br /> Razer gear immediately upon  <br /> release.</p>
            </div>
            <div className='store-card'>
              <div className='store-card-img'>
                 <img src="https://razer-shop.netlify.app/static/media/sumka.4b132188ff8415080dfa932df8a621bc.svg" alt="image" />
              </div>
              <h3>The Largest Array Of <br /> Razer Gear</h3>
              <p>Razer.com is the only place where <br /> you can buy our most anticipated  <br /> Razer gear immediately upon  <br /> release.</p>
            </div>
            <div className='store-card'>
              <div className='store-card-img'>
                 <img src="https://razer-shop.netlify.app/static/media/star.f4bbeb8518e9bbfcf4573ec43204555e.svg" alt="image" />
              </div>
              <h3>Get First Dibs</h3>
              <p>As Razer’s official online store, we hold <br /> a massive collection of products that <br /> can’t be matched anywhere else.</p>
            </div>
            <div className='store-card'>
              <div className='store-card-img'>
                 <img src="https://razer-shop.netlify.app/static/media/play.edb90f1a22f109e9ce4d1ef75cbee383.svg" alt="image" />
              </div>
              <h3>Get First Dibs</h3>
              <p>Razer.com is the only place where <br /> you can buy our most anticipated  <br /> Razer gear immediately upon  <br /> release.</p>
            </div>
        </div>
      </div>





      <button className='position-btn-all-menu'><HashLink to="#up"><i class="fa-solid fa-up-long"></i></HashLink></button>
     <Footer />
    </div>


    </div>
  );
}

export default Store