import React from 'react';
import { useParams } from 'react-router-dom';
import { users } from '../data/users'; // Importe os dados de usuários
import { Header } from '../components/header';

export const UserDetails = () => {
  const { username } = useParams(); // Obtenha o parâmetro de URL para identificar o usuário

  // Encontre o usuário com base no linkLabel que corresponde ao username na URL
  const user = users.find(user => user.linkLabel.toLowerCase() === username.toLowerCase());

  if (!user) {
    return (
      <>
        <Header />
        <main className="p-6">
          <p className="text-red-600 text-xl font-bold">Usuário não encontrado</p>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">{user.linkLabel}</h1>
        <p className="mb-2"><span className="font-bold">Email:</span> {user.email} Shymuzy@gmail.com</p>
        <p className="mb-2"><span className="font-bold">Idade:</span> {user.idade}25</p>
        <p className="mb-2"><span className="font-bold">Moradia:</span> {user.moradia}XIPAMANINE</p>
        <p className="mb-2"><span className="font-bold">Biografia:</span> {user.descricao}Elisa Lisete James Humbane, popularmente conhecida como Lizha James (Maputo, Moçambique em 12 de dezembro, 1982), é uma musicista moçambicana. Nascida na capital de Moçambique, Maputo seu estilo de música inclui uma mistura de ritmos como Marrabenta, Ragga, R&B e Hip hop. Ela também é notória pelo estilo de Moçambique</p>
      </main>
    </>
  );
};

export default UserDetails;
