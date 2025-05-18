# NestJS BOM Project

A NestJS-based authentication system with MySQL database integration.

## Project Structure

```
├── src/
│   ├── modules/          # Feature modules
│   │   └── users.module.ts
│   ├── services/         # Service layer
│   ├── controllers/      # Controller layer
│   ├── entities/         # Database entities
│   ├── dto/              # Data Transfer Objects
│   ├── utils/            # Utility functions
│   ├── app.module.ts     # Root application module
│   └── main.ts           # Application entry point
├── test/                 # Test files
├── dist/                 # Compiled output
├── node_modules/         # Dependencies
├── .env                  # Environment variables
├── .gitignore           # Git ignore rules
├── package.json         # Project metadata and dependencies
├── tsconfig.json        # TypeScript configuration
└── nest-cli.json        # NestJS CLI configuration
```

## Prerequisites

- Node.js (v14 or higher)
- MySQL (v8.0 or higher)
- npm or yarn package manager

## Environment Setup

1. Create a `.env` file in the root directory with the following variables:
```env
DB_TYPE=mysql
DB_HOST=localhost
DB_PORT=xxxx
DB_USERNAME=xxxx
DB_PASSWORD=xxxx
DB_DATABASE=xxxx
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

### Development Mode
```bash
npm run start:dev
```

### Production Mode
```bash
npm run build
npm run start:prod
```

### Debug Mode
```bash
npm run start:debug
```

### Commit Process
```bash
npm run format
npm run lint
```

## Database Setup

1. Ensure MySQL is running on your system
2. Create a database named 'auth' (or update the DB_DATABASE in .env)
3. The application will use the database configuration from your .env file

## API Documentation

The API documentation will be available at:
- Swagger UI: `http://localhost:3000/api` (when implemented, TODO function)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
