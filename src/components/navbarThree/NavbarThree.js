import '../navbarThree/NavbarThree.css'
import { HashLink } from 'react-router-hash-link'

const NavbarThree = () => {
    return(
        <div >
           <div className=' panel '>
              <HashLink to="/store#laptop">
                Laptops
              </HashLink>
              <HashLink to="/store#laptop">
              Monitors
              </HashLink>
              <HashLink to="/store#mise">
              Mice
              </HashLink>
              <HashLink to="/store#gear">
              Mats
              </HashLink>
              <HashLink to="/store#keyboard">
              Keyboards
              </HashLink>
              <HashLink to="/store#headsets">
                Headsets
              </HashLink>
              <HashLink to="/store#strim">
              Streaming
              </HashLink>
              <HashLink to="/store#gear">
              Productivity
              </HashLink>
              <HashLink to="/store#chair">
              Chairs
              </HashLink>
              <HashLink to="/store#strim">
              Software
              </HashLink>
           </div>
        </div>
    )
}
export default NavbarThree