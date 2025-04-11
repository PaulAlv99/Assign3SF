# Task 3 - Registration and Login App

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
2. Run server: `npm start`
3. MongoDB must be running on `mongodb://127.0.0.1:27017/task3_db`

Endpoints:
- `POST /api/auth/register`
- `POST /api/auth/login`
