import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { CommonEntity } from './common.entity';

@Entity('users')
export class User extends CommonEntity {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column({ length: 100, unique: true })
  username: string;

  @Column({ length: 100 })
  password: string;

  @Column({ length: 100, nullable: true })
  email: string;

  @Column({ length: 100, nullable: true })
  full_name: string;

  @Column({ type: 'boolean', default: true })
  is_active: boolean;
}
