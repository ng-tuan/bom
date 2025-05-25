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
3. Run command to create table
```bash
npm run migration:run
```
4. The application will use the database configuration from your .env file

## API Documentation

The API documentation will be available at:
- Swagger UI: `http://localhost:3000/api`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

# BOM (Bill of Materials) Management System

A NestJS-based application for managing Bill of Materials, inventory, and production processes.

## Quick Start with Docker

```bash
# Clone the repository
git clone <repository-url>
cd bom

# Start the application
docker compose up --build
```

The application will be available at:
- Web Application: http://localhost:3000
- API Documentation: http://localhost:3000/api
- MySQL Database: localhost:3309

### Docker Commands

```bash
# Start in background
docker compose up -d

# View logs
docker compose logs -f

# Stop containers
docker compose down

# Run migrations
docker compose exec app npm run migration:run
```

### Docker Environment
- Application runs on port 3000
- MySQL runs on port 3309
- Default database credentials:
  ```
  Host: localhost
  Port: 3309
  Username: root
  Password: root
  Database: bom_db
  ```

## Prerequisites

- Node.js (v20 or later)
- MySQL (v8.0 or later)

## Installation

### Option 1: Local Development Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd bom
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=root
DB_DATABASE=bom_db
```

4. Run database migrations:
```bash
npm run migration:run
```

5. Start the development server:
```bash
npm run start:dev
```

### Option 2: Docker Development Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd bom
```

2. Start the application with Docker:
```bash
docker compose up --build
```

The application will be available at:
- Web Application: http://localhost:3000
- API Documentation: http://localhost:3000/api
- MySQL Database: localhost:3309

#### Docker Commands

```bash
# Start in background
docker compose up -d

# View logs
docker compose logs -f

# Stop containers
docker compose down

# Rebuild containers
docker compose up --build

# Run migrations
docker compose exec app npm run migration:run
```

#### Docker Environment
- Application runs on port 3000
- MySQL runs on port 3309
- Default database credentials:
  ```
  Host: localhost
  Port: 3309
  Username: root
  Password: root
  Database: bom_db
  ```

## API Documentation

The API documentation is available at `http://localhost:3000/api` when the server is running.

## Development

### Available Scripts

- `npm run start:dev`: Start development server with hot-reload
- `npm run build`: Build the application
- `npm run start:prod`: Start production server
- `npm run migration:run`: Run database migrations
- `npm run migration:revert`: Revert the last migration
- `npm run test`: Run tests
- `npm run test:e2e`: Run end-to-end tests

### Database Migrations

To create a new migration:
```bash
npm run typeorm -- migration:create src/database/migrations/MigrationName
```

To run migrations:
```bash
npm run migration:run
```

To revert migrations:
```bash
npm run migration:revert
```

## Project Structure

```
src/
├── config/           # Configuration files
├── controllers/      # API controllers
├── database/         # Database migrations and seeds
├── dto/             # Data Transfer Objects
├── entities/        # TypeORM entities
├── interfaces/      # TypeScript interfaces
├── services/        # Business logic
└── main.ts          # Application entry point
```

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

This project is licensed under the MIT License.
