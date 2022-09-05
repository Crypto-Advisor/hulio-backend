"use strict";
require('dotenv').config();
const config = {
    development: {
        client: 'postgresql',
        connection: {
            host: process.env.PGHOST,
            user: process.env.PGUSER,
            password: process.env.PGPASSWORD,
            database: process.env.PGDATABASE
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: `${__dirname}/db/migrations`
        }
    },
    production: {
        client: 'postgresql',
        connection: process.env.DATABASE_URL,
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }
};
module.exports = config;
