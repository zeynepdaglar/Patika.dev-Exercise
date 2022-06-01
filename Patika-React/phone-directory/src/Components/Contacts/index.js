import React from 'react'
import List from './List' //burada ayrıca dosyayı belirtmemize gerek yok list klasörünün altındakini doğrudan alır.
import Form from './Form'

function Contacts() {
  return (
    <div>
      <List />
      <Form />
    </div>
  )
}

export default Contacts