import {useState} from 'react'

function List({contacts}) {
  const[filterText, setFilterText] = useState('');

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key] //item.fullname
      .toString()
      .toLowerCase()
      .includes(filterText.toLocaleLowerCase())
    );
  });
console.log("filtered", filtered);
  return (
    <div>
        <input 
        placeholder="Filter Contacts"
        value={filterText}
        onChange={(event) => setFilterText(event.target.value)}
        />
      <ul className="list">
        {
          filtered.map((contact, i) =>(
            <li key={i}>
                <span>{contact.fullname}</span>
                <span>{contact.phone_number}</span>
            </li>
        ))}
      </ul>
      <p>Total Contacts ({filtered.length})</p>
    </div>
  )
}

export default List