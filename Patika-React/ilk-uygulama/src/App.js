// oluşturduğumuz componentleri buraya eklememiz gerekli
// varsayılan bir component oluşturmak:
import "./App.css";
import React from "react";
import {User, User2, User3} from "./components/User";
// headerı kullanabilmek için buraya import etmemiz gerek
import Header from "./components/Header";

const robinFriends = ["ted", "barney", "lily", "marshell"];

const barneyFriends = [
  {
    id:1,
    name:"Lily"
  },
  {
    id:2,
    name:"Marshell"
  },
  {
    id:3,
    name:"Ted"
  },
  {
    id:4,
    name:"Robin"
  }
]

function App() {
  return (

     /*Header.js kısmında bir component oluşturduk bunu kullanmak için:
      *<Header> </Header> bu şekilde etiket açıp arasına istediklerimizi yazabiliriz.
      *Headerın içerisine bir şey yazmayacaksak şu şekilde kullanırız: <header /> */
     <div>
       <User 
       name="Robin" 
       surname="Scherbatsky" 
       age={25} 
       isLoggedIn={true} 
       friends={robinFriends}/>

       <User2 
       name="Ted" 
       surname="Mosby" 
       age={30} 
       isLoggedIn={true} 
       friends={['Barney', 'Marshell', 'Robin', 'Lily']}/>

       <User3 
       name="Barney" 
       friends={barneyFriends}/>
       
       <Header />
       <label htmlFor="myinput">
          Name 
          <input id="myinput"/>
       </label>
     </div>
  );
}
// dışa aktarmak:
export default App;

// Burada gördüğümüz etiketler aslında html değil jsx
// örneğin burada bir div oluşturmak istediğimizde şu şekildede yapabiliriz
// öncelikle projemize reactı import(eklemek) ederiz:
// import React from "react";
// function() {
//  return React.createElement("div", null, "Hello"); ---> <div>Hello</div> 
// }
// çok doğru bir yöntem değil çünki div içerisinde daha fazla element oluşturmak istediğimizde karmaşıklaşır
// bu sorunu çözmek için JSX vardır html yazar gibi jsx yazabiliyoruz

// *Ve bir componenti kullanırken onu kapsayan bir etiket olması gerekir div gibi yoksa syntax hatası alırız
// *yada div kullanmak yerine <> ve </> arasına yazabiliriz.
// *bir başka seçenekte <React.Fragment> </React.Fragment> arasına yazmaktır.

// bir html etiketine class verirken jsx te className olarak veririz
//class js için başka bir anlam ifade eder ve karışmaması için böyle vermemiz gerekli

// html için for yazarken jsx de htmlFor kullanırız