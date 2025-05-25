import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CommonEntity } from './common.entity';
import { Inventory } from './inventory.entity';
import { ProductDetail } from './product-detail.entity';

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

  /** Waste percentage of the material during production */
  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  waste_percentage: number;

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
