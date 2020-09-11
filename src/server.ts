import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

// tipos de parâmetros:
// Corpo (request body): dados para criação ou atualização de registro (formulários) => /users/:id
// Route Params: identificar qual recurso acessar, atualizar ou apagar => request.params
// Query Params: query strings (exemplo de uso: paginação, filtros, ordenação, etc) => request.query

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);