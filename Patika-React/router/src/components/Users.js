import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, Switch, Route, useRouteMatch} from 'react-router-dom'
import User from './User'

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const { path, url } = useRouteMatch();

    useEffect( ()=>{
        axios('https://jsonplaceholder.typicode.com/users')
        .then(res => setUsers(res.data))
        .finally( () => setLoading(false));
    }, [])

  return (
    <div>
     <h4>Users</h4>
     {loading && <div>Loading...</div>}
     <ul>
        {
            users.map( (user) => (
               <li key={user.id}>
                   <Link to={`${url}/${user.id}`}>{user.name}</Link>
               </li> 
            ))
        }
     </ul>
       <Switch>
            <Route exact path={path}>
                 <h3>Please select a user.</h3>
            </Route>
            <Route path={`${path}/:id`} component={User} />
        </Switch>
    </div>
  )
}

export default Users