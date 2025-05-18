import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryColumn('char', { length: 36 })
  user_id: string;

  @Column({ unique: true })
  user_name: string;

  @Column()
  password: string;

  @Column({ nullable: true, default: new Date() })
  last_login: Date;

  @Column({ default: new Date() })
  created_at: Date;

  @Column({ default: new Date() })
  updated_at: Date;

  @Column({ default: 0 })
  failed_login_attempts: number;

  @Column({ type: 'boolean', default: false })
  account_locked: boolean;

  @Column({ nullable: true })
  account_locked_until: Date;

  @Column({ nullable: false, default: 0 })
  deleted_flag: number;
}
