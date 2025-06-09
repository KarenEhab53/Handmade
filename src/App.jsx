
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Auth from './Pages/Authorization/Auth'
import Shop from './Pages/Shop/Shop'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Admindashboard from './Pages/AdminDashboard/Admindashboard'
import UserProfile from './Pages/User Profile/UserProfile'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/admindashboard' element={<Admindashboard/>}>
        </Route>
        <Route path='/user-profile' element={<UserProfile/>}>
        </Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
