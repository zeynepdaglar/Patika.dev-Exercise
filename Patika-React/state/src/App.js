import { useState } from "react";

function App() {
  // state oluşturmak:
  // verdiğimiz isim, fonksiyonumuzun adı
  // const [name, getName/setName] = useState('state varsayılan değer ataması');
  const [name, setName] = useState('Zeynep');
  const [age, setAge] = useState(21);
  const [friends, setFriends] = useState(["Aundrey", "Ruth"]);
  const [adress, setAdress] = useState({title: "istanbul", zip: 343534});

  console.log(name, age)  
// herhangi bir state günellendiği anda buradaki render baştan yapılır:
  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Melanie")}>Change Name</button>
      <button onClick={() => setAge(29)}>Change Age</button>
      <br />

      <h2>Friends</h2>
      {
        //eğer bir listeleme işlemi yapıyorsak en dıştaki elemente key değeri vermeliyiz.
        friends.map((friend, index) => (
        <div key={index}>{friend}</div>
        ))
      }
      <button onClick={() => setFriends([...friends, "Tom"])}>add new friend</button>
      {/* <button onClick={() => setFriends([ "Tom", ...friends])}>add new friend</button> */}
      <br />


      <h2>Adress</h2>
      <div>
        {adress.title} {adress.zip}
      </div>
      {/* önceki verileri olduğu gibi getirir, yanına eklediğimiz fieldları alır ve önceki verilerden değiştirir. */}
      <button onClick={() => setAdress({...adress, title: "snowpiecer"})}>change the adress</button>
      <br />

    </div>
  );
}

export default App;
