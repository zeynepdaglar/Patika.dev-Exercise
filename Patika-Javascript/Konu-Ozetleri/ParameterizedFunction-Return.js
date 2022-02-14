//Fonksiyonlara Parametreler Atamak ve Fonksiyondan Geridönüş Almak

//Temel Kurallar
//1: Bir fonksiyon bir veya daha fazla parametre alabilir veya hiç almayabilir
//2: Bir fonksiyon disarı bilgi gönderebilir(return) veya göndermeyebilir
//mümkünse fonksiyon bagımlılıgını azaltmak gerekir 

//bagımlılıgı olan fonksiyon:
//burada dısarıdan bir değişken kullanmak yerine bu bilgiyi bir parametre ile alırsak dışa bağımlılıgı kaldırmıs oluruz


// 1)
let name = "zeynep";
function sayHi(){
    console.log(`Hi :) ${name}`);
}
sayHi();

// 2)
//bu hataları önlemek için:
function sayHello(firstname){
//eğer firstname parametresi girilmişse ekranda göster girilmemişse boş kalsın
//bunu yaparak parametre girmediğimizde ekranda undefined yazmasını önledik
console.log(`Heloo :)) ${firstname ? firstname : ""}`);
}
sayHello();

// 3)
//fonksiyona default değer atamak
//eger biz bir parametre girmezsek ekranda bir sey gözükmeyecek
//bu default değeri vermezsek ekranda undefined yazar
function sayGoodbye(firstname=""){
    console.log(`Goodbye :( ${firstname}`);
}
sayGoodbye("zeynep");