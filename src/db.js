import mysql from 'mysql2/promise';
import { configDB } from './config.js';


export const connect = async() => {

  return await mysql.createConnection(configDB);
}




