import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('materials')
export class Material {
  /** Unique identifier for the material */
  @PrimaryGeneratedColumn('uuid')
  material_id: string;

  /** Name of the material */
  @Column({ length: 100 })
  name: string;

  /** Detailed description of the material */
  @Column({ type: 'text', nullable: true })
  description: string;

  /** Unit of measurement (e.g., kg, pcs, meters) */
  @Column({ length: 20, nullable: true })
  unit: string;

  /** Price per unit of the material */
  @Column({ type: 'decimal', precision: 20, scale: 2, nullable: true })
  unit_price: number;

  /** Category or type of the material */
  @Column({ length: 50, nullable: true })
  category: string;

  /** Flag to indicate if the material is active */
  @Column({ type: 'boolean', default: true })
  is_active: boolean;

  /** Timestamp when the record was created */
  @CreateDateColumn()
  created_at: Date;

  /** User ID who created the record */
  @Column({ nullable: false, default: 0 })
  created_by: string;

  /** Timestamp when the record was last updated */
  @UpdateDateColumn()
  updated_at: Date;

  /** User ID who last updated the record */
  @Column({ nullable: false, default: 0 })
  updated_by: string;

  /** Soft delete flag (0: active, 1: deleted) */
  @Column({ nullable: false, default: 0 })
  deleted_flag: number;
}
