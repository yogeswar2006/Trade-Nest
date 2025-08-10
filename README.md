# 🛒 Trade Nest


Trade Nest is a modern web application for buying and selling goods, similar to OLX.  
It provides a seamless marketplace experience where users can post products,add to cart, browse listings, and make secure payments.

## 🚀 Features
- **User Authentication** – Secure sign-up, login, and logout functionality.(JWT based authentication)
- **Product Listings** – Post and delete products with images and descriptions.
- **Menu Bar Navigation**  - Easy access to Dashboard,sell_page,My_Products,Cart and Help & Settings
- **Search & Filters** – Find products by category, price range, or description.
- **Wishlist & Cart** – Save favorite items and add products to cart for purchase.
- **Payment Integration** – Secure checkout with Razorpay.(IN TEST MODE)
- **Responsive UI** – desktop design using React(VITE).
- **Backend API** – Django-powered REST APIs for data handling.(Django_Rest_Framework)
- **Return & Refund Policy** – Built-in guidelines for user trust.
- **Terms & Conditions / Privacy Policy** – Integrated compliance pages.

## 🛠️ Tech Stack
**Frontend:**
- React.js
- React Router
- Axios
- Bootstrap / Custom CSS

**Backend:**
- Django
- Django REST Framework
- SQLite / PostgreSQL (depending on deployment)

**Payments:**
- Razorpay API Integration (IN TEST MODE).

## 📂 Project Structure

TradeNest/  
│  
├── backend/ # Django backend  
│ ├── manage.py  
│ ├── TradeNest/ # Main settings & URLs  
│ ├── products/ # Products app  
│ ├── api/ # connections with frontend   
│ └── accounts/ # User registration app  
│  
├── frontend/ # React frontend  
│ ├── src/  
│ │ ├── components/  
│ │ ├── assets/  
│ │ ├── App.jsx  
│ │ ├── axiosinstance.js  
│ │   
│  
├── README.md  
├──assets/  


# DEMO IMAGES

### Home 
![Homepage](https://github.com/user-attachments/assets/56b0cc4b-db64-4cb5-b225-c867721afdf2) 

### Register 
![Registerpage](https://github.com/user-attachments/assets/49efe5ce-5b8b-4a10-b6f3-49872dcc393b)

### Login page
![Loginpage](https://github.com/user-attachments/assets/40c5b786-2b8f-42be-b002-d3bed1e0a761)

### Dashboard01
![Dashboard01](https://github.com/user-attachments/assets/f5551168-7067-4577-874f-506000f299b9)

### Dashboard02
![Dashboard02](https://github.com/user-attachments/assets/27096ad4-6f86-44c3-9790-a7a0f80fcc0a)

### Menu bar
![Menu](https://github.com/user-attachments/assets/1a581aa6-2fb5-4f46-a7a0-958817a1c1a0)

### Sell 
![Sellpage](https://github.com/user-attachments/assets/34e53575-3f1a-4460-be8e-474389934243)

### Myproducts 
![MyProducts](https://github.com/user-attachments/assets/c67aade9-6243-460f-9e65-cab5eb544d93)

### Cart 
![Cartpage](https://github.com/user-attachments/assets/1d579bde-ba04-4ab0-8b55-ab2dcbecda0e)

### Contact 
![Contactpage](https://github.com/user-attachments/assets/f5f2e062-0448-4c85-bbda-4f630f1a518c)

### Payment 
![Paymentpage](https://github.com/user-attachments/assets/bafb5400-748e-4e69-be32-c17ed6e556bf)

### Razorpay 
![RazorpayPopUP](https://github.com/user-attachments/assets/8de475b7-e22a-4b85-b197-6892651cd94d)


## ⚙️ Installation & Setup

```bash
### 1️⃣ Clone the Repository

git clone https://github.com/yogeswar2006/Trade-Nest.git
cd Trade-Nest 

### 2️⃣ Backend Setup
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver


### 3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

open port http://localhost:5173/  in your browser

**NOTE** In order to integrate payment option:(optional) 
1.create account at razorpay
2.get key_id and secret_key
3.replace your keys in products/views.py/create_order
4.(set_up razorpay)

     ------ SEE THE MAGIC😊 ------
```
🔑 **Environment Variables**

- create a .env file in backend (optional)  
   -SECRET_KEY=your_django_secret  
   -DEBUG=True  
   -RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxx   (replace yours)  
   -RAZORPAY_KEY_SECRET=xxxxxxxxxxxxxxxx    (replace yours)  


(**NOTE**:Payment flow is optional if u dont want to integrate your payment option , for that u need to create a account in razorpay)  
💳 **Payment Flow**            
1. User adds products to cart
2. User needs to enter delivery addess
3. User needs to verify thier products listings and payment money
4. Checkout via Razorpay popup.(IN TEST MODE)
5. Backend verifies payment and stores order details.
6. User receives confirmation.


📈 **Future Enhancements**  
 &#9679; Live chat between buyers & sellers.  
 &#9679; Multi-image uploads for listings.  
 &#9679; Advanced analytics for sellers.  
 &#9679; Push notifications for offers.  

