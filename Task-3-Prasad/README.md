# Task 3 - Student Management API

A Node.js backend application for managing student information and records.

## Features

- **Student Management**: CRUD operations for student records
- **Database Integration**: MongoDB with Mongoose ODM
- **RESTful API**: Standard HTTP methods for resource management
- **CORS Support**: Cross-origin request handling
- **Error Handling**: Comprehensive error handling middleware

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js (v5.2.1)
- **Database**: MongoDB with Mongoose
- **Middleware**: cors, body-parser
- **Environment**: dotenv for configuration management

## Project Structure

```
.
├── config/
│   └── db.js                 # MongoDB connection configuration
├── controllers/
│   └── studentController.js  # Student operations logic
├── models/
│   └── Student.js            # Student schema definition
├── routes/
│   └── studentRoutes.js      # Student API endpoints
├── server.js                 # Application entry point
├── package.json              # Dependencies
└── .env                      # Environment variables (create from .env-example)
```

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file based on `.env-example`:
   ```bash
   cp .env-example .env
   ```

3. Configure your environment variables in `.env`

## Running the Server

Start the server:
```bash
npm start
```

The server will run on the port specified in your `.env` file (default: 5000)

## API Endpoints

### Root
- `GET /` - Check API status

### Students
- `GET /students` - Retrieve all students
- `GET /students/:id` - Retrieve a specific student by ID
- `POST /students` - Create a new student
- `PUT /students/:id` - Update a student record
- `DELETE /students/:id` - Delete a student record

## Request/Response Examples

### Create a Student
```bash
POST /students
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "enrollment": "2024-01-15"
}
```

### Update a Student
```bash
PUT /students/:id
Content-Type: application/json

{
  "name": "John Updated",
  "email": "john.updated@example.com"
}
```

## Environment Variables

See `.env-example` for all required environment variables.

## Development

To run with auto-reload during development:
```bash
npx nodemon server.js
```

## Database

This application uses MongoDB. Ensure MongoDB is running and accessible via the `MONGODB_URI` specified in your `.env` file.

## Error Handling

The API returns standard HTTP status codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `404` - Not Found
- `500` - Server Error

## License

ISC
