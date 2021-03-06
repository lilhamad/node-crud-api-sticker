// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    // connection: 'postgres://localhost/cjs-web-store',
    connection: {
      database: 'cjs-web-store',
      user:     'postgres',
      password: 'Admin@1234'
    },
  },

  test: {
    client: 'postgresql',
    connection: {
      database: 'test-cjs-web-store',
      user:     'postgres',
      password: 'Admin@1234'
    },
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
  },


  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
