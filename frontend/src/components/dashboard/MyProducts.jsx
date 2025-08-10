import { useEffect, useState } from "react";
import axiosInstance from "../../axiosinstance";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Authcontext } from "../Authprovider";

import {formatDistanceToNow} from 'date-fns'

function MyProducts() {
  const { isLoggedIn, setIsLoggedIn } = useContext(Authcontext);

  const [host, setHost] = useState();
  const [keyword, setKeyword] = useState("");
  const [prods,setProds]=useState([])

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
  };

 async function handleRemoveItem(p){
     const id=p.id
     console.log(id)
     try{
       const response=await axiosInstance.delete(`product/Products/${id}/`)
       console.log('successfullly deleted item',response.data)
       setProds(prev => prev.filter(p => p.id !== id));
     }catch(error){
       console.error('ERROR',error)

     }
  }
   
  const handleSearch=async(e)=>{
      e.preventDefault()

      try{
          const response=await axiosInstance.get('product/Products/',{params:{search:keyword}})
          setProds(response.data)
      }catch(error){
          console.error('ERROR:',error)
      }
  }


  useEffect(() => {
    const get_user_info = async () => {
      const user_info = await axiosInstance.get("user/");
      document.getElementById("username").innerHTML = user_info.data.username;
      document.body.style.overflow='auto'
    };
    get_user_info();
  }, []);

  useEffect(()=>{
      const fetchMyProducts=async()=>{
          const user_info = await axiosInstance.get("user/");
          const userId=user_info.data.id
         
          setHost(userId)

         try{
            const products=await axiosInstance.get('product/Products',{params:{host:userId}})
            setProds(products.data)
            console.log('MYPRODUCTS:',products.data)
         }catch(error){
            console.error('Error:',error)
         }
      }

      fetchMyProducts()
  },[])

  return (
    <>
      <nav className="navbar navbar bg-dark NavBar">
        <div className="container text-light">
          <div className="dashboard-nav-profile">
            <Link >
              <img
                src="src/assets/images/logo.png"
                width={40}
                height={40}
                className="img"
              />
            </Link>
            <h3>Trade Nest</h3>
          </div>

          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form>

          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            Open Menu
          </button>

          <div
            className="offcanvas offcanvas-end bg-dark-color "
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <h5 id="offcanvasRightLabel">Menu Content</h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body container ">
              <strong className="text-info">MarketPlace</strong>
              <Link className="p-2 offcanvas-btn text-light" to={"/dashboard"}>
                Dashboard
              </Link>
              <Link className="p-2 offcanvas-btn text-light" to={"/sellcard"}>
                Sell
              </Link>
              <Link className="p-2 offcanvas-btn text-light" to={"/myProducts"}>
                My Products
              </Link>
              <Link className="p-2 offcanvas-btn text-light" to={"/cart"}>
                View Cart
              </Link>
              <Link className="p-2 offcanvas-btn text-light" to={'/contactInfo'}>Adress & ContactInfo</Link>

              <strong className="text-info">Help & Settings</strong>
              <Link className="p-2 offcanvas-btn text-light">Settings</Link>
              <Link className="p-2 offcanvas-btn text-light" to={'/aboutUs'}>About us</Link>

              <Link className="p-2 offcanvas-btn text-light" to={'/termsConditions'}>
                Terms & conditions
              </Link>
              <Link className="p-2 offcanvas-btn text-light" to={'/refund'}>
                Return/Refund Policy
              </Link>
              
              <Link
                className="p-2 offcanvas-btn text-light"
                onClick={handleLogout}
              >
                Logout➡️
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <h3 className=" text-info text-center mt-5">My Products</h3>

      <div className=" text-light container">
        {prods.map(p=>(
            <div className="bg-dark-color cart-item-outline mb-2 " key={p.id}>
              <div className="cart-item-inline ">
                <img
                  src={p.image}
                  className="cart-img"
                  alt="product_image"
                />
                <div className="cart-item-data">
                  <p>{p.name}</p>
                  <p>
                    Seller:RetailNet <small>TradeNest assured</small>
                  </p>
                  <div className="d-flex justify-content-between g-4">
                    <b>&#8377;{p.price}</b>
                    <button className="btn btn-danger" onClick={()=>handleRemoveItem(p)}>Remove</button>
                    
                  </div>
                </div>
              </div>
             
              <div>Posted {formatDistanceToNow(new Date(p.created),{addSuffix:true})}</div>
            </div>

          ))}  
      </div>
    </>
  );
}

export default MyProducts;
