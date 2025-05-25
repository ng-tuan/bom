import { MigrationInterface, QueryRunner } from 'typeorm';

export class DropAllTables1710000005000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS orders`);
    await queryRunner.query(`DROP TABLE IF EXISTS products`);
    await queryRunner.query(`DROP TABLE IF EXISTS inventory`);
    await queryRunner.query(`DROP TABLE IF EXISTS materials`);
    await queryRunner.query(`DROP TABLE IF EXISTS categories`);
    await queryRunner.query(`DROP TABLE IF EXISTS users`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // No down migration needed as this is a cleanup migration
  }
}
