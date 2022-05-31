//axios kütüphanesi sayesinde veriyi çekerken fetchde olduğu gibi json a pars etmemiz gerekmez.
import axios from "axios";

// anonim fonksiyon ile async-await kullanımı:
(async () => {
    //bize bir obje döner onun altındada data vardır. Her seferinde aynı isimi kullnamayız bu yüzden yeniden isimlendirerek kullanmamız gerekir.
    const {data: users} = await axios("https://jsonplaceholder.typicode.com/users");
    console.log("users: ", users);

    const {data: post1} = await axios("https://jsonplaceholder.typicode.com/posts/1");
    console.log("post1: ", post1);

    const {data: post2} = await axios("https://jsonplaceholder.typicode.com/posts/2");
    console.log("post2: ", post2);
})();
