import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { CommonEntity } from './common.entity';
import { Product } from './product.entity';

@Entity('orders')
export class Order extends CommonEntity {
  /** Unique identifier for the order */
  @PrimaryGeneratedColumn('uuid')
  order_id: string;

  /** Product ID reference */
  @Column({ length: 36 })
  product_id: string;

  /** Product relationship */
  @ManyToOne(() => Product, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'product_id' })
  product: Product;

  /** Price of the order */
  @Column({ type: 'decimal', precision: 20, scale: 2, nullable: true })
  order_price: number;

  /** Detailed description of the order */
  @Column({ type: 'text', nullable: true })
  description: string;
}
