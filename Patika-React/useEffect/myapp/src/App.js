import {useState, useEffect} from "react";

// bu statenin güncellenmesi halini yakalamak istiyoruz

function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
    </div>
  );
}

export default App;
