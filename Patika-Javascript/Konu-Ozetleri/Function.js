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