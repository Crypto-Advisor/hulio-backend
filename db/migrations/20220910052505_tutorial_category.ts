import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    function createCategoryColumn(): Promise<void> {
        return knex.schema.table('tutorial', table => {
            table.string('category', 100).notNullable().defaultTo('Decentralized Exchanges');
        });
    }

    return createCategoryColumn();
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.table('tutorial', table =>{
        table.dropColumn('tutorial');
    })
}

