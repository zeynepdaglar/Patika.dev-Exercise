if(kosul) {
    // Bu kod satırı çalışacaktır.
}

else {
    // Bu kod satırı çalışır.
}

// Else kod blokları arasında tek satırlık bir kod yazılacaksa köşeli parantez { } kullanımına gerek yoktur.

//***basit if else örneği:***
var x = 5;
var y = 7;

if(x > y) {
    console.log(x + " sayisi" + y + " sayısından büyüktür." );
}

else {
    console.log(y + " sayisi" + " " + x + " sayısından büyüktür.");
}


//***not hesaplamak***
var ogrVizeNot = 45; // Bu kod satırını değiştiriniz. 

var ogrFinalNot = 60; // Bu kod satırını değiştiriniz. 

var ogrOrtalama = (ogrVizeNot * 0.3) + (ogrFinalNot * 0.7);

if(ogrOrtalama >= 0 && ogrOrtalama <= 30) {
  console.log("Not ortalamanız: " +ogrOrtalama + " KALDINIZ(FF).");
}

else if(ogrOrtalama >= 31 && ogrOrtalama <= 49) {
  console.log("Not ortalamnız: " +ogrOrtalama + " DC - KOŞULLU ");
}

else if(ogrOrtalama >= 50 && ogrOrtalama <= 84) {
  console.log("Not ortalamnız: " +ogrOrtalama + " CC - GEÇTİNİZ ");
}

else if(ogrOrtalama >= 85 && ogrOrtalama <= 100) {
  console.log("Not ortalamnız: " +ogrOrtalama + " AA - GEÇTİNİZ ");
}

//*** Bilgisayar tarafından 10 'a kadar tutulmuş olan rastgele sayıyı bulalım:***
var randomSayi = Math.floor(Math.random() * 10);
//Girdiğimiz sayıyı aklında tutması için prompt değişkene atanır
var tahmin = prompt("Bir sayı gir ve rastgele sayıyı bulmaya çalış!");
if (tahmin === randomSayi && tahmin != null) alert("Bildin!!!");
else if (tahmin == "") alert("Boş giriş yaptınız!");
else if (tahmin == null) alert("Giriş yapmaktan vazgeçtiniz!");
else {
  alert("Bir daha denee :(, Random sayi: " + randomSayi);
}
