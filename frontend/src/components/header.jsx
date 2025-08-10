import Button from "./Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Authcontext } from "./Authprovider";

function Header() {

    const {isLoggedIn,setIsLoggedIn}=useContext(Authcontext)

    const handleLogout=()=>{
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      setIsLoggedIn(false)
    }

  return (
    <>
    
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <div className="logo-main text-light">
               <Link >
              <img 
                src="src/assets/images/logo.png"
                width={40}
                height={40}
                className="img"
              />
            </Link>
            <h4>Trade Nest</h4>
            </div>
              <div>
              
              {isLoggedIn ?(
                <>
                   <Button text='Dashboard' class='btn-warning' url='/dashboard' /> 
                   <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                </>
               
              ):(
                <>
                  <Button text='Login' class='btn-outline-info' url='/login' /> 
                  <Button text='Register' class='btn-info' url='/register'/>
                </>
              )}
                
              </div>
            </div>
          </nav>
        </div>
      
    </>
  );
}

export default Header;
