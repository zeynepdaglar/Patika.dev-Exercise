import './App.css';
import {useState, useEffect} from 'react'

function App() {
const [users, setUsers] = useState([]);
const [isLoading, setLoading] = useState(true);

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => setUsers(data))
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))
  }, []);

  return (
    <div className="App">
     <h1>Users</h1>

     { isLoading&& <div>Loading...</div> }
     
     {
       users.map((user) =>(
        <div key={user.id}>{user.name}</div>
       ))
     }
    </div>
  );
}

export default App;
