import { useState } from "react";

function App() {
  // state oluşturmak:
  // verdiğimiz isim, fonksiyonumuzun adı
  // const [name, getName/setName] = useState('state varsayılan değer ataması');
  const [name, setName] = useState('Zeynep');
  const [age, setAge] = useState(21);
  const [friends, setFriends] = useState(["Aundrey", "Ruth"]);

  console.log(name, age)  
// herhangi bir state günellendiği anda buradaki render baştan yapılır:
  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Melanie")}>Change Name</button>
      <button onClick={() => setAge(29)}>Change Age</button>
      <hr/>

      <h2>Friends</h2>
      {
        //eğer bir listeleme işlemi yapıyorsak en dıştaki elemente key değeri vermeliyiz.
        friends.map((friend, index) => (
        <div key={index}>{friend}</div>
        ))
      }
      <button onClick={() => setFriends([...friends, "Tom"])}>add new friend</button>
    </div>
  );
}

export default App;
