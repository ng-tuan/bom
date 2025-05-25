import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { Category } from '../entities/category.entity';
import { Material } from '../entities/material.entity';
import { Order } from '../entities/order.entity';
import { ProductDetail } from '../entities/product-detail.entity';
import { Product } from '../entities/product.entity';
import { Inventory } from '../entities/inventory.entity';

config(); // Load environment variables

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Material, Category, ProductDetail, Product, Order, Inventory],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: false,
});
