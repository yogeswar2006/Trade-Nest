import { useState } from 'react'
import '../assets/css/style.css'
import Button from './Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Header from './header'


function RegisterPage(){

  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [errors,setErrors]=useState({})
  const [successMessage,setSuccesMessage]=useState('')
  const navigate=useNavigate()

  const handleRegisterForm= async (e)=> {
    e.preventDefault()
    const UserData={
      username,email,password
    }

    // console.log(UserData)
    try{
        const response=await axios.post('http://127.0.0.1:8000/api/register/',UserData)
        
        setErrors({})
        setSuccesMessage('Successfully registered!✅')
      


    }catch(error){
      console.log("failed")
       setErrors(error.response.data)
       setSuccesMessage('Registration Failed❌')
    }
  }

    return(
        <>
         <Header/>
          <div>
            {successMessage==='Successfully registered!✅'?(
                <h1 className='text-light text-center '>{successMessage}</h1>
            ):(
                <h1 className='text-danger text-center '>{successMessage}</h1>
            )}
          </div>
          <div className="container text-light text-center">
            <div className='bg-dark-color p-5 register-div'>
                  <h2 className='mb-4'>Register</h2>
                  <form className="form-container" onSubmit={handleRegisterForm}>
                   
                      <input type="text" placeholder="Username" className="register-inputs" value={username} onChange={(e)=>{setUsername(e.target.value)}}  />
                      <small>{errors.username && <div className='text-danger mb-4'>{errors.username}</div>}</small>
                  
                   
                      <input type='email' placeholder="email" className="register-inputs" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                      <small>{errors.email && <div className='text-danger'>{errors.email}</div>}</small>
                    
                   
                      <input type="password" placeholder="Password" className="register-inputs" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                      <small>{errors.password && <div className='text-danger'>{errors.password}</div>}</small>
                   
                    <input type="submit" placeholder='Submit' className="submit-btn btn-info rounded p-1 mt-2" />
                  </form>
            </div>
          </div>
        </>
    )
}

export default RegisterPage