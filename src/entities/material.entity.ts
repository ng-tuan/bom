import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { CommonEntity } from './common.entity';
import { ProductDetail } from './product-detail.entity';
import { Inventory } from './inventory.entity';

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

  /** Product details using this material */
  @OneToMany(() => ProductDetail, (detail: ProductDetail) => detail.material)
  productDetails: ProductDetail[];

  /** Inventory records for this material */
  @OneToMany(() => Inventory, (inventory: Inventory) => inventory.material)
  inventories: Inventory[];
}
