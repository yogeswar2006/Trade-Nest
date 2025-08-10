import { useState,useContext,createContext } from "react"


 const Authcontext=createContext()
 
function Authprovider({children}){

    const [isLoggedIn,setIsLoggedIn]=useState(
        !!localStorage.getItem('accessToken')
    )
   

    return(
        <Authcontext.Provider value={{isLoggedIn,setIsLoggedIn}}>
            {children}
        </Authcontext.Provider>
    )
}
export default Authprovider

export {Authcontext};