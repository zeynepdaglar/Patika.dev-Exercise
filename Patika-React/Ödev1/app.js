// Bu fonksiyon **"async"** olarak tanımlanmalı ve default olarak dışa aktarılmalıdır.
// Fonksiyon **Number** tipinde tek parametre alır. Bu parametre **user id**'yi belirtir.
// Fonksiyonun görevi endpoint'e giderek parametrede verilen user id ile ilgili kullanıcının verilerini çekmek olmalı. İstekleri **"axios"** kütüphanesini kullanarak yapmanız gerekiyor.
import axios from "axios";

async function getData(number) {
    const user = await (await fetch("https://jsonplaceholder.typicode.com/users/" + number)).json();
    console.log("user: ", user);

    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/" + number)).json();
    console.log("post: ", post);
}