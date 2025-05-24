import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { CommonEntity } from './common.entity';
import { Material } from './material.entity';
import { Order } from './order.entity';

@Entity('products')
export class Product extends CommonEntity {
  /** Unique identifier for the product */
  @PrimaryGeneratedColumn('uuid')
  product_id: string;

  /** Name of the product */
  @Column({ length: 100 })
  product_name: string;

  /** Amount of the product */
  @Column({ type: 'int', default: 0 })
  product_amount: number;

  /** Material ID reference */
  @Column({ length: 36 })
  material_id: string;

  /** Amount of material used */
  @Column({ type: 'int', default: 0 })
  material_amount: number;

  /** Total price of the product */
  @Column({ type: 'decimal', precision: 20, scale: 2, nullable: true })
  total_price: number;

  /** Detailed description of the product */
  @Column({ type: 'text', nullable: true })
  description: string;

  /** Material relationship */
  @ManyToOne(() => Material, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'material_id' })
  material: Material;

  @OneToMany(() => Order, (order) => order.product)
  orders: Order[];
}
