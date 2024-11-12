import mysql from 'mysql';

export const conexao = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'adminroot',
  database: 'bdcopa',
});

conexao.connect();
