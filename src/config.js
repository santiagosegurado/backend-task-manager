import * as dotenv  from 'dotenv';
dotenv.config();


// Configuracion de la Db
export const configDB = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD ,
  database: process.env.DB_DBNAME
}