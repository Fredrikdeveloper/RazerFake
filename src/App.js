import {Route, Routes} from 'react-router-dom'
import PC from './pages/pc/PC'
import Home from './pages/home/Home'
import Services from './pages/services/Services'
import Basket from './pages/basket/Basket'
import Store from './pages/store/Store'
import Mobile from './pages/mobile/Mobile'
import SignUp from './pages/sign up/SignUp'

function App() {
  return (
    <div className="App">
       <Routes>
         <Route path="/pc" element={<PC />}  />
         <Route path="/mobile" element={<Mobile />}  />
         <Route path="/" element={<Home />}  />
         <Route path="/services" element={<Services />}  />
         <Route path="/basket" element={<Basket /> } />
         <Route path="/store" element={<Store />} />
         <Route path='/signup' element={<SignUp />} />
       </Routes>
    </div>
  );
}

export default App;
