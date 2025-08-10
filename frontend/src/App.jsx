import './assets/css/style.css'  
import Footer from './components/footer'
import Header from './components/header'
import Main from './components/main'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import RegisterPage from './components/register'
import LoginPage from './components/login'
import Authprovider from './components/Authprovider'
import Dashboard from './components/dashboard/Dashboard'
import PrivateRoute from './components/privateRoute'
import SellCard from './components/dashboard/sell'
import Cart from './components/dashboard/cart'
import MyProducts from './components/dashboard/MyProducts'
import Contactinfo from './components/dashboard/contactInfo'

import RazorpayButton from './components/dashboard/razorpay'
import AboutUs from './components/aboutUs'
import RefundPolicy from './components/refundPolicy'
import TermsConditions from './components/terms&conditions'


function App() {
 


  return (
    <>
     <Authprovider>
   
        <BrowserRouter>
       
          <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/register' element={<RegisterPage/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>} />
            <Route path='/sellcard' element={<PrivateRoute><SellCard/></PrivateRoute>} />
            <Route path='/cart' element={<PrivateRoute><Cart/></PrivateRoute>} />
            <Route path='/myProducts' element={<PrivateRoute><MyProducts/></PrivateRoute>} />
            <Route path='/contactInfo' element={<PrivateRoute><Contactinfo/></PrivateRoute>} />
            <Route path='/RazorpayButton' element={<PrivateRoute><RazorpayButton/></PrivateRoute>} />
            <Route path='/aboutUs' element={<AboutUs/>} />
            <Route path='/refund'element={<RefundPolicy/>} />
            <Route path='termsConditions' element={<TermsConditions/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      
      </Authprovider>   
      


    </>
  )
}

export default App
