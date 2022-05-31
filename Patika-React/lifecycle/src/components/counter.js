import React from 'react'
import {useState, useEffect} from "react";
// useState ve useEffect birer hook tur. useEffect ile yaşam döngümüzdeki evetleri yakalayabiliriz 

function Counter() {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState("Zeynep");
  
    //herhangi bir state güncellendiğinde çalışır
    useEffect( () => {
      console.log("state güncellendi");
    });
  
    useEffect( () => {
      console.log("number state güncellendi");
    }, [number]);
  
    useEffect( () => {
      console.log("component mount edildi");

      const interval = setInterval(() => {
          setNumber((n) => n++);
      }, 1000); //her saniye

      return () => clearInterval(interval);
    }, []); 
    // dependency array [] bunun anlamı ise component mount(render) edildiğinde yakala demek
    // ve takip etmek istediğimiz belirli bir veya birden fazla state varsa:  [name, number]
  

  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={() => setNumber(number+1)}>+</button>

      <br />
      <h1>{name}</h1>
      <button onClick={() => setName("Melanie")}>Change</button>
    </div>
  )
}

export default Counter;