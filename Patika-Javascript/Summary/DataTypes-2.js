//number veri tanımlamak:
let price = 100;
let tax = 0.18;
let priceTax = price * tax;
let total = priceTax + price;
console.log(
    "Fiyat:", price, 
    "KDV Oranı:", tax, 
    "KDV Tutarı:", priceTax,
    "Fiyat:", total
    );

//arttırma ve azaltma:
let counter  = 320;
counter ++; //counter += 1; veya counter = counter +1; bunların hepsi aynıdır.
console.log(counter); //321

counter --; //counter -=1; ve  counter = counter - 1; hepsi aynı 

counter *= 1;

counter /= 2;

//işlem önceliği:

//önce carpma 
//önce yapmasını istediğimiz kısmı parantez içine koyarız

//Mod almak 
// sayı 2 ye tam bölünüyorsa kalan yoksa çifttir
console.log(10 % 2); //cevap 0 sayı çift
console.log(9 % 2); //cevap(kalan) 1, sayı tek



// üs alma
console.log(2**4); 

// asağı yukarı yuvarlama
console.log(Math.floor(1.9)); //1
//yukaru yuvarlama 
console.log(Math.ceil(1.2)); //2
//yakına yuvarlama
// 1.5 ve üstü yukarı yuvarlanır
console.log(Math.round(1.2)); //1

//string ifadeyi sayıyı dönüştürmek
let stringNumber = "111";
console.log(stringNumber); //suanda 111 string olarak ekrana geldi

let newNumber = Number(stringNumber); //artık number a dönüştürdü
console.log(newNumber);

