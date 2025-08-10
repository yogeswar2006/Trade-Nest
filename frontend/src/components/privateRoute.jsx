import { useContext } from "react"
import { Authcontext } from "./Authprovider"
import { Navigate } from "react-router-dom"

function PrivateRoute({children}){
    const {isLoggedIn}=useContext(Authcontext)
    return isLoggedIn ?(
        children
    ):(
        <Navigate to='/Login' />
    )
  
}
export default PrivateRoute