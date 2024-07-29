# Task Management System

## Description
This is a simple task management system built with Express and MongoDB. It uses JWT for authentication, bcrypt for password hashing, and includes validation and error handling.

## Installation
1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Set up environment variables in `.env`:
    ```
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/taskmanager
    JWT_SECRET=your_jwt_secret

## Usage
1. Start the server:
    ```bash
    npm start
    ```
2. Use Postman or any other API client to test the endpoints.

## Endpoints

### User Routes
- `POST /api/users/signup` - Sign up a new user
- `POST /api/users/login` - Log in an existing user
- `GET /api/users/me` - Get profile of the logged-in user

### Task Routes
- `POST /api/tasks` - Create a new task
- `GET /api/tasks` - Get all tasks for the logged-in user
- `GET /api/tasks/:id` - Get a task by its ID
- `PATCH /api/tasks/:id` - Update a task by its ID
- `DELETE /api/tasks/:id` - Delete a task by its ID

## Testing
Run tests with:
```bash
npm test
