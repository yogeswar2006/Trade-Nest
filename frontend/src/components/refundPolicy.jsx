import { useEffect } from "react";
import { Link } from "react-router-dom";

function RefundPolicy() {


    useEffect(()=>{
      document.body.style.overflow='auto'
    },[])
  return (
    <>
      <div className="text-light bg-dark-color container p-3">
        <h2 className="text-center mb-3 text-info">
          Return & Refund Policy – Trade Nest 
        </h2>
        <hr></hr>
        <div className="text-center">
          <p>
            At Trade Nest, we act as a marketplace connecting buyers and
            sellers. We do not directly own, store, or ship the items listed by
            users. Therefore, the return and refund process may differ from
            traditional online stores.
          </p>
        </div>

        <div>
          <h4 className="text-info">1. No Direct Returns Through Trade Nest</h4>

          <p>
          &#9679; All items listed on Trade Nest are sold directly by
            individual sellers. We do not handle returns or exchanges for items
            purchased through the platform. Any return, refund, or exchange must
            be agreed upon between the buyer and the seller.
          </p>

          <h4 className="text-info">2. Before Making a Purchase</h4>
          <p>We recommend buyers:</p>
          <p>
            &#9679; Carefully review the product description, photos, and
            condition before purchasing.
          </p>
          <p> &#9679;Contact the seller to ask
            questions or request additional information.</p>
            <p> &#9679;Meet in a safe
            location to inspect the product before making payment (for local
            deals).</p>
          <h4 className="text-info">3. Refunds</h4>
          <p>Refunds are only possible if:</p>
          <p>
            &#9679; The seller has agreed to a refund in writing (via the Trade
            Nest chat or other proof). 
          </p>
          <p>&#9679;The payment method used supports
            refunds (e.g., payment gateway with refund feature).</p>

          <h4 className="text-info">4. Items Not Eligible for Returns or Refunds</h4>
          <p>
            &#9679; Products sold “as-is” where the seller has clearly mentioned
            no returns.
          </p>
          <p> &#9679; Digital items, perishable goods, and
            personalized products.</p>
            <p> &#9679; Items damaged after purchase due to
            misuse or neglect.</p>
          <h4 className="text-info">5. Dispute Resolution</h4>
          <p>
            If a dispute arises, buyers and sellers should try to resolve it
            directly. If no resolution is reached, Trade Nest may step in to
            mediate based on platform guidelines, but we are not legally
            obligated to enforce refunds or returns unless stated otherwise in
            our Terms & Conditions.
          </p>
        </div>
        <Link className="btn btn-info " to={'/dashboard'}>Dashboard</Link>

        
        </div>
      
    </>
  );
}

export default RefundPolicy;
