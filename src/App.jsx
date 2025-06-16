import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop';

import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './Pages/Home/Home';
import Auth from './Pages/Authorization/Auth';
import Shop from './Pages/Shop/Shop';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Admindashboard from './Pages/AdminDashboard/Admindashboard';
import UserProfile from './Pages/User Profile/UserProfile';
import SingleProduct from './Components/Single Product/SingleProduct';
import Checkout from './Components/Shopping cart/Checkout/Checkout';

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />

      {/* AnimatePresence wraps Routes */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:id' element={<SingleProduct />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/admindashboard' element={<Admindashboard />} />
          <Route path='/user-profile' element={<UserProfile />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default App;
