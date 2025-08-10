import { useEffect } from "react";
import { Link } from "react-router-dom";

function TermsConditions() {

    useEffect(()=>{
   document.body.style.overflow='auto'
    },[])
  return (
    <>
      <div className=" container p-3 bg-dark-color text-light">
        <h2 className="text-center text-info">Terms & Conditions – Trade Nest</h2>
        <hr></hr>
        <p className="text-center">  
          Welcome to Trade Nest. By using our website services,
          you agree to follow these Terms & Conditions. Please read them
          carefully before using our platform.
        </p>

        <h4 className="text-info">1. Introduction</h4>
        <p>
          Trade Nest is an online marketplace that connects buyers and sellers
          to exchange goods. We do not own, produce, or ship the items listed by
          users. Our role is to provide a platform for these transactions.
        </p>
        <h4  className="text-info">2. User Accounts</h4>
        <p>
          {" "}
          &#9679;You must create an account to list items or contact sellers.
        </p>
        <p>
          {" "}
          &#9679;You are responsible for keeping your login credentials secure.
        </p>
        <p>
          {" "}
          &#9679;Any activity performed under your account will be considered
          your responsibility.
        </p>
        <h4  className="text-info">3. Listing Items</h4>
        <p>
          {" "}
          &#9679;All listings must be accurate, truthful, and not misleading.
        </p>
        <p>
          {" "}
          &#9679;You must only post items you have the legal right to sell.
        </p>
        <p>
          {" "}
          &#9679;Prohibited items include illegal goods, counterfeit products,
          weapons, and items banned under local laws.
        </p>
        <h4  className="text-info">4. User Conduct</h4>
        <p>You agree not to:</p>
        <p>&#9679; Post false or misleading information.</p>
        <p>&#9679; Spam or send unsolicited messages.</p>
        <p>&#9679; Use the platform for fraudulent or illegal activities.</p>
        <h4  className="text-info">5. Contact Us</h4>
        <p>
          For questions about these Terms & Conditions, you can contact us at:
          📧 [yogi8247322760@gmail.com]
        </p>
        <Link className="btn btn-info" to={'/dashboard'}>Dashboard</Link>
      </div>
    </>
  );
}

export default TermsConditions;
