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
//ikisinide ayrı ayrı yaparsak düzensiz bir şekilde yüklenebilir, bazen post önce yüklenirken bazende user önce yüklenebilir 
//bu yüzden onları bizim sıraya koymamız gerekir
//ama çok fazla veri çekmek istediğimizde bu durum karmaşıklaşabilir
fetch("https://jsonplaceholder.typicode.com/users")
.then((data) => data.json()) //veriyi json a pars edip döner, sonra veriler usersa düşer.
.then( (users) => {
    console.log("users yüklendi ", users);
    //yukarıdaki çekme işlemi tamamlandıktan sonra:
    
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then( (data) => data.json())
    .then( (post) => {
        console.log("post 1 yüklendi ",post)
        fetch("https://jsonplaceholder.typicode.com/posts/2")
        .then( (data) => data.json())
        .then( (post) => console.log("post 2 yüklendi ", post))
    });
});


