// Obje
// Objeler, içerisinde birden fazla değeri depolayan yapılardır.
// Property olarak bilinen bu değerler primitive(String,number, boolean vb.) veya başka objeler olabilirler ve her bir değer string veya sembol 
// ile isimlendirilebilir.

//aynı değerlere sahip 2 primitive veri tipi
let mesaj = "merhaba";
let başkaBirMesaj = "merhaba";
console.log(mesaj == başkaBirMesaj);       //true

//aynı değerlere, farklı memory adresslere sahip 2 obje
let obje = {
 mesaj:"merhaba"
}
let başkaBirObje = {
 mesaj:"merhaba"
}
console.log(obje == başkaBirObje);         //false
// . Fakat “obje” ve “başkaBirObje” isimli objeler de bire bir aynı değerleri barındırmalarına rağmen eşit kabul edilmiyorlar.
//  Çünkü bu iki obje, arka planda göremediğimiz iki ayrı hafıza adresiyle tanınıyorlar, bu yüzden içerikleri aynı olsa da farklı kabul ediliyorlar.

let arrObj = [1, 2, 3];
let object = {obj: 1};

console.log(`object: ${object}`);
console.log(`array: ${arrObj}`);

let item1 = new Object();
let item2 = {};
console.log(`item1: ${item1}`);
console.log(`item2: ${item2}`);

