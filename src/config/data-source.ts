import { DataSource } from 'typeorm';
import { Material } from '../entities/material.entity';
import { config } from 'dotenv';

config(); // Load environment variables

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Material],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: false,
});
