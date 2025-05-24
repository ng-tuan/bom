import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateMaterialsTable1710000000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // First create categories table
    await queryRunner.createTable(
      new Table({
        name: 'categories',
        columns: [
          {
            name: 'category_id',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'category_name',
            type: 'varchar',
            length: '100',
            isNullable: false,
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

    // Then create materials table
    await queryRunner.createTable(
      new Table({
        name: 'materials',
        columns: [
          {
            name: 'material_id',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'material_name',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'unit',
            type: 'varchar',
            length: '20',
            isNullable: true,
          },
          {
            name: 'unit_price',
            type: 'decimal',
            precision: 20,
            scale: 2,
            isNullable: true,
          },
          {
            name: 'number_of_inventory',
            type: 'int',
            default: 0,
          },
          {
            name: 'category_id',
            type: 'varchar',
            length: '36',
            isNullable: false,
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

    // Add foreign key constraint
    await queryRunner.createForeignKey(
      'materials',
      new TableForeignKey({
        columnNames: ['category_id'],
        referencedColumnNames: ['category_id'],
        referencedTableName: 'categories',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('materials');
    if (table) {
      const foreignKey = table.foreignKeys.find(
        (fk) => fk.columnNames.indexOf('category_id') !== -1,
      );
      if (foreignKey) {
        await queryRunner.dropForeignKey('materials', foreignKey);
      }
    }
    await queryRunner.dropTable('materials');
    await queryRunner.dropTable('categories');
  }
}
