import { Children, useEffect, useState } from "react";
import axiosInstance from "../../axiosinstance";
import { Link } from "react-router-dom";
import { useContext,createContext } from "react";
import { Authcontext } from "../Authprovider";
import RazorpayButton from "./razorpay";




function Cart() {



  const { isLoggedIn, setIsLoggedIn } = useContext(Authcontext);
  const [cart, setCart] = useState([]);
  const [cartPrice,setCartPrice]=useState(0)
  const [totalPrice,setTotalPrice]=useState(cartPrice)
  const [discount,setDiscount]=useState(200)
  const [coupons,setCoupons]=useState(20)
  const [TotalDiscount,setTotalDiscount]=useState(discount+coupons)
  const [keyword,setKeyword]=useState('')
 

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
  };

   const handleRemoveItem=async(prod)=>{
    console.log(prod)
     const prod_id=prod.id
     try{
         const response=await axiosInstance.delete(`product/cart/${prod_id}/`)
         
         setCart(prevCart => prevCart.filter(item => item.id !== prod_id));
         console.log(response.data)
         console.log('deleted cart item!')
     }catch(error){
            console.log(error.response.data)
     }
  }

//   const discount=document.getElementById('discount')
//   const coupons=document.getElementById('coupons')
//   if (discount && coupons){
//     const discountvalue=parseFloat(discount.value)||0
//     const couponsvalue=parseFloat(coupons.value)||0
   
//   }
  useEffect(()=>{
     const Totalamount=cartPrice-discount-coupons
    setTotalPrice(Totalamount)
  },[discount,coupons,cartPrice])

  useEffect(() => {
    const cartFunction = async () => {
      try {
        const user = await axiosInstance.get("user/");
        const host = user.data.id;

        const response = await axiosInstance.get("product/cart", {
          params: { host: host },
        });
        setCart(response.data);
       
      } catch(error) {
        console.log(error.response.data);
      }
    };
    cartFunction();
  }, []);

  useEffect(()=>{
      cart.map(()=>{
         
         const total = cart.reduce((acc, prod) => acc + prod.product_details.price, 0);
         setCartPrice(total)
  })
  },[cart])

  const handleSearch= async(e)=>{
    e.preventDefault()
    try{
 
        const ProductInfo=await axiosInstance.get('product/cart/',{params:{search:keyword}})
        setCart(ProductInfo.data)

    }catch(error){
        console.error('Error at fetching products with keyword:',error)
        setKeyword('')
    }
      
  }

  return (
    <>
    
      
      <nav className="navbar navbar bg-dark">
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
            <h3 >Trade Nest</h3>
          </div>

          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e)=>{setKeyword(e.target.value)}}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          {/* <div>
            <Button text="Buy" class="btn-outline-warning" />
            <Button text="Sell" class="btn-outline-warning" url="/sellcard" />
            <Button text="Exchange" class="btn-outline-warning" />
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div> */}
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
              {/* <Button text="Buy" class="btn-outline-warning" />
                
                 <Button text="Sell" class="btn-outline-warning" url="/sellcard" />
                 <Button text="Exchange" class="btn-outline-warning" />

                 <Button text='View cart' class='btn-primary' /> */}
              <strong className="text-info">MarketPlace</strong>
              <Link className="p-2 offcanvas-btn text-light" to={'/dashboard'}>Dashboard</Link>
              <Link className="p-2 offcanvas-btn text-light" to={"/sellcard"}>
                Sell
              </Link>
              <Link className="p-2 offcanvas-btn text-light" to={'/myProducts'}>My Products</Link>
              <Link className="p-2 offcanvas-btn text-light" to={"/cart"}>
                View Cart
              </Link>
             

              <strong className="text-info">Help & Settings</strong>
              <Link className="p-2 offcanvas-btn text-light">Settings</Link>
              <Link className="p-2 offcanvas-btn text-light" to={'/aboutUs'}>About us</Link>

              <Link className="p-2 offcanvas-btn text-light" to={'/termsConditions'}>
                Terms & conditions
              </Link>
              <Link className="p-2 offcanvas-btn text-light " to={'/refund'}>
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

      <div className="text-light container d-flex justify-content-between pt-2 ">
        <div className="container">
            <div className="cart-main">
               
          {cart.map((prod) => (
            
            <div className="bg-dark-color cart-item-outline mb-2 " key={prod.id}>
              <div className="cart-item-inline ">
                <img
                  src={prod.product_details.image}
                  className="cart-img"
                  alt="product_image"
                />
                <div className="cart-item-data">
                  <p>{prod.product_details.name}</p>
                  <p>
                    Seller:RetailNet <small>TradeNest assured</small>
                  </p>
                  <div className="d-flex justify-content-between g-4">
                    <b>&#8377;{prod.product_details.price}</b>
                    <button className="btn btn-danger" onClick={()=>handleRemoveItem(prod)}>Remove</button>
                    
                  </div>
                </div>
              </div>
             
              <div>delivered in 2 days</div>
            </div>
          ))}
          </div>

          <div className="mt-3 d-flex justify-content-end">
            <Link className="btn btn-info" to={'/contactInfo'}> Place Order</Link>
          </div>
        </div>

        <div className="bg-dark-color  price-content">
          <h2>Price details</h2>
          <hr></hr>
          <div className="d-flex justify-content-between">
            <p>Price ({cart.length} items)</p>
            <strong>&#8377;{cartPrice}</strong>
          </div>
          <div className="d-flex justify-content-between">
            <p>Discount</p>
            <strong >-&#8377;<span id='discount'>{discount}</span></strong>
          </div>
          <div className="d-flex justify-content-between">
            <p>Coupons for you</p>
            <strong >-&#8377;<span id='coupons'>{coupons}</span></strong>
          </div>
          <hr></hr>
          <div className="d-flex justify-content-between">
            <h5>Total Amount</h5>
            <strong>&#8377;{totalPrice}</strong>
          </div>
          <hr></hr>
          <p>You saved &#8377;{TotalDiscount} in this order</p>
        </div>
      </div>
    </>
  );
}

export default Cart;
