import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class CommonEntity {
  /** Timestamp when the record was created */
  @CreateDateColumn()
  created_time: Date;

  /** User ID who created the record */
  @Column({ nullable: false })
  created_user: string;

  /** Timestamp when the record was last updated */
  @UpdateDateColumn()
  updated_time: Date;

  /** User ID who last updated the record */
  @Column({ nullable: false })
  updated_user: string;

  /** Soft delete flag */
  @Column({ type: 'boolean', default: false })
  delete_flag: boolean;
}
