# Job Posting Board with Email Automation

## Overview

The Job Posting Board is a MERN stack-based project designed for companies to register, post job opportunities, and send email alerts to candidates. The backend is powered by Node.js, Express, MongoDB, and Nodemailer for email automation.

---

## Features

- **Company Registration and Login** with JWT Authentication.
- **Job Posting**: Companies can post jobs with details like title, description, experience level, and end date.
- **Email Automation**: Send job alert emails to multiple candidates using Nodemailer.
- **Secure Routes**: JWT-based middleware for protecting endpoints.

---

## Folder Structure

```
job-posting-board/
├── backend/
│   ├── config/
│   │   ├── db.js               # MongoDB connection setup
│   │   ├── emailConfig.js      # Nodemailer configuration
│   ├── controllers/
│   │   ├── authController.js   # Handles registration and login
│   │   ├── jobController.js    # Handles job postings and email automation
│   ├── middleware/
│   │   ├── authMiddleware.js   # JWT authentication middleware
│   │   ├── errorHandler.js     # Global error handling middleware
│   ├── models/
│   │   ├── Company.js          # Company schema
│   │   ├── Job.js              # Job schema
│   ├── routes/
│   │   ├── authRoutes.js       # Routes for authentication
│   │   ├── jobRoutes.js        # Routes for job postings
│   ├── .env                    # Environment variables
│   ├── .gitignore              # Git ignore file
│   ├── server.js               # Entry point of the application
│   ├── package.json            # Project dependencies
└── frontend/                   # (Frontend development placeholder)
```

---

## Prerequisites

1. **Node.js**: Ensure you have Node.js installed (v14+ recommended).
2. **MongoDB Atlas**: Set up a free MongoDB cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
3. **Postman** or any API testing tool.

---

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd job-posting-board/backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the `backend/` directory with the following content:

   ```plaintext
   MONGO_URI=<Your MongoDB URI>
   JWT_SECRET=<Your JWT Secret>
   EMAIL=<Your Email Address>
   EMAIL_PASSWORD=<Your Email Password>
   PORT=5000
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

---

## Testing the APIs

### **Base URL**

- Local: `http://localhost:5000`

### **Endpoints**

#### **1. Company Registration**

- **URL**: `POST /api/auth/register`
- **Payload**:
  ```json
  {
    "name": "Test Company",
    "email": "test@example.com",
    "password": "password123"
  }
  ```
- **Expected Response**:
  ```json
  {
    "message": "Company registered",
    "token": "<JWT Token>"
  }
  ```

#### **2. Company Login**

- **URL**: `POST /api/auth/login`
- **Payload**:
  ```json
  {
    "email": "test@example.com",
    "password": "password123"
  }
  ```
- **Expected Response**:
  ```json
  {
    "message": "Login successful",
    "token": "<JWT Token>"
  }
  ```

#### **3. Create Job Posting**

- **URL**: `POST /api/jobs`
- **Headers**:
  ```plaintext
  Authorization: Bearer <JWT Token>
  ```
- **Payload**:
  ```json
  {
    "title": "Software Engineer",
    "description": "Develop scalable applications",
    "experienceLevel": "INTERMEDIATE",
    "candidates": ["candidate1@example.com", "candidate2@example.com"],
    "endDate": "2025-12-31"
  }
  ```
- **Expected Response**:
  ```json
  {
    "message": "Job created successfully",
    "job": { <Job Details> }
  }
  ```

#### **4. Send Job Emails**

- **URL**: `POST /api/jobs/send-emails`
- **Headers**:
  ```plaintext
  Authorization: Bearer <JWT Token>
  ```
- **Payload**:
  ```json
  {
    "jobId": "<Job ID>",
    "emails": ["candidate1@example.com", "candidate2@example.com"]
  }
  ```
- **Expected Response**:
  ```json
  {
    "message": "Emails sent successfully"
  }
  ```

---

## Notes

- Use Postman or similar tools to test the endpoints.
- Ensure the MongoDB URI and email credentials are correctly configured in `.env`.

---

## Future Enhancements

- Add a frontend with React.js for user interaction.
- Implement pagination for job listings.
- Add admin panel for managing companies and jobs.

---

## License

This project is licensed under the MIT License.

---

## .gitignore

```
node_modules/
.env
```
#   G m a i l A u t o m a t i o n  
 