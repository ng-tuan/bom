import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CommonEntity } from './common.entity';
import { Material } from './material.entity';

@Entity('categories')
export class Category extends CommonEntity {
  /** Unique identifier for the category */
  @PrimaryGeneratedColumn('uuid')
  category_id: string;

  /** Name of the category */
  @Column({ length: 100 })
  category_name: string;

  /** Detailed description of the category */
  @Column({ type: 'text', nullable: true })
  description: string;

  /** Materials in this category */
  @OneToMany(() => Material, (material) => material.category)
  materials: Material[];
}
