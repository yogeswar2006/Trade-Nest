import axios from 'axios'
import '../assets/css/style.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Authcontext } from './Authprovider'
import { useContext } from 'react'
import Header from './header'




function LoginPage(){

  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')
  const [loading,setLoading]=useState(false)
  const {isLoggedIn,setIsLoggedIn}=useContext(Authcontext)

  const navigate=useNavigate()

  const handleLogin=async(e)=>{
    e.preventDefault()
    setLoading(true)
   
    const UserData={username,password}

    try{
        const response=await axios.post('http://127.0.0.1:8000/api/token/',UserData)
        localStorage.setItem('accessToken',response.data.access)
        localStorage.setItem('refreshToken',response.data.refresh)
       
        navigate('/dashboard')
        setError('')
        setIsLoggedIn(true)
    }catch(error){
      setError('Invalid Credentials❌')
         console.log(error.data)
    }finally{
      setLoading(false)
    }
  }

    return(

        <>
        <Header/>
          <div className="container text-light text-center">
            <div className='bg-dark-color p-5 register-div'>
                  <h2 className='mb-4'>Login to portal</h2>
                  <form className="form-container" onSubmit={handleLogin} >
                   
                      <input type="text" placeholder="Username" className="register-inputs" value={username} onChange={(e)=>{setUsername(e.target.value)}}  />
                   
                      <input type="password" placeholder="Password" className="register-inputs" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                     {error && <div className='text-danger text-center'>{error}</div>}
                      {loading ? (
                        <button type="submit" className="submit-btn btn-info rounded p-1 mt-2" disabled>Please Wait...</button>
                      ):(
                        <button type="submit" className="submit-btn btn-info rounded p-1 mt-2">Login</button>
                      )}
                   </form>    
            </div>
          </div>
        </>
    )
}

export default LoginPage