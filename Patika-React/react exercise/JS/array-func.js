/*
push: dizinin sonuna eleman ekler.
map: dizi elemanlarını döner, for döngüsünden daha pratiktir.
find: istediğimiz koşula uyan birden fazla eleman olsada, filter sadece koşula uyan ilk elemanı getirir.
filter: istediğimiz koşullara uyan tüm elemanları getirir.
some: true/false sonuç döner
every: TÜM ELEMANLAR verdiğimiz koşula uyuyorsa true değilse false döner.
includes: girmiş olduğumuz ifade array içerisinde varsa true yoksa false döner.
*/
const users = ["Ted", "Lily", "Marshell"];

users.push("Barney");
users.push("Robin");
// console.log(users);

//burada item yerine istediğimiz ismi verebiliriz.
console.log("Map ile array kullanımı:");
users.map( (item) => {
    console.log(item)
});

//array içerisine obje koymak:
const fruits = [
    {name: "Apple",
     number: 8
    },
    {name: "pineapple",
     number: 10
    },
    {name: "pineapple",
    number: 3
    },
    {name: "mango",
     number: 15
    },
    {name: "pineapple",
    number: 10
    },
    {name: "star fruit",
     number: 23
    }
];

console.log("____");
console.log("Map ile array içerisindeki objeleri yazdırmak:");

fruits.map( (fruit) => {
    console.log(fruit);
});

console.log("____");
console.log("Map ile verdiğimiz koşullara uygun olan elemanı bulmak:");
const result = fruits.map( (fruit) => fruit.name === "pineapple" && fruit.number === 10);
console.log(result);
// Çıktı: [ false, true, false, false, true, false ]

console.log("____");
console.log("Find ile verdiğimiz koşullara uygun olan elemanı bulmak:");
const result2 = fruits.find( (fruit) => fruit.name === "pineapple" && fruit.number === 10);
console.log(result2);
// Çıktı: { name: 'pineapple', number: 10 }

console.log("____");
console.log("Filter ile adı pineapple olanları bulmak:");
const filtered = fruits.filter( (fruit) => fruit.name === "pineapple");
console.log(filtered);

console.log("____");
console.log("Filter ile sayısı 10 a eşit ve büyük olanları bulmak:");
const filtered2 = fruits.filter( (fruit) => fruit.number >= 10);
console.log(filtered2);

console.log("____");
console.log("Filter ile istediğimiz elemanı bulmak:")
const filtered3 = fruits.filter( ({name, number}) => name === "star fruit" && number === 23);
console.log(filtered3);

console.log("____");
console.log("Some ile aradığımız koşula uyan eleman var mı:")
const someResult = fruits.some( (fruit) => fruit.number === 10);
console.log(someResult);

console.log("____");
console.log("Every / Tüm elemanlar verdiğimiz koşula uyuyor mu?:")
const everyResult = fruits.every( (fruit) => fruit.number > 5);
console.log(everyResult);

console.log("____");
console.log("İncludes / verdiğimiz ifade array içerisinde yer alıyor mu?");
const isIncludes = users.includes("Ted");
console.log(isIncludes);