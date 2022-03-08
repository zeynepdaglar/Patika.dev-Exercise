// const getComments = () => {
//     //resolve: işlem gerçekleşti der ve datayı verir.
//     //reject: kodlar çalışırken bir sorun oluştu ve reddetti.
//     return new Promise((resolve, reject) => {
//         console.log("comment")
//         reject();
//     });
// };
// getComments().then( (data) => console.log("işlem başarı ile gerçekleşti")).catch( (error) => console.log(error))

import axios from "axios";


// const getComments = () => {
//     //resolve: işlem gerçekleşti der ve datayı verir.
//     //reject: kodlar çalışırken bir sorun oluştu ve reddetti.
//     return new Promise((resolve, reject) => {
//         //resolve kısmına veriğimiz parametre then kısmına düşer, number, onje vs. kullanabiliriz.
//         resolve("comment");
//     });
// };
// //resolve olduğunda(işlemler gerçekleştiğinde) then kısmına düşer.
// //reject(başarısız) olduğunda catch kısmına düşer, hatayı yakalayıp yazdırabiliriz.
// getComments().then( (data) => console.log("işlem başarı ile gerçekleşti gelen parametre: ", data)).catch( (error) => console.log(error))

// const getComments = (number) => {
//     return new Promise( (resolve, reject) => {
//         if (number === 1) {
//             resolve({text: "sayı 1 e eşittir."});
//         }
//         else{
//             reject("bir sorun oluştu");
//         }
//     });
// };
// getComments(1).then( (data) => console.log(data))
// .catch( (e) => console.log(e));

const getUsers = () => {
    return new Promise(async (resolve, reject) => {
      const {data} = await axios("https://jsonplaceholder.typicode.com/users");
      resolve(data);
    });
};

//verilen id ye göre postları getirmek:
const getPosts = (post_id) => {
    return new Promise(async (resolve, reject) => {
        const {data} = await axios(
            "https://jsonplaceholder.typicode.com/posts/" + post_id
        );
        resolve(data);
    });
};

//verileri console üzerine istediğimiz sıra ile yazması için async bir fonksiyon oluşturduk.
(async () => {
    await getUsers()
    .then( (data) => console.log("User: ", data))
    .catch( (error) => console.log(error));

    await getPosts(1)
    .then( (data) => console.log("Post: ", data))
    .catch( (error) => console.log(error));
})();