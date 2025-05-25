import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CommonEntity } from './common.entity';
import { Order } from './order.entity';
import { ProductDetail } from './product-detail.entity';

@Entity('products')
export class Product extends CommonEntity {
  /** Unique identifier for the product */
  @PrimaryGeneratedColumn('uuid')
  product_id: string;

  /** Name of the product */
  @Column({ length: 100 })
  product_name: string;

  /** Price of the product */
  @Column({ type: 'decimal', precision: 20, scale: 2, nullable: true })
  product_price: number;

  /** Version of the product */
  @Column({ length: 20, nullable: true })
  version: string;

  /** Detailed description of the product */
  @Column({ type: 'text', nullable: true })
  description: string;

  /** Orders for this product */
  @OneToMany(() => Order, (order) => order.product)
  orders: Order[];

  /** Product details */
  @OneToMany(() => ProductDetail, (detail: ProductDetail) => detail.product)
  details: ProductDetail[];
}
