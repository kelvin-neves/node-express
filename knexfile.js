require('dotenv').config();

module.exports = {
  config: {
    client: 'postgresql',
    searchPath: 'public',
    connection: {
      host    : process.env.DBHOST,
      port    : process.env.DBPORT, 
      database: process.env.DBNAME,
      user    : process.env.DBUSER,
      password: process.env.DBPASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations'
    },
    seeds: {
      directory: "./db/seeds",
    }
  }
};
