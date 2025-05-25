import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAllTables1710000011000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Create categories table
    await queryRunner.query(`
      CREATE TABLE categories (
        category_id VARCHAR(36) PRIMARY KEY,
        category_name VARCHAR(100) NOT NULL,
        type VARCHAR(50) NULL,
        description TEXT NULL,
        created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        created_user VARCHAR(100) NULL,
        updated_time TIMESTAMP NULL,
        updated_user VARCHAR(100) NULL,
        delete_flag BOOLEAN DEFAULT FALSE
      )
    `);

    // Create materials table
    await queryRunner.query(`
      CREATE TABLE materials (
        material_id VARCHAR(36) PRIMARY KEY,
        material_name VARCHAR(100) NOT NULL,
        description TEXT NULL,
        unit VARCHAR(20) NULL,
        unit_price DECIMAL(20,2) NULL,
        number_of_inventory INT DEFAULT 0,
        created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        created_user VARCHAR(100) NULL,
        updated_time TIMESTAMP NULL,
        updated_user VARCHAR(100) NULL,
        delete_flag BOOLEAN DEFAULT FALSE
      )
    `);

    // Create products table
    await queryRunner.query(`
      CREATE TABLE products (
        product_id VARCHAR(36) PRIMARY KEY,
        product_name VARCHAR(100) NOT NULL,
        product_price DECIMAL(20,2) NULL,
        version VARCHAR(20) NULL,
        description TEXT NULL,
        created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        created_user VARCHAR(100) NULL,
        updated_time TIMESTAMP NULL,
        updated_user VARCHAR(100) NULL,
        delete_flag BOOLEAN DEFAULT FALSE
      )
    `);

    // Create product_detail table
    await queryRunner.query(`
      CREATE TABLE product_detail (
        product_detail_id VARCHAR(36) PRIMARY KEY,
        product_id VARCHAR(36) NOT NULL,
        material_id VARCHAR(36) NOT NULL,
        material_quantity INT NOT NULL,
        total_price DECIMAL(20,2) NULL,
        category_id VARCHAR(36) NULL,
        created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        created_user VARCHAR(100) NULL,
        updated_time TIMESTAMP NULL,
        updated_user VARCHAR(100) NULL,
        delete_flag BOOLEAN DEFAULT FALSE,
        FOREIGN KEY (product_id) REFERENCES products(product_id),
        FOREIGN KEY (material_id) REFERENCES materials(material_id),
        FOREIGN KEY (category_id) REFERENCES categories(category_id)
      )
    `);

    // Create orders table
    await queryRunner.query(`
      CREATE TABLE orders (
        order_id VARCHAR(36) PRIMARY KEY,
        product_id VARCHAR(36) NOT NULL,
        order_price DECIMAL(20,2) NULL,
        description TEXT NULL,
        created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        created_user VARCHAR(100) NULL,
        updated_time TIMESTAMP NULL,
        updated_user VARCHAR(100) NULL,
        delete_flag BOOLEAN DEFAULT FALSE,
        FOREIGN KEY (product_id) REFERENCES products(product_id)
      )
    `);

    // Create inventory table
    await queryRunner.query(`
      CREATE TABLE inventory (
        inventory_id VARCHAR(36) PRIMARY KEY,
        material_id VARCHAR(36) NOT NULL,
        number_of_inventory INT NOT NULL,
        is_available BOOLEAN DEFAULT TRUE,
        description TEXT NULL,
        created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        created_user VARCHAR(100) NULL,
        updated_time TIMESTAMP NULL,
        updated_user VARCHAR(100) NULL,
        delete_flag BOOLEAN DEFAULT FALSE,
        FOREIGN KEY (material_id) REFERENCES materials(material_id)
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop tables in reverse order to handle foreign key constraints
    await queryRunner.query(`DROP TABLE IF EXISTS inventory`);
    await queryRunner.query(`DROP TABLE IF EXISTS orders`);
    await queryRunner.query(`DROP TABLE IF EXISTS product_detail`);
    await queryRunner.query(`DROP TABLE IF EXISTS products`);
    await queryRunner.query(`DROP TABLE IF EXISTS materials`);
    await queryRunner.query(`DROP TABLE IF EXISTS categories`);
  }
}
