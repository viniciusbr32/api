import { app } from './src/app.js';

const PORT = 3000;

// escutar a porta 3000
app.listen(PORT, () => {
  console.log(` servidor rodando na porta ${PORT}`);
});