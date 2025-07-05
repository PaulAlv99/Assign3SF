# Task 3 - Registration and Login App
## Lab work for INFORMATION SECURITY FUNDAMENTALS - University of Maribor

## Technologies
- Node.js
- Express.js
- MongoDB (Mongoose)
- bcrypt (password hashing)

## How it works
1. User registers with username and password
2. Password is hashed with bcrypt and stored securely
3. User can log in by verifying password against the stored hash

## Setup
1. Install dependencies: `npm install`
2. In a .env should be used the MONGO_URL to acess the cluster
3. Run server: `npm start`

Endpoints:
- `POST /api/auth/register`
- `POST /api/auth/login`
