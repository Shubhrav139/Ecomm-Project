# ECOMM Project (EBuy)-

## Tech Stack-
	Backend- Nodejs, Express
	Frontend- Reactjs
	DB- MongoDB

## Functionalities-
	1. There will be two users, Admin & User.
	2. Both users can log in and log out.
	3. Home page will show a catalog of products available with their details.
	4. User can add products to the cart & adjust their quantity accordingly.
	5. An order will be created on checkout.
	6. Admin can add, edit & delete products.

## Local Setup-
	1. Install required dependencies.
	2. Setup mongoDB in local.
	3. Add users in DB by running following command in mongo terminal.
  ```
db.users.insertMany([
{
  "name": "Admin",
  "email": "admin@ebuy.com",
  "password": "admin@123",
  "phone_number": "9988776655",
  "role": "admin",
  "orders": [],
  "__v": 0
},
{
  "name": "User",
  "email": "user@ebuy.com",
  "password": "user@123",
  "phone_number": "9988776655",
  "role": "user",
  "orders": [],
  "__v": 0
}
]) 
```
	4. Add sample products using following command-
```
db.products.insertMany([
{
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
	  "quantity": 40,
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
   
    },
    {
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "quantity": 50
    },
    {
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "quantity": 80
    },
    {
        "title": "Mens Casual Slim Fit",
        "price": 15.99,
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "quantity": 30
    },
    {
        "title": "Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        "quantity": 30
    }
])
```
	5. Run backend and frontend.
