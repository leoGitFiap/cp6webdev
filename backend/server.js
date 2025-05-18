const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const porta = 3000;

// Middleware para processar JSON e habilitar CORS
app.use(bodyParser.json());
app.use(cors());

// Array em memória para armazenar games (substituir por banco de dados em produção)
let games = [
  {
    id: uuidv4(),
    modelo: 'Death Stranding',
    imagem: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1850570/header.jpg?t=1728989088',
    descricao: 'Reconecte um mundo destruido por uma extinção em massa, antes que os terroristas o terminem o serviço!',
    preco: '159,00',
  },
  {
    id: uuidv4(),
    modelo: 'Metal Gear & Metal Gear 2: Solid Snake',
    imagem: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2131680/header.jpg?t=1724876235',
    descricao: 'Destrua as gigantescas armas Metal Gear e salve o mundo de uma guerra nuclear!',
    preco: '30,00',
  },
  {
    id: uuidv4(),
    modelo: 'Doom (2016)',
    imagem: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/379720/header.jpg?t=1692892793',
    descricao: 'Destrua demônios infernais com uma gameplay visceral e muito Rock n roll!',
    preco: '61,50'
  }
];

// GET: Obter todas as games
app.get('/api/games', (req, res) => {
  res.json(games);
});

// POST: Adicionar um novo game
app.post('/api/games', (req, res) => {
  const novaGame = {
    id: uuidv4(),
    modelo: req.body.modelo,
    imagem: req.body.imagem,
    descricao: req.body.descricao,
    preco: req.body.preco,
  };
  games.push(novaGame);
  res.status(201).json(novaGame);
});

// PUT: Atualizar uma Game existente
app.put('/api/games/:id', (req, res) => {
  const id = req.params.id;
  const index = games.findIndex(b => b.id === id);
  if (index === -1) {
    return res.status(404).json({ erro: 'Game não encontrada' });
  }
  games[index] = {
    id,
    modelo: req.body.modelo,
    imagem: req.body.imagem,
    descricao: req.body.descricao,
    preco: req.body.preco,
  };
  res.json(games[index]);
});

// DELETE: Remover um Game
app.delete('/api/games/:id', (req, res) => {
  const id = req.params.id;
  const index = games.findIndex(b => b.id === id);
  if (index === -1) {
    return res.status(404).json({ erro: 'Game não encontrada' });
  }
  games = games.filter(b => b.id !== id);
  res.status(204).send();
});

// Iniciar o servidor
app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});