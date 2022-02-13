// Bir fonksiyonu adı varsa bunlara Normal-Adlandırılmış Fonksiyonlar (Regular/Named Functions) deriz.
// okunabilirliği açısından fonksiyonu işlevine uygun bir biçimde adlandırmalıdır.
// değer almak istediğimiz bir fonksiyon adında ön ek olarak get kullanabiliriz.
// adı olmayan anonim bir fonksiyon da kullanılabilir
// parantezler içinde alacağı parametreler belirlenir. fazla parametre geçmek kodun okunurluğunu bozabilir.
// parametrelere kendimiz bir değer atarız. Atanan bu değere argüman adı verilir.

function printHello(name){ //name adında bir parametre aldı
    console.log("Merhaba" + name);  	
}
printHello("Şafa");  // bir argüman vererek fonksiyonu çağırdık. Çıktı: Merhaba Şafak