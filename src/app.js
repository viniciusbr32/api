import express from 'express';
export const app = express();

//indicar para o express ler body com json
app.use(express.json());

// mock
const selecoes = [
  {
    id: 1,
    selecao: 'Brasil',
    grupo: 'G',
  },
  {
    id: 2,
    selecao: 'Suiça',
    grupo: 'G',
  },
  {
    id: 3,
    selecao: 'Camarões',
    grupo: 'G',
  },
  {
    id: 4,
    selecao: 'Sérvia',
    grupo: 'G',
  },
];

// retorna objeto por id
const buscarSelecaoPorId = (id) => {
  return selecoes.filter((selecao) => selecao.id === Number(id));
};

// pegar posição ou index do elemento no arraay por id
const buscarIdSelecao = (id) => {
  return selecoes.findIndex((selecao) => selecao.id === Number(id));
};

// criar rota padrão ou raiz
app.get('/', (req, res) => {
  res.send('Curso de NodeJS');
});

app.get('/selecoes', (req, res) => {
  res.status(200).send(selecoes);
});

app.get('/selecoes/:id', (req, res) => {
  console.log(req.params.id);
  res.json(buscarSelecaoPorId(req.params.id));
});

app.post('/selecoes', (req, res) => {
  selecoes.push(req.body);
  res.status(201).send('seleção cadastrada com sucesso !');
});

app.put('/selecao/:id', (req, resp) => {
  const index = buscarIdSelecao(req.params.id);
  selecoes[index].selecao = req.body.selecao;
  selecoes[index].grupo = req.body.grupo;
  resp.json(selecoes);
});

app.delete('/selecao/:id', (req, resp) => {
  const index = buscarIdSelecao(req.params.id);
  selecoes.splice(index, 1);
  resp.send('Selecao Exluida com sucesso');
});
