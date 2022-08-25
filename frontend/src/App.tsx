import { gql, useQuery } from '@apollo/client'
import './App.css';

type Users = {
  id: string;
  name: string;
}

const GET_USERS = gql`
  query {
    users {
      id
      name
    }
  }
`;

function App() {
  const { data, loading } = useQuery<{ users: Users[] }>(GET_USERS);

  if(loading) {
    return (
      <div className="App">
        <p>Carregando...</p>
      </div>
    )
  }

  return (
    <div className="App">
     { data?.users.length ? data?.users.map((user) => (
      <li key={user.id}>{user.name}</li>
     )) : <p>Nenhum usuário encontrado</p> }
    </div>
  )
}

export default App
