import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateProductsTable1710000003000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'product_id',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'product_name',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'product_amount',
            type: 'int',
            default: 0,
          },
          {
            name: 'material_id',
            type: 'varchar',
            length: '36',
            isNullable: false,
          },
          {
            name: 'material_amount',
            type: 'int',
            default: 0,
          },
          {
            name: 'total_price',
            type: 'decimal',
            precision: 20,
            scale: 2,
            isNullable: true,
          },
          {
            name: 'description',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'created_time',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'created_user',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'updated_time',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_user',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'delete_flag',
            type: 'boolean',
            default: false,
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'products',
      new TableForeignKey({
        columnNames: ['material_id'],
        referencedColumnNames: ['material_id'],
        referencedTableName: 'materials',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('products');
    if (table) {
      const foreignKey = table.foreignKeys.find(
        (fk) => fk.columnNames.indexOf('material_id') !== -1,
      );
      if (foreignKey) {
        await queryRunner.dropForeignKey('products', foreignKey);
      }
    }
    await queryRunner.dropTable('products');
  }
}
