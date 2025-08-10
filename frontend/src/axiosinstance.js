import axios from "axios"


const axiosInstance=axios.create({
    baseURL:'http://127.0.0.1:8000/api/',
})


// interceptors request
axiosInstance.interceptors.request.use(
    function (config){
    const access_token=localStorage.getItem('accessToken')

    
    if(access_token){
        config.headers['Authorization']=`Bearer ${access_token}`
    }

    return config
},function (error){
    return Promise.reject(error)
})

axiosInstance.interceptors.response.use(function(response){

    return response
}, async function(error){
      const originalRequest=error.config
     
      if(error.response.status===401 && !originalRequest.retry){
        originalRequest.retry=true
        const refreshToken=localStorage.getItem('refreshToken')
            try{
              const response= await axiosInstance.post('token/refresh/',{refresh:refreshToken})
             
              localStorage.setItem('accessToken',response.data.access)
              originalRequest.headers['Authorization']=`Bearer ${response.data.access}`
              return axiosInstance(originalRequest)
            }catch(error){
              localStorage.removeItem('accessToken')
              localStorage.removeItem('refreshToken')
           }
        } 
     

    return Promise.reject(error)
})


export default axiosInstance