import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class CommonEntity {
  /** Timestamp when the record was created */
  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  created_time: Date;

  /** User ID who created the record */
  @Column({ nullable: true })
  created_user: string;

  /** Timestamp when the record was last updated */
  @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  updated_time: Date;

  /** User ID who last updated the record */
  @Column({ nullable: true })
  updated_user: string;

  /** Soft delete flag */
  @Column({ type: 'boolean', default: false })
  delete_flag: boolean;
}
