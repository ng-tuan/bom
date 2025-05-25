import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateInventoryTable1710000002000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'inventory',
        columns: [
          {
            name: 'inventory_id',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'material_id',
            type: 'varchar',
            length: '36',
            isNullable: false,
          },
          {
            name: 'number_of_inventory',
            type: 'int',
            default: 0,
          },
          {
            name: 'is_available',
            type: 'boolean',
            default: true,
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
            length: '36',
            isNullable: true,
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
            length: '36',
            isNullable: true,
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
      'inventory',
      new TableForeignKey({
        columnNames: ['material_id'],
        referencedColumnNames: ['material_id'],
        referencedTableName: 'materials',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('inventory');
    if (table) {
      const foreignKey = table.foreignKeys.find(
        (fk) => fk.columnNames.indexOf('material_id') !== -1,
      );
      if (foreignKey) {
        await queryRunner.dropForeignKey('inventory', foreignKey);
      }
    }
    await queryRunner.dropTable('inventory');
  }
}
