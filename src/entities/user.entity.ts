import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryColumn('char', { length: 36 })
  user_id: string;

  @Column({ unique: true })
  user_name: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  last_login: Date;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @Column({ default: 0 })
  failed_login_attempts: number;

  @Column({ type: 'boolean', default: false })
  account_locked: boolean;

  @Column({ nullable: true })
  account_locked_until: Date;
}
