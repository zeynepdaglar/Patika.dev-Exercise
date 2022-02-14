//Fonksiyonlara Parametreler Atamak ve Fonksiyondan Geridönüş Almak

//Temel Kurallar
//1: Bir fonksiyon bir veya daha fazla parametre alabilir veya hiç almayabilir
//2: Bir fonksiyon disarı bilgi gönderebilir(return) veya göndermeyebilir
//mümkünse fonksiyon bagımlılıgını azaltmak gerekir 

//bagımlılıgı olan fonksiyon:
let name = "zeynep";

function sayHello(){
    console.log(`Hello :) ${name}`);
}

sayHello();