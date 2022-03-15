// varsayılan bir component oluşturmak:
import "./App.css";
// headerı kullanabilmek için buraya import etmemiz gerek
import Header from "./components/Header";

function App() {
  return (

     /*Header.js kısmında bir component oluşturduk bunu kullanmak için:
      *<Header> </Header> bu şekilde etiket açıp arasına istediklerimizi yazabiliriz.
      *Headerın içerisine bir şey yazmayacaksak şu şekilde kullanırız:  */
     <div>
       <Header />
       <h1>Helo React</h1>

        {/*Name yazısına tıklandığında inputa focus olur */}
       <label htmlFor="myinput">
          Name 
          <input id="myinput"  />
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
//  return React.createElement("div", null, "Hello"); -> <div>Hello</div> 
// }
// çok doğru bir yöntem değil çünki div içerisinde daha fazla element oluşturmak istediğimizde karmaşıklaşır
// bu sorunu çözmek için JSX vardır html yazar gibi jsx yazabiliyoruz

// *Ve bir komponenti kullanırken onu kapsayan bir etiket olması gerekir div gibi yoksa syntax hatası alırız
// *yada div kullanmak yerine <> ve </> arasına yazabiliriz.
// *bir başka seçenekte <React.Fragment> </React.Fragment> arasına yazmaktır.

// bir html etiketine class verirken jsx te className olarak veririz
//class js için başka bir anlam ifade eder ve karışmaması için böyle vermemiz gerekli

// html için for yazarken jsx de htmlFor kullanırız