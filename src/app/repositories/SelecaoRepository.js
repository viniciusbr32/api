import { conexao } from '../database/conexao.js';
class SelecaoRepository {
  // CRUD

  create(selecao) {
    const sql = 'INSERT INTO selecoes SET ?';
    return new Promise((resolve, reject) => {
      conexao.query(sql, selecao, (erro, resultado) => {
        if (erro) return reject('Não foi possivel Cadastrar Seleção');
        // fazer o parse dos resultado
        const row = JSON.parse(JSON.stringify(resultado));
        return resolve(row);
      });
    });
  }
  findAll() {
    const sql = 'SELECT * FROM selecoes;';
    return new Promise((resolve, reject) => {
      conexao.query(sql, (erro, resultado) => {
        if (erro) return reject('Não foi possivel Localizar');
        // fazer o parse dos resultado
        const row = JSON.parse(JSON.stringify(resultado));
        return resolve(row);
      });
    });
  }
  findByid(id) {
    const sql = 'SELECT * FROM selecoes where id=?;';
    return new Promise((resolve, reject) => {
      conexao.query(sql, id, (erro, resultado) => {
        if (erro) return reject('Não foi possivel Localizar');
        // fazer o parse dos resultado
        const row = JSON.parse(JSON.stringify(resultado));
        return resolve(row);
      });
    });
  }
  update(selecao, id) {
    const sql = 'UPDATE selecoes SET ? WHERE id=?';
    return new Promise((resolve, reject) => {
      conexao.query(sql, [selecao, id], (erro, resultado) => {
        if (erro) return reject('Não foi possivel Localizar');
        // fazer o parse dos resultado
        const row = JSON.parse(JSON.stringify(resultado));
        return resolve(row);
      });
    });
  }
  delete(id) {
    const sql = 'DELETE FROM selecoes where id=?;';
    return new Promise((resolve, reject) => {
      conexao.query(sql, id, (erro, resultado) => {
        if (erro) return reject('Não foi possivel Apagar');
        // fazer o parse dos resultado
        const row = JSON.parse(JSON.stringify(resultado));
        return resolve(row);
      });
    });
  }
}

export default new SelecaoRepository();
