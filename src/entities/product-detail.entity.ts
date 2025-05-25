import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { CommonEntity } from './common.entity';
import { Product } from './product.entity';
import { Material } from './material.entity';
import { Category } from './category.entity';

@Entity('product_detail')
export class ProductDetail extends CommonEntity {
  /** Unique identifier for the product detail */
  @PrimaryGeneratedColumn('uuid')
  product_detail_id: string;

  /** Product ID reference */
  @Column({ name: 'product_id' })
  product_id: string;

  /** Product relationship */
  @ManyToOne(() => Product, (product: Product) => product.details)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  /** Material ID reference */
  @Column({ name: 'material_id' })
  material_id: string;

  /** Material relationship */
  @ManyToOne(() => Material)
  @JoinColumn({ name: 'material_id' })
  material: Material;

  /** Amount of material used */
  @Column({ name: 'material_quantity', type: 'int' })
  material_quantity: number;

  /** Total price of the material */
  @Column({ name: 'total_price', type: 'decimal', precision: 20, scale: 2 })
  total_price: number;

  /** Category ID reference */
  @Column({ name: 'category_id' })
  category_id: string;

  /** Category relationship */
  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;
}
