import { useState } from "react"
import loadRazorpay from "./razorpay"

import { Link, useNavigate } from "react-router-dom"
import axiosInstance from "../../axiosinstance"

function Contactinfo(){
    const navigate=useNavigate()
   
    const [firstname,setFirstname]=useState('')
    const [lastname,setLastname]=useState('')
    const [mobile,setMobile]=useState('')
    const [email,setEmail]=useState('')
    const [adress,setAdress]=useState('')
   const [formData,setFormData]=useState({})
   

    const handleContactInfo=async(e)=>{
        e.preventDefault()
        
          const user=await axiosInstance.get('/user/')
          const host=user.data.id

        //  setFormData.append(firstname)
        //  setFormData.append(lastname)
        //  setFormData.append(mobile)
        //  setFormData.append(email)
        //  setFormData.append(adress)
        //  setFormData.append(host)

        const data={firstname,lastname,mobile,email,adress,host}

         try{
          const response=await axiosInstance.post('/product/contact/',data)
          console.log('contact info stored successfully!')
           navigate('/RazorpayButton')
         }catch(error){
            console.error('ERROR',error)

         }



    }

    return (
        <>

        <form className="form-controls container text-light p-5" onSubmit={handleContactInfo}>
            {/* personal details */}
            <h2 className="text-center">Contact Info</h2> 
            <div className="contactinfo-form bg-dark-color "> 
                <input type="text" name="firstname" placeholder="Firstname" className="input" onChange={(e)=>{setFirstname(e.target.value)}}/>
                <input type="text" name='lastname' placeholder="Lastname" className="input" onChange={(e)=>{setLastname(e.target.value)}}/>
                <input type="integer" name="mobile" placeholder="Mobile" className="input" onChange={(e)=>{setMobile(e.target.value)}}/>
                <input type="email" name="email" placeholder="Email"  className="input" onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="text" name="adress" placeholder="Adress" className="input" onChange={(e)=>{setAdress(e.target.value)}}/>

               <div className="pay-btns mt-3 mb-4">

                 <Link className="btn btn-danger" to={'/cart'}>👈Back</Link>
                <button type="submit" className="btn btn-primary"  >Next👉</button>
               </div>
               

            </div>
  
            
        </form>
        
        </>
    )
}
export default Contactinfo