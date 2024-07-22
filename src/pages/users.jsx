import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Header } from '../components/header';
import { users as initialUsers } from '../data/users'; // Importe seus dados de usuários
import { Footer } from './footer';

export const Users = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [users, setUsers] = useState(initialUsers); // Estado para armazenar os usuários
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || ''); // Estado para armazenar o termo de pesquisa
  const [hoveredUser, setHoveredUser] = useState(null); // Estado para controlar o usuário com hover

  function getFilteredUsers() {
    return users.filter((user) =>
      user.linkLabel.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  function addUser(newUser) {
    setUsers([...users, newUser]);
  }

  function handleDeleteUser(index) {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  }

  function handleSearchInputChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleAddUserSubmit(event) {
    event.preventDefault();

    const newUser = {
      linkLabel: event.target.linkLabel.value,
      email: event.target.email.value,
      descricao: event.target.descricao.value,
      fotoUrl: event.target.fotoUrl.value // Adicione o campo fotoUrl ao novo usuário
    };

    addUser(newUser);

    // Limpar campos do formulário (opcional)
    event.target.linkLabel.value = '';
    event.target.email.value = '';
    event.target.descricao.value = '';
    event.target.fotoUrl.value = ''; // Limpar o campo da URL da foto após adicionar
  }

  return (
    <>
      <Header />
      <main className="p-6 flex">
        <div className="w-3/4 pr-4">
          <h1 className="text-2xl font-bold mb-6">Lista de estudantes</h1>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Pesquisar estudante..."
              value={searchTerm}
              onChange={handleSearchInputChange}
              className="border border-gray-300 px-3 py-2 w-full"
            />
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300" style={{ backgroundColor: '#a4ac86' }}>
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Nome</th>
                  <th className="border border-gray-300 px-4 py-2">Ações</th>
                </tr>
              </thead>
              <tbody>
                {getFilteredUsers().map((user, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="border border-gray-300 px-4 py-2 flex items-center">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img
                          className="w-full h-full rounded-full object-cover"
                          src={user.fotoUrl}
                          alt={`Foto de ${user.linkLabel}`}
                        />
                      </div>
                      <div className="ml-3">
                        <p className="font-bold">
                          <Link
                            to={`/users/${encodeURIComponent(user.linkLabel.toLowerCase())}`}
                            className={`text-blue-500 hover:underline ${hoveredUser === user ? 'text-yellow-500' : ''}`}
                            onMouseEnter={() => setHoveredUser(user)}
                            onMouseLeave={() => setHoveredUser(null)}
                          >
                            {user.linkLabel}
                          </Link>
                        </p>
                        <p className="text-gray-600">{user.email}</p>
                        <p>{user.descricao}</p>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-4 py-2 flex items-center">
                      <button
                        className="bg-black text-white px-3 py-1 rounded mr-2"
                        onClick={() => handleDeleteUser(index)}
                      >
                        Eliminar
                      </button>
                      {/* Outras ações podem ser adicionadas aqui */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-1/4">
          <div className="bg-slate-500 border border-gray-300 p-3">
            <h2 className="text-lg font-bold mb-2">Adicionar Novo Estudante</h2>
            <form onSubmit={handleAddUserSubmit} className="flex flex-col">
              <input
                type="text"
                name="linkLabel"
                placeholder="Nome do Estudante"
                className="border border-gray-300 px-3 py-2 mb-2"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border border-gray-300 px-3 py-2 mb-2"
                required
              />
              <textarea
                name="descricao"
                placeholder="Descrição"
                className="border border-gray-300 px-3 py-2 mb-2"
                rows="2"
                required
              ></textarea>
             
              <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">
                Adicionar Estudante
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
