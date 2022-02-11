//lts: oluşabilicek güvenlik açıkları vs. için uzun süreli takip ve destek verilen sürüm
//sunuculara kurulur, kişisel bilgisayarlarda hangisinin kurulu olduğu çok önemli değil
//current:

//Dokümana(document) yazdırma işlemi
document.write('Hello world');

//Uyarı mesajı (alert) ile yazdırma işlemi
alert("Merhaba dünya");

//console.log ile yazdırma işlemi
console.log("Merhaba dünya!!!");

//var değişkeni
var name = "zeynep";
var number = 100;

//let değişkeni boş tanımlamak
let serverName;
console.log(serverName);

//let ile tanımlanan değişkene bilgi atamak:
serverName = "Https://kodluyoruz.org";

//let ile değişken tanımlarken bilgi atamak:
let password = 123;
console.log(password);

//ÖNEMLİ!!!
//değişken ataması yapmadan önce console a yazdırmaya çalışırsak hata alırız
//çünkü programlamada sıralı okuma mantığı vardır
//hatalı kullanım:
// console.log(fullname);
// let fullname= "zd";

//let ile tanımlanan değişkenin içindeki değeri değiştirmek:
let fullname = "zd";
fullname = "zeynepdaglar";
console.log(fullname);

//değişkene yeni bir metin eklemek (sadece console da gösterir ama değişkene atamaz!!!) 
console.log(fullname + "yeni bilgi ekledik");

//değişkenin içerisine yeni bilgi eklemek 
let content = "kırmızı";
content += "yeni bir cümle eklendi.";
console.log(content);

//const değişken tanımlamak:
const stabil ="buraya daha sonra bir şey atayamayız, cont değişken oluşturulurken içine bir kere değer atanır ve sabit kalır.";
console.log(stabil);

/*Boolean = Mantıksal ifadedir. true veya false değeri atanabilir
Number = Sayısal ifadedir. 2^53 -1 değerine kadar sayısal değerler atanabilir.
BigInt = 2^53-1 değerinden büyük değerleri atayabilir.
String = Metinsel ifadelerdir. Metinsel ifade tanımlanırken ifade “ ” veya ‘ ’ işaretleri arasına yazılır.
Object = Yukarıda ki 7 veri türü de primitive tiplidir. Objelerde ( nesne, dizi ) gibi referans tipler de değişkenlere atanabilir. */

/*Değişken değerleri değiştirilebilir.
Aynı isimle tekrardan tanımlanabilirler.
var ile tanımlanan değişkenler global scope veya function scope'tur. Global scope'ta tanımlanan değişkenlere her yerden ulaşılabilir. Function içerisinde tanımlanan değişkenlere ise tanımlı olduğu fonksiyonda ulaşılabilir. Bu konuyu örneklerle açıklayalım. */