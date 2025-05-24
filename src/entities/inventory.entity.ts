import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { CommonEntity } from './common.entity';
import { Material } from './material.entity';

@Entity('inventory')
export class Inventory extends CommonEntity {
  /** Unique identifier for the inventory record */
  @PrimaryGeneratedColumn('uuid')
  inventory_id: string;

  /** Material ID reference */
  @Column({ length: 36 })
  material_id: string;

  /** Material relationship */
  @ManyToOne(() => Material, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'material_id' })
  material: Material;

  /** Number of items in inventory */
  @Column({ type: 'int', default: 0 })
  number_of_inventory: number;

  /** Flag to indicate if the material is available */
  @Column({ type: 'boolean', default: true })
  is_available: boolean;

  /** Detailed description of the inventory record */
  @Column({ type: 'text', nullable: true })
  description: string;
}
