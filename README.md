# Predixa Backend

Backend service for Predixa stock prediction platform.

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- JWT Authentication
- bcrypt for password hashing

## Features Implemented

- User registration
- User login with JWT
- Role-based access (user/admin)
- Protected routes
- Mock prediction endpoint (BUY / SELL / HOLD)
- Predictions stored in PostgreSQL

## Setup Instructions

1. Clone the repository
2. Run:
   npm install
3. Copy .env.example to .env and configure values
4. Create PostgreSQL database named `predixa`
5. Run:
   npm run dev

Server runs on:
http://localhost:8000
