import {useParams} from 'react-router-dom'

import React from 'react'

function User() {

  const { id } = useParams();

  return (
    <div>
        <h4>User Details</h4>
        id: {id}
    </div>
  )
}

export default User