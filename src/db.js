import mysql from 'mysql2/promise';
import { configDB } from './config.js';


export const connect = async() => {

  return await mysql.createConnection({
    host: 'containers-us-west-49.railway.app',
    user: 'root',
    password: 'OBDb25zMHSptxHaRGSj4',
    database: 'railway',
    port: 5503
 });
}





