//projeye axios u dahil ediyoruz
import axios from "axios";

//default olarak dışa aktarılan bir async fonksiyon:
export default async function getData(number) {
    //gelen parametreye göre verileri çeker
    const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/" + number);
    console.log("User: ", user);

    const {data: post} = await axios("https://jsonplaceholder.typicode.com/posts/" + number);
    console.log("post: ", post);
};

