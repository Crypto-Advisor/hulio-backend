const env = process.env.NODE_ENV || 'production'
const knexfile = require('../knexfile')
const knex = require('knex')(knexfile[env])

export default knex