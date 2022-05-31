import { useState } from "react";
import Counter from "./components/counter";
function App() {
 
  const [isVisiable ,setIsVisiable] = useState(true);

  return (
  <div>
      {isVisiable && <Counter />} 
      <br/>
      <button onClick={() => setIsVisiable(!isVisiable)}>Toggle</button>
  </div>
  );
}

export default App;
