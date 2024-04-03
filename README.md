# My Backend Express Bookstore API

This is a backend API for a bookstore application built with Express.js, TypeScript, and PostgreSQL.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/roby2409/backendexpress.git
   cd backendexpress
   ```
2. Install dependencies:

   ```bash
   npm install
   Set up environment variables:
   Create a .env file in the root directory of the project and add the following variables:
   ```

3. setup env

   ```
   DATABASE_URL=your_postgresql_database_url
   JWT_SECRET=your_jwt_secret_key
   ```

4. Start the development server:
   ```
   npm run dev
   ```

## Technology of dependencies used

### Dependencies

- **@prisma/client**: Prisma client for database ORM.
- **@types/http-errors**: TypeScript definitions for http-errors library.
- **bcrypt**: Library for hashing passwords.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing (CORS).
- **dotenv**: Library for loading environment variables from a .env file.
- **express**: Web framework for building APIs with Node.js.
- **jsonwebtoken**: Library for generating and verifying JSON Web Tokens (JWT).

### Development Dependencies

- **@types/bcrypt**: TypeScript definitions for bcrypt library.
- **@types/cors**: TypeScript definitions for cors library.
- **@types/express**: TypeScript definitions for express library.
- **@types/jsonwebtoken**: TypeScript definitions for jsonwebtoken library.
- **@types/node**: TypeScript definitions for Node.js.
- **nodemon**: Utility for automatically restarting the server during development.
- **prisma**: Prisma CLI for database migrations and schema management.
- **ts-node**: TypeScript execution environment for Node.js.
- **typescript**: TypeScript compiler for compiling TypeScript code to JavaScript.
