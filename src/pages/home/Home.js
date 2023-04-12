import '../home/Home.css'
import { HashLink } from 'react-router-hash-link'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import NavbarTwo from '../../components/navbarTwo/NavbarTwo'

const Home = () => {
    return(
        <div id="up" className='Home-page  '>
          <Navbar />
          <div className='place-need-for-ots3'></div>
          <NavbarTwo />
            <HashLink className='need-remove-element' to="/store">
            <div className="Home-page-block1">
                 <h1>RAZER DEATHEADER V3 PRO </h1>
                 <h3 >FOR THE PRO</h3>
                 <div  className='Home-page-text'>
                 <HashLink className='need-remove-element' to="/store#mobilies">Learn More <span>{">"}</span></HashLink>
            <HashLink className='need-remove-element'  to="/store">BUY <span>{">"}</span></HashLink>
                 </div>
            </div>
            <div className="Home-page-block2">
                <div className='btn-style-bg '>
                    <button>
                        <span class="str1">RAZER.COM</span> <br />
                        <span class="str2">EXCLUSIVE</span>
                    </button>
                </div>
                 <h1>RAZER ENKI PRO </h1>
                 <h3>ULTIMATE ALL-Day COMFORT</h3>
                 <div className='Home-page-text'>
                 <HashLink  className='need-remove-element' to="/store#mobilies">Learn More <span>{">"}</span></HashLink>
            <HashLink  className='need-remove-element' to="/store">Learn More <span>{">"}</span></HashLink>
                 </div>
            </div>
            <div className="Home-page-block3">
                 <h1>RAZER DEATHEADER V3 PRO </h1>
                 <h3>FOR THE PRO</h3>
                 <div className='Home-page-text'>
                 <HashLink className='need-remove-element'  to="/store#mobilies">Learn More <span>{">"}</span></HashLink>
            <HashLink className='need-remove-element'  to="/store">Learn More <span>{">"}</span></HashLink>
                 </div>
            </div>
            </HashLink>
            <div className='Home-page-blocks-hard'>
                <div className="Home-page-blocks-hard-block1">
                 <h1>RAZER DEATHEADER V3 PRO </h1>
                 <h3>FOR THE PRO</h3>
                 <div className='Home-page-text'>
                 <HashLink className='need-remove-element'  to="/store#mobilies">Learn More <span>{">"}</span></HashLink>
            <HashLink  className='need-remove-element' to="/store">Learn More <span>{">"}</span></HashLink>
                 </div>
                </div>
                <div className="Home-page-blocks-hard-block2">
                 <h1>RAZER DEATHEADER V3 PRO </h1>
                 <h3>FOR THE PRO</h3>
                 <div className='Home-page-text'>
                 <HashLink className='need-remove-element' to="/store#mobilies">Learn More <span>{">"}</span></HashLink>
            <HashLink className='need-remove-element' to="/store">Learn More <span>{">"}</span></HashLink>
                 </div>
                </div>
                <div className="Home-page-blocks-hard-block3">
                 <h1>RAZER DEATHEADER V3 PRO </h1>
                 <h3>FOR THE PRO</h3>
                 <div className='Home-page-text'>
                 <HashLink className='need-remove-element' to="/store#mobilies">Learn More <span>{">"}</span></HashLink>
            <HashLink className='need-remove-element' to="/store">Learn More <span>{">"}</span></HashLink>
                 </div>
                </div>
                <div className="Home-page-blocks-hard-block4">
                 <h1>RAZER DEATHEADER V3 PRO </h1>
                 <h3>FOR THE PRO</h3>
                 <div className='Home-page-text'>
                 <HashLink className='need-remove-element' to="/store#mobilies">Learn More <span>{">"}</span></HashLink>
            <HashLink className='need-remove-element' to="/store">Learn More <span>{">"}</span></HashLink>
                 </div>
                </div>
                <div className="Home-page-blocks-hard-block5">
                 <h1>RAZER DEATHEADER V3 PRO </h1>
                 <h3>FOR THE PRO</h3>
                 <div className='Home-page-text'>
                 <HashLink className='need-remove-element' to="/store#mobilies">Learn More <span>{">"}</span></HashLink>
            <HashLink className='need-remove-element'  to="/store">Learn More <span>{">"}</span></HashLink>
                 </div>
                </div>
                <div className="Home-page-blocks-hard-block6">
                 <h1>RAZER DEATHEADER V3 PRO </h1>
                 <h3>FOR THE PRO</h3>
                 <div className='Home-page-text'>
                 <HashLink className='need-remove-element'  to="/store#mobilies">Learn More <span>{">"}</span></HashLink>
            <HashLink className='need-remove-element'  to="/store">Learn More <span>{">"}</span></HashLink>
                 </div>
                </div>
                <button className='position-btn-all-menu'><HashLink to="#up"><i class="fa-solid fa-up-long"></i></HashLink></button>
            </div>
            <Footer />
        </div>
    )
}
export default Home