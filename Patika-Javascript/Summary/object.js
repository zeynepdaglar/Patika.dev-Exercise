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
};
let başkaBirObje = {
 mesaj:"merhaba"
}
console.log(obje == başkaBirObje);         //false
// . Fakat “obje” ve “başkaBirObje” isimli objeler de bire bir aynı değerleri barındırmalarına rağmen eşit kabul edilmiyorlar.
//  Çünkü bu iki obje, arka planda göremediğimiz iki ayrı hafıza adresiyle tanınıyorlar, bu yüzden içerikleri aynı olsa da farklı kabul ediliyorlar.

// JavaScript’te obje oluşturmanın en kolay yolu olarak bilinir. Süslü parantez {} kullanılarak oluşturulan objenin içerdiği property'lerin 
// değerleri iki nokta : işaretiyle belirtilir. Property'ler birbirlerinden virgül , ile ayrılır

let countriesTalkSpanish = {
continent: "south america",
language: "spanish"
};

let arrObj = [1, 2, 3];
let object = {obj: 1};

console.log(`object: ${object}`);
console.log(`array: ${arrObj}`);

let countriesTalkFrench = new Object();     
countriesTalkFrench.continent = "africa";     
countriesTalkFrench.language = "french"; 

let item2 = {};
console.log(`item2: ${item2}`);

// Object Prototype
// Object.create
// Obje oluşturmadaki son yöntem olan object.create() yöntemi, yeni bir obje oluştururken nereden kalıtım alacağına karar vermemizi sağlayan bir yöntemdir
// Herhangi bir yerden kalıtım almasını istemediğimiz bir obje oluşturmak istediğimizde null parametresini atamak yeterli olacaktır.
let noInheritence = Object.create(null); 
let standartObject = Object.create(Object.prototype); //standart obje kalıtımı alır.
let argentina = Object.create(countriesTalkSpanish);
// argentina isimli obje örneği ise daha önce oluşturduğumuz countriesTalkSpanish isimli object literal’dan kalıtım alacağı için onunla aynı 
// property'lere sahip olur. Yani argentina objesi, Güney Amerika kıtasında bulunduğunu ve İspanyolca konuşulduğunu, kalıtım yoluyla sahip olduğu
//  property'lerden belli eder.

// objectlerin key değerlerini oluştururken camelCase yapısı kullanılır

let laptop1 = {
    brand: "Apple",
    model: "MacBook Pro",
    //camelCase
    modelName: "Macbook Pro",
    //key adını verirken sayı ile başlmak istiyorsak:
    "1kg": "1000gr"
};

//consola yazdırmak
console.log(laptop1);
//1.yöntem:
console.log(laptop1.brand);
//2.yöntem
console.log(laptop1["brand"]);


//anahtar bilgisine yeni değer eklemek
//1.yöntem
laptop1.brand = "Mac";
//2.yöntem
laptop1["brand"] = "Mac1";

//yeni bilgi eklemek
laptop1.versiyon = "10.15.7";

//anahtar bilgilerine ulaşmak, Object.keys(item)
keys = Object.keys(laptop1);

// keys.array.forEach(element => {
//     console.log(element);
//     // console.log(laptop1[element]);
// });

//vlue bilgisine ulaşmak
let values = Object.values(laptop1)
values.forEach( value => {
    console.log(value);
});

// Square brackets kullanımı
// Birden fazla kelime içeren property'ler için dot notation kullanamayız. Bunun yerine “square bracket notation” yani köşeli parantezli
//  yazım kullanılır:

let person= {};                     // set (oluştur)
person["likes sea"] = true;         // get (getir)
console.log(person["likes sea"]);   // true (doğru)
delete person["likes sea"];         // delete (sil)

// Burada, değişken(variable) key runtime(çalışma zamanında) hesaplanabilir veya kullanıcı girdisine bağlı olabilir. Sonrasında property’ye
//  erişmek için kullanabiliyoruz. Bu bize kullanımda esneklik sağlıyor.

let person1 = {
  name: "Jack",
  age: 20,
};
let key = prompt("Kişinin hangi özelliğini öğrenmek isterdiniz?", "name");

// değişken ile erişim
alert(person[key]);      // Jack (prompt’a “name” yazarsak erişeceğimiz değer)


// // Computed property kullanımı
// Bir obje oluştururken, key'ler için köşeli parantezler yardımıyla dinamik değerler(variable) kullanabiliriz. Buna hesaplanmış 
// özellikler(computed properties) denir.
// Computed properties, objedeki hangi property'nin güncelleneceğini dinamik olarak seçmemize olanak tanır.

function objectify (key, value) {
   return {
[key]: value
  }
};
objectify("name", "Anna");   //  {name: "Anna"} atanmış yeni değer


// Obje Metodları, hepsi array tipinde veri döner
// Object.keys(obj) – Key’lerden oluşan bir array döner(return).
// Object.values(obj) – Value’lardan oluşan bir array döner.
// Object.entries(obj) – [key, value] çiftlerinden oluşan bir array döner. 

//objecte metot eklemek
let user2 = {
    firstname: "zeynep",
    lastname: "dglr",
    score: [1, 2, 3, 4],
    isActive: true,
    shortname: function(){
        return `${this.firstname[0].toUpperCase()}. ${this.lastname}`
    }
};

console.log(user2);
console.log(user2.shortname());

//object ve array destructuring kullanımı
let settings = {
    userName: "Lorem",
    password: "BadPassword",
    isActive: false,
    ip: "127.0.0.1",
    serverName: "Kodluyoruz.org"
};

//rename & destructuring
let {userName: user, password, isActive, ip:serverIP, serverName} = settings;
console.log(user, password, isActive, serverIP, serverName);
console.log("settings: ",settings);
console.log("user: ", user);

//obje içindeki bazı bilgilerin çıkarılması
//settings içindeki userName in adını userName2 yapar ve yeni değişkenimize koyar 
//settingten geriye kalanları ise newSettings içine koyar yani ip ve serverName i koyar
let {userName:userName2, password:password2, isActive:isActive2, ...newSettings} = settings;
console.log("newSettings ", newSettings);

//objenin destructuring ile kopyalanması
//HATALI YÖNTEM
// let settings2 = settings

//DOĞRU YÖNTEM
let settings2 = {...settings};
settings.name = "Değişen bilgi";
console.log("settings2: ", settings2);

//array destructuring
let score = [100, 200, 300, 400];
let copyScore = [...score];

let [score1, score2, ...otherScore] = score;
console.log(`score1:${score1} - socre2:${score2} - otherScore:${otherScore}`);


let [,pronoun,,name]=["Merhaba","benim","adım","Mehmet"];
// console.log(pronoun) ve console.log(name) çıktısı: benim-Mehmet
