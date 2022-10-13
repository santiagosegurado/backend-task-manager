import * as dotenv  from 'dotenv';
dotenv.config();


// Configuracion de la Db
export const configDB = {
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER ,
  password: process.env.MYSQLPASSWORD ,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLHOST 
}