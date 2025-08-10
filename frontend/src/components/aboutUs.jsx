import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <>
      <div className="text-light container p-4 bg-dark-color rounded">


        <h2 className="text-center mb-3 text-info">About Us</h2>
        <hr></hr>
        <div className="text-center">

            <p>
         <strong> Welcome to Trade Nest,</strong> your trusted online marketplace for buying and
          selling goods. We connect people who want to sell pre-owned or new
          items with buyers who are looking for great deals — all in one safe,
          simple, and convenient platform.
        </p>
        </div>

        <div>
            <h4 className="text-info">Our platform offers:</h4>

        <p> &#9679; Easy product listing - post your items in just a few clicks.</p>
        <p>
           &#9679; Direct buyer-seller connection - negotiate and close deals easily.
        </p>
        <p>
           &#9679; Wide variety of categories - from electronics and fashion to furniture
          and vehicles.
        </p>
        <p>
           &#9679; Secure and transparent process - we value safety in every transaction.
        </p>

        </div>
       
       <div className="text-center">
         <p>
         <strong> At Trade Nest,</strong> we believe in giving products a second life, helping
          sellers earn money and buyers find affordable deals. Whether you’re
          clearing space at home or hunting for something unique, Trade Nest is
          your go-to online marketplace.
        </p>
       </div>

       <div>
         <h4 className="text-info">Our Vision:</h4>
        <p>
          To make local buying and selling effortless, sustainable, and
          rewarding for everyone.
        </p>

        <h4 className="text-info">Our Mission:</h4>
        <p>
          To connect communities, promote reuse, and create a safe and
          user-friendly platform for all.
        </p>
       </div>
        <Link className="btn btn-info" to={'/dashboard'}>Dashboard</Link>
      </div>
     
    </>
  );
}

export default AboutUs;
