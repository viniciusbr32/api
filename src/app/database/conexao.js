import mysql from 'mysql';

export const conexao = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'adminroot',
  database: 'bdcopa',
});

// biome-ignore lint/style/useDefaultParameterLast: <explanation>
export const consulta = (sql, valores = '', mensagemReject) => {
  return new Promise((resolve, reject) => {
    conexao.query(sql, valores, (erro, resultado) => {
      if (erro) return reject(mensagemReject);
      const row = JSON.parse(JSON.stringify(resultado));
      return resolve(row);
    });
  });
};

conexao.connect();
