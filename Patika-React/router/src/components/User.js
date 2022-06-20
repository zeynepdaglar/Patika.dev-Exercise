import axios from 'axios';
import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function User() {
    const [user, setUser] =useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect( () =>{
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => setUser(res.data))
        .finally(() => setLoading(false));
    }, []);
  return (
      <div>
          <h4>User Detail</h4>
          {loading && <div>Loading...</div>}
          {/* <code>{JSON.stringify(user)}</code> */}
          {/* loading yoksa bunların tamamını göstericek bunu yapmazsak yüklenme sırasında id: name: vb. gibi gösteriyor */}
          {!loading &&
            <ul key={user.id}>
               <li>id: {user.id}</li>
               <li>name: {user.name}</li>
               <li>username: {user.username}</li>
               <li>email: {user.email}</li>
            </ul>
          }
      </div>
      
  )
}

export default User