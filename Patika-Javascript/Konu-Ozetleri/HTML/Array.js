let DOMAIN = "kodluyoruz";
let isActive = false;
//Biz dizi içerisinde farklı türden veriler olabilir
//Bir dizi içerisine tanımlanmış bir değişkeni koyabiliriz
let items = [1, 2, 3, isActive, DOMAIN]

//boş array oluşturmak
//mesela formda girilen verileri tutmak vs gibi alanlarda ihtiyacımız olabilir
let emptyArr = []

console.log(`Dizimizin elemanları: ${items}`);

//array içindeki eleman sayısını öğremek
console.log(`Dizimizin uzunluğu: ${items.length}`);

//dizinin elemanlarını html sayfasında göstermek 
document.querySelector('#arrİnfo').innerHTML = items.length