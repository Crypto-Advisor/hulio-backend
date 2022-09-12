import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    function createWebsiteTable(): Promise<void> {
        return knex.schema.createTable('website', (table:any) =>{
            table.string('url', 100).primary();
            table.string('tx_hash', 256).notNullable();
            table.boolean('verified').notNullable();
            table.timestamp('date_created').notNullable().defaultTo(knex.fn.now());
        })
    }

    function createTutorialTable(): Promise<void> {
        return knex.schema.createTable('tutorial', (table:any) =>{
            table.string('url', 100).primary();
            table.string('name', 100).notNullable();
            table.string('image', 1000).nullable();
            table.text('description').nullable();
            table.json('tutorial_steps').defaultTo('{}').notNullable();
            table.decimal('reward', 12, 12).notNullable().defaultTo(0);
            table.string('currency', 100).notNullable().defaultTo('SOL');
        })
    }

    return createWebsiteTable()
        .then(createTutorialTable)
}


export async function down(knex: Knex): Promise<void> {
    async function dropTables(): Promise<void> {
        function dropWebsite(): Promise<void> {
            return knex.schema.dropTable('website')
        }

        return dropWebsite()
            .then( async() =>{
                return knex.schema.dropTable('tutorial')
            })
    }

    return dropTables();
}

