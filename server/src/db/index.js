const {Pool} = require('pg')
const { PASS } = require('../constants')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'pern_auth',
    password: PASS,
    port: 5432
})

module.exports = {
    query: (text,params) => pool.query(text,params),
}