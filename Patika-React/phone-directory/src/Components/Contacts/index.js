import {useState, useEffect} from 'react'
import './style.css'
import List from './List' //burada ayrıca dosyayı belirtmemize gerek yok list klasörünün altındakini doğrudan alır.
import Form from './Form'

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: 'Melanie',
      phone_number: 5009002091
    },
    {
      fullname: 'Tom',
      phone_number: 5009002092
    },    
    {
      fullname: 'Ted Mosby',
      phone_number: 5009002093
    },    
    {
      fullname: 'Lily',
      phone_number: 500900209
    },
  ]);
  useEffect( ()=>{
      console.log(contacts)
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts}/>
      <Form  addContact ={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts