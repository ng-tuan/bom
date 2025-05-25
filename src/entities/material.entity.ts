import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { CommonEntity } from './common.entity';
import type { Category } from './category.entity';

@Entity('materials')
export class Material extends CommonEntity {
  /** Unique identifier for the material */
  @PrimaryGeneratedColumn('uuid')
  material_id: string;

  /** Name of the material */
  @Column({ length: 100 })
  material_name: string;

  /** Detailed description of the material */
  @Column({ type: 'text', nullable: true })
  description: string;

  /** Unit of measurement (e.g., kg, pcs, meters) */
  @Column({ length: 20, nullable: true })
  unit: string;

  /** Price per unit of the material */
  @Column({ type: 'decimal', precision: 20, scale: 2, nullable: true })
  unit_price: number;

  /** Number of items in inventory */
  @Column({ type: 'int', default: 0 })
  number_of_inventory: number;

  /** Category ID reference */
  @Column({ length: 36 })
  category_id: string;

  /** Category relationship */
  @ManyToOne('Category', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'category_id' })
  category: Category;
}
