import axios from 'axios';
import axiosInstance from '../../axiosinstance';
import { useEffect,useState,useContext } from 'react';
import { Link } from 'react-router-dom';


const RazorpayButton = () => {

   const [cart, setCart] = useState([]);
    const [cartPrice,setCartPrice]=useState(0)
  const [totalPrice,setTotalPrice]=useState(cartPrice)
  const [discount,setDiscount]=useState(200)
  const [coupons,setCoupons]=useState(20)

    useEffect(()=>{
     const Totalamount=cartPrice-discount-coupons
    setTotalPrice(Totalamount)
  },[discount,coupons,cartPrice])

  useEffect(()=>{
      cart.map(()=>{
         
         const total = cart.reduce((acc, prod) => acc + prod.product_details.price, 0);
         setCartPrice(total)
  })
  },[cart])

  const handlePayment = async () => {
    try {
      // 1. Call Django to create order
      const res = await axiosInstance.get("https://a45ce98cc70e.ngrok-free.app/api/create_order/");
      const { id: order_id, amount } = res.data;

      // 2. Open Razorpay Checkout
      const options = {
        key: "rzp_test_pvog2SGmKuLbWm", // Replace with your Razorpay test key
        amount: amount,
        currency: "INR",
        name: "TradeNest",
        description: "Payment for Order",
        order_id: order_id,
        handler: function (response) {
          alert("Payment successful!");
          console.log("Payment ID:", response.razorpay_payment_id);
          console.log("Order ID:", response.razorpay_order_id);
          console.log("Signature:", response.razorpay_signature);
        },
        prefill: {
          name: "Test User",
          email: "test@example.com",
          contact: "9999999999"
        },
        theme: {
          color: "#3399cc"
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

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

  return (
  

    <>
    <div className='container text-light  '>
      
      <h2 className='mb-3 mt-2 text-center'>Payment details</h2>
      <div className='container payment-details'>
       {cart.map(prod=>(
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
                    {/* <button className="btn btn-danger" onClick={()=>handleRemoveItem(prod)}>Remove</button> */}
                    
                  </div>
                </div>
              </div>
             
              <div>delivered in 2 days</div>
             
            </div>
      ))}
     
      </div>

    <div className='text-end container'>
       <button onClick={handlePayment} className="btn btn-info me-2">
      Pay ₹{totalPrice}
    </button>
    <Link className='btn btn-danger' to={'/cart'}>Cancel</Link>
    </div>

    </div>
    </>
   
  );
};

export default RazorpayButton;
