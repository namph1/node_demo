const pg = require(‘pg’);
const pool = new pg.Pool({
user: 'kbwkkmbzgpjklf',
host: 'ec2-23-23-142-5.compute-1.amazonaws.com',
database: 'd1rnj1ld06appm',
password: 'a44f4c19ce18e995ca8b7fd32903f2c9acc954e90e559e097a7f2c33ac23bf99',
port: ‘5432’});

pool.query(“SELECT NOW()”, (err, res) => {
console.log(err, res);
pool.end();
});