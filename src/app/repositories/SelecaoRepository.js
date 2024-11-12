import { consulta } from '../database/conexao.js';
class SelecaoRepository {

  // CRUD
  
  create(selecao) {
    const sql = 'INSERT INTO selecoes SET ?';
    return consulta(sql, selecao, 'Não foi possivel cadastrar');
  }
  findAll() {
    const sql = 'SELECT * FROM selecoes;';
    return consulta(sql, 'Não foi possivel Listar seleçoes');
  }
  findByid(id) {
    const sql = 'SELECT * FROM selecoes where id=?;';
    return consulta(sql, id, 'Não foi possivel localizar');
  }
  update(selecao, id) {
    const sql = 'UPDATE selecoes SET ? WHERE id=?';
    return consulta(sql, [selecao, id], 'Não foi possivel atualizar');
  }
  delete(id) {
    const sql = 'DELETE FROM selecoes where id=?;';
    return consulta(sql, id, 'Não foi possivel apagar');
  }
}

export default new SelecaoRepository();
