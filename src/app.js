import express from 'express';
export const app = express();

import selecaoController from './app/controllers/selecaoController.js';

//indicar para o express ler body com json
app.use(express.json());

//rotas
app.get('/selecoes', selecaoController.index);
app.get('/selecoes/:id', selecaoController.show);
app.post('/selecoes', selecaoController.store);
app.put('/selecao/:id', selecaoController.update);
app.delete('/selecao/:id', selecaoController.delete);
