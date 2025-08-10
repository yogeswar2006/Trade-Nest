import Button from "./Button"
import Header from "./header"
import Footer from "./footer"

function Main(){
    return (
        <>
          <Header/>
         <div className="container text-center">
            <div className="container text-center bg-dark-color p-5 rounded">
                <h2 className="text-light text-center">Where Traders connect ❤️</h2>
                <p className="text-light text-center">Welcome to Trade Nest .Trade Nest is an online marketplace that connects buyers and sellers to exchange goods. We do not own, produce, or ship the items listed by users. Our role is to provide a platform for these transactions.</p>
                 <Button text='Explore Now' class='btn-outline-warning' url='/dashboard'/>
            </div>
          </div>
         

        </>
    )
}

export default Main