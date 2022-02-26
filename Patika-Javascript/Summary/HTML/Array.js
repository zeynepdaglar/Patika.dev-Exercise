let DOMAIN = "kodluyoruz";
let isActive = false;
//Biz dizi içerisinde farklı türden veriler olabilir
//Bir dizi içerisine tanımlanmış bir değişkeni koyabiliriz
let items = [11, 22, 32, isActive, DOMAIN]

//boş array oluşturmak
//mesela formda girilen verileri tutmak vs gibi alanlarda ihtiyacımız olabilir
let emptyArr = []

console.log(`Dizimizin elemanları: ${items}`)

//array içindeki eleman sayısını öğremek
console.log(`Dizimizin uzunluğu: ${items.length}`)

//dizinin elemanlarını html sayfasında göstermek 
document.querySelector('#arrİnfo').innerHTML = items.length

//dizinin elemanlarına ulaşmak
console.log(`Dizimizin ilk elemanı: ${items[0]}`)
console.log(`Dizimizin ikinci elemanı: ${items[1]}`)
//diziyi saymaya 0 dan başlıyoruz 
console.log(`Dizimizin son elemanı: ${items[items.length-1]}`)
//ortadaki elemanı bulmak
//2 ye tam bölünmeyen sayılarda olabiliceği için yuvarlayarak
let center = Math.floor(items.length / 2)
console.log(`Dizimizin tam ortasındaki eleman: ${items[center]}`)

//array olup olmadıgını kontrol etmek
let sonuc = Array.isArray(items)
console.log(`Bu bir Array mi ? ${sonuc}`)

//isArray hengi durumlarda true/false verir?
console.log(Array.isArray( [] )) //true
console.log(Array.isArray( 1 )) //false
console.log(Array.isArray( true )) //false