import axios from 'axios';
import { useState, useEffect } from 'react';

function Games() {
  const [Games, setGames] = useState([]);
  const [novaGame, setNovaGame] = useState({ modelo: '', imagem: '', descricao: '', preco: '' });
  const [editandoGame, setEditandoGame] = useState(null);

  const buscarGames = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/Games');
      setGames(response.data);
    } catch (error) {
      console.error('Erro ao buscar Games:', error);
    }
  };

  const adicionarGame = async () => {
    try {
      await axios.post('http://localhost:3000/api/Games', novaGame);
      setNovaGame({ modelo: '', imagem: '', descricao: '', preco: '' });
      buscarGames();
    } catch (error) {
      console.error('Erro ao adicionar Game:', error);
    }
  };

  const atualizarGame = async () => {
    if (!editandoGame || !editandoGame.id) return;
    try {
      await axios.put(`http://localhost:3000/api/Games/${editandoGame.id}`, editandoGame);
      setEditandoGame(null);
      buscarGames();
    } catch (error) {
      console.error('Erro ao atualizar Game:', error);
    }
  };

  const deletarGame = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/Games/${id}`);
      buscarGames();
    } catch (error) {
      console.error('Erro ao deletar Game:', error);
    }
  };

  useEffect(() => {
    buscarGames();
  }, []);

  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl text-green-500 font-extrabold text-center text-primary mb-12">Explore o nosso Catalogo de Jogos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Games.map((Game) => (
          <div key={Game.id} className="bg-gray-900 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition">
            <img src={Game.imagem} alt={Game.modelo} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-500">{Game.modelo}</h3>
              <p className="mt-2 text-white">{Game.descricao}</p>
              <p className="mt-3 text-lg text-green-500 font-bold text-primary">R${Game.preco}</p>
              <div className="mt-4 flex space-x-3">
                <button
                  onClick={() => deletarGame(Game.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 hover:scale-105 transition"
                >
                  Deletar
                </button>
                <button
                  onClick={() => setEditandoGame(Game)}
                  className="text-white px-4 py-2 rounded-lg hover:scale-105 hover:bg-amber-500 transition"
                >
                  Editar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-lg mx-auto mt-16 bg-gray-900 shadow-lg rounded-lg p-8">
        <h3 className="text-2xl text-green-500 font-bold text-primary mb-6 justify-self-center">
          {editandoGame ? 'Editar Game' : 'Adicionar Game'}
        </h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Modelo"
            className="w-full p  p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={editandoGame ? editandoGame.modelo : novaGame.modelo}
            onChange={(e) =>
              editandoGame
                ? setEditandoGame({ ...editandoGame, modelo: e.target.value })
                : setNovaGame({ ...novaGame, modelo: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="URL da Imagem"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={editandoGame ? editandoGame.imagem : novaGame.imagem}
            onChange={(e) =>
              editandoGame
                ? setEditandoGame({ ...editandoGame, imagem: e.target.value })
                : setNovaGame({ ...novaGame, imagem: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Descrição"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={editandoGame ? editandoGame.descricao : novaGame.descricao}
            onChange={(e) =>
              editandoGame
                ? setEditandoGame({ ...editandoGame, descricao: e.target.value })
                : setNovaGame({ ...novaGame, descricao: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Preço"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={editandoGame ? editandoGame.preco : novaGame.preco}
            onChange={(e) =>
              editandoGame
                ? setEditandoGame({ ...editandoGame, preco: e.target.value })
                : setNovaGame({ ...novaGame, preco: e.target.value })
            }
          />
          <button
            onClick={editandoGame ? atualizarGame : adicionarGame}
            className="w-full bg-primary text-green-500 px-6 py-3 rounded-lg hover:bg-green-500 hover:scale-105 hover:text-black transition hover:font-semibold"
          >
            {editandoGame ? 'Atualizar' : 'Adicionar'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Games;