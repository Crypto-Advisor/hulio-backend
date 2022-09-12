require('dotenv').config();

const config = {
    production: {
      client: 'postgresql',
      connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        }
      },
      pool: {
        min: 2,
        max: 10
      },      
      migrations: {
        tableName: 'knex_migrations',
        directory: `${ __dirname }/db/migrations`
      }
    }
  
  };
  
  module.exports = config;