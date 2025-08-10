import axios from "axios";
import { useEffect, useState } from "react";
import axiosInstance from "../../axiosinstance";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Authcontext } from "../Authprovider";
import Button from "../Button";

function Dashboard() {


  const { isLoggedIn, setIsLoggedIn } = useContext(Authcontext);
  const [product, setProduct] = useState([]);
  const [display,setDisplay]=useState(false)
  const [host,setHost]=useState()
  const [keyword,setKeyword]=useState('')

  useEffect(() => {
  document.body.style.overflow = "auto";
}, []);


  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
  };

  async function handleCart(prod) {
    const products = prod.id;
    const quantity = 1;

    const user = await axiosInstance.get("user/");
    const host = user.data.id;
    const data = { products, host, quantity };

    try {
      const response = await axiosInstance.post("product/cart/", data);

      alert("Item is successfully added to cart");
    } catch (error) {
      console.error("Add to cart failed:", error.response?.data);
      alert("Item is failed to add to cart");
    }
  }

 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const user_info = await axiosInstance.get("user/");
        const host = user_info.data.id;
        setHost(host)

        const ProductInfo = await axiosInstance.get("product/Products/",
        );
        setProduct(ProductInfo.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleSearch= async(e)=>{
    e.preventDefault()
    try{
 
        const ProductInfo=await axiosInstance.get('product/Products/',{params:{search:keyword}})
        setProduct(ProductInfo.data)

    }catch(error){
        console.error('Error at fetching products with keyword:',error)
        setKeyword('')
    }
      
  }


  return (
    <>
      <nav className="navbar navbar bg-dark NavBar" >
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
              onChange={(e)=>{setKeyword(e.target.value)}}
            />
            <button className="btn btn-success" type="submit">
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

      <div className="container-fluid slider-react" >
        <div
          id="carouselExampleDark"
          class="carousel carousel-dark slide  slider"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div className="carousel-item active images" data-bs-interval="10000">
              <img src="src/assets/images/bg-slider3.avif" class="d-block w-100" alt="..."  className="slider" />
              <div className="carousel-caption d-none d-md-block  ">
                {/* <h1 >BUY</h1>
                <p>
                  Some representative placeholder content for the first slide.
                </p> */}
              </div>
            </div>
            <div className="carousel-item images" data-bs-interval="2000">
              <img src="src/assets/images/bg-slider4.jpg" class="d-block w-100" alt="..." className="slider" />
              <div className="carousel-caption d-none d-md-block ">
                {/* <h1>SELL</h1>
                <p>
                  Some representative placeholder content for the second slide.
                </p> */}
              </div>
            </div>
            <div   className="carousel-item images">
              <img src="src/assets/images/bg-slider2.jpg" class="d-block w-100" alt="..."  className="slider" />
              <div className="carousel-caption d-none d-md-block ">
                {/* <h1>EXHANGE</h1>
                <p>
                  Some representative placeholder content for the third slide.
                </p> */}
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon " aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container-fluid p-3 row row-cols-5 g-4">
        {product.map((prod) => (
           host==prod.host ?(
            <div  key={prod.id}>
            <div className="card h-100">
              <img
                src={prod.image}
                className="card-img-top "
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{prod.name}</h5>
                <p className="card-text">{prod.description}</p>
                <span>
                  {/* <Button text="Add to cart" class="btn-info" /><br></br> */}
                  
                  
                  &#8377;<b>{prod.price}</b><br></br>
                  <button
                    className="btn btn-info"
                    onClick={() => handleCart(prod)}
                  >
                    Add to cart
                  </button>
                 
                </span>
              </div>
            </div>
          </div>
           ):(
            <div  key={prod.id}>
            <div className="card h-100">
              <img
                src={prod.image}
                className="card-img-top "
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{prod.name}</h5>
                <p className="card-text">{prod.description}</p>
                <span>
                  {/* <Button text="Add to cart" class="btn-info" /><br></br> */}
                  
                  
                  &#8377;<b>{prod.price}</b><br></br>
                  <button
                    className="btn btn-info"
                    onClick={() => handleCart(prod)}
                  >
                    Add to cart
                  </button>
                  
                </span>
              </div>
            </div>
          </div>
           )

         
        ))}
      </div>
    </>
  );
}

export default Dashboard;
