import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ProductMigration1642424838864 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'product',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        default: 'gen_random_uuid()',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        width: 50,
                    },
                    {
                        name: 'brand',
                        type: 'varchar',
                        width: 50,
                    },
                    {
                        name: 'price',
                        type: 'decimal(5,2)',
                    },
                    {
                        name: 'image',
                        type: 'varchar',
                        width: 255,
                    }
                ]
            })

        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('product');
    }

}
