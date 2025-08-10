import { useState ,useEffect} from "react"
import axiosInstance from "../../axiosinstance"
import Button from "../Button"
import { useNavigate } from "react-router-dom"

function SellCard(){
   
   const [name,setName]=useState('')
   const [price,setPrice]=useState(0)
   const [description,setDescription]=useState('')
   const [image,setImage]=useState(null)
   const [category,setCategory]=useState('')
   const [categories,setCategories]=useState([])
   
   const navigate=useNavigate()

   useEffect(()=>{

      const categoryInfo=async()=>{
      try{
             const info=await axiosInstance.get('/product/category/')
             setCategories(info.data)
      }catch(error){
        console.log('error at catogory fetching.....')
      }
   }

   categoryInfo()
   },[])

   const handleSellForm= async(e)=>{
      e.preventDefault()
      

      try{
        
         const user_info=await axiosInstance.get('user/')
         console.log(user_info)
        const host=user_info.data.id

        const formData = new FormData();
         formData.append('name', name);
         formData.append('price', price);
         formData.append('description', description);
         formData.append('image', image);  // File object
         formData.append('host', host);
         formData.append('category',category)

       const info=await axiosInstance.post('product/Products/',formData,{headers:{'Content-Type':'multipart/form-data',}})
       alert('Request submitted successfully!')
       navigate('/dashboard')
       

      }catch(error){
          console.log('error at sending sellcard info')
      }

       
   }

   const handleCancel=()=>{
      navigate('/dashboard')
   }

  

    return (
        <>
          <div className="div container text-light text-center">
            <div className="bg-dark-color sell-inner">
               <h2 className="mb-5">Sell What u have !</h2>
             <form onSubmit={handleSellForm} className="form-container">
                
                 <input type="text"  className="form-control mb-2" placeholder="Name" name="name"  onChange={(e)=>{setName(e.target.value)}} />
                 <input type="number"  className="form-control mb-2" placeholder="Price" name="price" onChange={(e)=>{setPrice(e.target.value)}} />
                 <input type="text" className="form-control mb-2 " placeholder="description" name="description" onChange={(e)=>{setDescription(e.target.value)}}/>
                 <select className="form-control mb-2" name="category" value={category} onChange={(e)=>{setCategory(e.target.value)}}>
                  <option value=''>Category</option>
                  {categories.map(cat=>(
                     <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}

                 </select>
                 <input type="file" accept="image/*" className="mb-4 form-control" name='image' onChange={(e) => setImage(e.target.files[0])} />
                 <div>
                   <button type='submit'  className="btn btn-info me-1">POST</button>
                   
                   <button className="btn btn-danger " onClick={handleCancel}>Cancel</button>
                    
                 </div>
             </form>
             </div>
          </div>
        </>
    )
}

export default SellCard