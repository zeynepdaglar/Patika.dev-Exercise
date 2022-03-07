//settimeout: vericeğimiz süre tamamlandığında bir kere çalışır, milisaniye cinsinden değer veririz
// setTimeout( () => {
//     console.log("merhaba");
// }, 5000);

//verilen zaman aralığında sürekli çalışır, durmaz
// setInterval(() => {
//     console.log("merhaba ben her saniye çalışacağım");
// }, 1000);

//parametre olrak fonksiyon vermek:
const sayHello = (cb) => {
    cb();
};
//normalde fonksiyonumuzu sadece çağırsaydık sayHello(); yazıcaktık ama parametre olarak fonksiyon yazdık
sayHello(() => {
    console.log("helloooo :)))");
});

// veri kaynağına bağlanıp veri çekmek:
// veriyi alıp bize gösterir, bunu kullanabilmek için node-fetch yapısını install etmek gerekir
import fetch from "node-fetch";

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) => data.json()) //veriyi json a pars edip döner
// .then((users) => console.log(users)); //veriyi yazdırır


fetch("https://jsonplaceholder.typicode.com/users")
.then((data) => data.json()) //veriyi json a pars edip döner, sonra veriler usersa düşer.
.then( (users) => {
    //yukarıdaki çekme işlemi tamamlandıktan sonra:
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (data) => data.json())
    .then( (posts) => console.log(posts));
});
