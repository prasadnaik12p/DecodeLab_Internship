# Task 2 - Recipe Authentication Backend

A Node.js backend application for managing recipes with user authentication and authorization.

## Features

- **User Authentication**: JWT-based authentication system
- **Password Security**: Bcrypt password hashing and validation
- **Recipe Management**: Create, read, update, and delete recipes
- **Session Management**: Express session handling with cookie support
- **CORS Support**: Cross-origin request handling
- **Database Integration**: MongoDB with Mongoose ODM

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js (v5.2.1)
- **Database**: MongoDB with Mongoose (v9.7.0)
- **Authentication**: JWT (jsonwebtoken v9.0.3)
- **Security**: bcryptjs, bcrypt
- **Middleware**: cors, cookie-parser, express-session

## Project Structure

```
Backend/
├── config/
│   └── db.js                 # Database configuration
├── controllers/
│   ├── authController.js     # Authentication logic
│   └── recipeController.js   # Recipe operations
├── middleware/
│   └── authMiddleware.js     # JWT verification middleware
├── models/
│   ├── Recipe.js             # Recipe schema
│   └── User.js               # User schema
├── routes/
│   ├── User.route.js         # Authentication routes
│   └── Recipe.route.js       # Recipe endpoints
├── app.js                    # Express app setup
├── server.js                 # Server entry point
└── package.json              # Dependencies
```

## Installation

1. Navigate to the Backend directory:
   ```bash
   cd Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env-example`:
   ```bash
   cp .env-example .env
   ```

4. Configure your environment variables in `.env`

## Running the Server

Start the server:
```bash
npm start
```

The server will run on `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /auth/register` - Register a new user
- `POST /auth/login` - User login
- `POST /auth/logout` - User logout

### Recipes
- `GET /recipes` - Get all recipes
- `GET /recipes/:id` - Get recipe by ID
- `POST /recipes` - Create a new recipe (requires authentication)
- `PUT /recipes/:id` - Update recipe (requires authentication)
- `DELETE /recipes/:id` - Delete recipe (requires authentication)

## Environment Variables

See `.env-example` for all required environment variables.

## Security Notes

- Passwords are hashed using bcryptjs before storage
- JWT tokens are used for stateless authentication
- Sessions are configured with secure and httpOnly cookies
- CORS is enabled for cross-origin requests

## Development

For development with auto-reload, you can use nodemon:
```bash
npx nodemon server.js
```

## License

ISC
