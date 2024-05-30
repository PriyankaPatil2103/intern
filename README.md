1.Introduction
This project is a Node.js API for an auction system. The API allows users to add, retrieve, update, and delete auction items. Additionally, it supports pagination and image uploads for items.

2.Prerequisites
Node.js (version 14 or higher)
npm (version 6 or higher)
MongoDB (running instance or MongoDB Atlas account)

3.Installation
Clone the repository:
git clone https://github.com/yourusername/auction-api.git

Change into the project directory:
cd auction-api


Install the dependencies:
npm install
-Imports and Initial Setup

express: A web framework for Node.js used to build the API.

body-parser: Middleware to parse incoming request bodies.

mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.

cors: Middleware to enable Cross-Origin Resource Sharing.

cookie-parser: Middleware to parse cookies.
dotenv: Loads environment variables from a .env file.

multer: Middleware for handling file uploads.

path: Node.js module to handle and transform file path

4.Running the Project
Ensure MongoDB is running. If you're using MongoDB Atlas, ensure you have your connection string ready.

i)Start the server:

npm start
The server should now be running on http://localhost:5000.

ii)API Documentation
Description: Add a new item to the auction.

Method: POST
URL: localhost:5000/api/adduser

iii)Request Body:
{
 "name": "Snehal",
    "email": "priyanka121@gmail.com",
    "MobileNo": 898776672667,
    "role": "sde",
    "Password": "qwerty"
}
Body: Created item object
Method: GET
URL:localhost:5000/api/getalluser
{
        "_id": "6658766897b5626cac6fc0cd",
        "name": "priyanka",
        "email": "priyanka121@gmail.com",
        "MobileNo": 898776672667,
        "role": "admin",
        "Password": "$2b$10$qHehCEuxeblLK/0wzxRGlevMeaLIhCa3YOd6j5oGYxz.Fwjx7KXBm",
        "Created_at": "2024-05-30T12:48:42.620Z",
        "__v": 0
  }

- Use JWT (JSON Web Tokens) for authentication.

  1. Install the necessary packages:

jsonwebtoken for generating and verifying tokens.
bcrypt for hashing passwords.

2.Update your user model to include password hashing before saving a user.

3.Modify your login and registration logic to handle JWT token generation.

4.Create a middleware to protect certain routes by verifying the JWT token.

 Registration and Login Logic
Update the registration and login logic to handle JWT token generation.

 JWT Middleware
Create a middleware to protect routes by verifying the JWT token

Protect Routes
Apply the middleware to protect specific routes

 Update Environment Variables
Ensure your .env file includes a secret key for JWT

- Pagination:
esting the Pagination
You can test the pagination functionality by making GET requests to the endpoint with different page and limit query parameters. For example:

To get the first page with 3 items per page:
GET http://localhost:3000/items?page=1&limit=3

To get the second page with 5 items per page:
GET http://localhost:3000/items?page=2&limit=5
