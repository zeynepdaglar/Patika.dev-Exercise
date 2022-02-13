// Bir fonksiyonu adı varsa bunlara Normal-Adlandırılmış Fonksiyonlar (Regular/Named Functions) deriz.
// okunabilirliği açısından fonksiyonu işlevine uygun bir biçimde adlandırmalıdır.
// değer almak istediğimiz bir fonksiyon adında ön ek olarak get kullanabiliriz.
// adı olmayan anonim bir fonksiyon da kullanılabilir
// parantezler içinde alacağı parametreler belirlenir. fazla parametre geçmek kodun okunurluğunu bozabilir.
// parametrelere kendimiz bir değer atarız. Atanan bu değere argüman adı verilir.

// function isim(parametreler) {
//     ...fonksiyonun gövdesi...
//     }

function printHello(name){ //name adında bir parametre aldı
    console.log("Merhaba" + name);  	
}
printHello("Şafa");  // bir argüman vererek fonksiyonu çağırdık. Çıktı: Merhaba Şafak


// Değer Döndüren Fonksiyonlar
// Bazen fonksiyonun geriye göndereceği değeri ekrana çıktı vermek yerine bir değişken ya da başka bir fonksiyonda daha sonra kullanmamız gerekebilir. Bu gibi durumlarda fonksiyon gövdesinde return ifadesini kullanırız.
function addition(sayi1,sayi2){
    return (sayi1+sayi2);
}

var add = addition(1,2);   //add değişkenine 1+2 değerini fonksiyon kullanarak atadık.


// Fonksiyon Kapsamı
// fonksiyon içinde tanımlamış olduğunuz değişkene fonksiyon dışındaki herhangi bir yerden erişemezsiniz. Çünkü o değişken tanımlandığı fonksiyonun kapsamındadır
// . Bu sebeple değişkenimiz o fonksiyon içinde kullanılan bir lokal değişkendir
//fonksiyon  global değişkenlere de erişebilir. 

//global değişkenleri tanımlıyoruz
var sayi1 = 5;
var sayi2 = 2;   
function addition(){
    var sayi3 = 3;             //sayi3 adında lokal bir değişken tanımlıyoruz
    return sayi1+sayi2+sayi3;  //Fonksiyon içinde global ve local değişkenleri kullanıyoruz
}

function multiplication(){
    return sayi1*sayi3;  
//Burada hata alıyoruz: bunun nedeni başka bir fonksiyonun içinde tanımlı olan sayi3 lokal değişkenini kapsamı dışında 
//kullanmaya çalışmamız. sayi1 değişkeni ise global olduğundan burada kullanılabilir
}

// Callback Fonksiyonlar ve Asenkron Çalışma
// JavaScript asenkron yapıdaki bir programlama dilidir. 
// Senkron:kodumuz yukarıdan aşağı doğru sırayla işlenir ve bir satırdaki işlem bitmeden bir sonraki satıra geçilmez
// Asenkron: fonksiyonların birbirlerini beklemelerine gerek yoktur. Uzun zaman ala veya farklı görevleri olan fonksiyonlar aynı anda çalışabilir. 

// ilk parametre çalışması istenen fonksiyonu, ikinci parametre ise ne kadar süre sonra çalışması istendiğini ifade ediyor. Örneğin 1000 yazılarak 1000 milisaniye yani 1 saniye gecikme sağlanıyor.
function printScreen1 (){
    console.log("İlk ekran çıktısı");
}

 function printScreen2 (){
   setTimeout(function(){
console.log("İkinci ekran çıktısı")  
}, 3000);
}

function printScreen3 (){
    console.log("Üçüncü ekran çıktısı");
}
printScreen1();
printScreen2();
printScreen3();

// Fonksiyon Bildirimi(Function Declaration)
function mesajVer() {
    alert( 'Herkese Merhabalar!' );
    }


// Fonksiyon İfadeleri (Function Expressions)
// JavaScript bir değişkene fonksiyon atanmasına ve daha sonra bu değişkenin fonksiyon olarak kullanılmasına izin verir. Buna fonksiyon ifadeleri denir.
// Arrow Functions
// Fonksiyon yaratmanın bir diğer yolu ise ES6 ile birlikte hayatımıza giren, daha okunabilir daha basit bir syntax yapısına sahip olan arrow functions yapısıdır.
//aşağıdaki iki fonksiyonda aynı işi yapmaktadır
 let func = (param1, param2, param3) => expression;
 let func = function (param1, param2, param3) {
    return expression;
  };
//arrow functions
const karesiniAl = (sayi) => sayi * sayi;
// //Hiç parametre olmadığı zaman ise
const helloWorld = () => console.log('Hello World');
// bir fonksiyon kendisini tekrar çağırıyor ise biz buna recursion diyoruz.
// bir fonksiyon yazalım bu fonksiyon sayının kuvvetini alsın.
pow(2,2) = 4
pow(2,3) = 8
// pow(2,4) = 16 değerlerini verecek şekilde diyelim.

// 1.ci yol (recursion patterni ile düşünmeden)
function pow(x, n) {
    let result = 1;
  
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  alert(pow(2, 3)); // 8
  // recursion ile
  function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }
  
  alert(pow(2, 3)); // 8

//   Nested Functions
// Nested Functions ( İç içe fonksiyonlar ) JavaScript'te yaygın olarak kullandığımız bir yapı. Bir Fonksiyon içerisinde başka bir fonksiyonu tanımladığımız zaman buna nested functions yapısı diyoruz aslında.
function programDetayi(bootcamp, organizasyon) {
    // nested yardımcı fonk
    const tumProgram = () => bootcamp + ' ' + organizasyon;
  
    console.log('Basladi, ' + tumProgram());
    consol.log('Bitti, ' + tumProgram());
  }