//veriyi alıp gösterir:
import fetch from "node-fetch";

//async-await sayesinde verileri istediğimiz sıra ile çekebiliriz
async function getData() {
    const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    console.log("users: ", users);

    const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
    console.log("post1: ", post1);

    const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();
    console.log("post2: ", post2);
}

getData();

// anonim fonksiyon ile async-await kullanımı:
(async () => {
    const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    console.log("users: ", users);

    const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
    console.log("post1: ", post1);

    const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();
    console.log("post2: ", post2);
})();
